let selectedBackground = "";


/* =========================
OPEN / CLOSE POPUP
========================= */

function openTheme(){

    const popup = document.getElementById("themeBox");

    if(popup){
        popup.style.display = "flex";
    }

}


function closeTheme(){

    const popup = document.getElementById("themeBox");

    if(popup){
        popup.style.display = "none";
    }

}


/* =========================
CHANGE THEME COLOR
========================= */

function changeTheme(color){

    document.documentElement.style.setProperty(
        "--theme-color",
        color
    );

    localStorage.setItem(
        "theme-color",
        color
    );

}


/* =========================
PREVIEW BACKGROUND
========================= */

function previewBackground(event){

    const file = event.target.files[0];
    const previewBox = document.getElementById("previewBox");

    if(!file){
        return;
    }

    if(!file.type.startsWith("image/")){
        alert("Please choose an image file.");
        return;
    }

    const reader = new FileReader();

    reader.onload = function(e){

        selectedBackground = e.target.result;

        if(previewBox){

            previewBox.style.backgroundImage =
                `url("${selectedBackground}")`;

            previewBox.textContent = "";

        }

    };

    reader.readAsDataURL(file);

}


/* =========================
APPLY BACKGROUND
========================= */

function applyBackground(){

    if(!selectedBackground){

        alert("Please choose an image first.");

        return;

    }

    setWebsiteBackground(selectedBackground);

    try{

        localStorage.setItem(
            "website-background",
            selectedBackground
        );

    }catch(error){

        alert("This image is too large. Please choose a smaller image.");

        return;

    }

    closeTheme();

}


/* =========================
SET BACKGROUND
========================= */

function setWebsiteBackground(image){

    document.body.style.backgroundImage =
        `linear-gradient(
            rgba(255,255,255,.82),
            rgba(255,255,255,.82)
        ),
        url("${image}")`;

    document.body.style.backgroundSize = "cover";

    document.body.style.backgroundPosition = "center";

    document.body.style.backgroundRepeat = "no-repeat";

    document.body.style.backgroundAttachment = "fixed";

}


/* =========================
REMOVE BACKGROUND
========================= */

function removeBackground(){

    selectedBackground = "";

    localStorage.removeItem(
        "website-background"
    );

    document.body.style.backgroundImage = "";

    document.body.style.backgroundSize = "";

    document.body.style.backgroundPosition = "";

    document.body.style.backgroundRepeat = "";

    document.body.style.backgroundAttachment = "";

    const previewBox =
        document.getElementById("previewBox");

    if(previewBox){

        previewBox.style.backgroundImage = "";

        previewBox.textContent =
            "No image selected";

    }

}


/* =========================
LOAD SAVED SETTINGS
========================= */

document.addEventListener(
    "DOMContentLoaded",
    function(){

        const savedTheme =
            localStorage.getItem("theme-color");

        const savedBackground =
            localStorage.getItem("website-background");

        if(savedTheme){

            document.documentElement.style.setProperty(
                "--theme-color",
                savedTheme
            );

        }

        if(savedBackground){

            selectedBackground = savedBackground;

            setWebsiteBackground(
                savedBackground
            );

            const previewBox =
                document.getElementById("previewBox");

            if(previewBox){

                previewBox.style.backgroundImage =
                    `url("${savedBackground}")`;

                previewBox.textContent = "";

            }

        }

    }
);

/* =========================
BANNER SETTINGS
========================= */

function saveBanner(){

    const brandInput = document.getElementById("brandInput");
    const titleInput = document.getElementById("titleInput");
    const descInput = document.getElementById("descInput");

    const bannerBrand = document.getElementById("bannerBrand");
    const bannerTitle = document.getElementById("bannerTitle");
    const bannerDescription = document.getElementById("bannerDescription");

    const brand = brandInput.value.trim();
    const title = titleInput.value.trim();
    const description = descInput.value.trim();

    if(brand){
        bannerBrand.textContent = brand;
        localStorage.setItem("banner-brand", brand);
    }

    if(title){
        bannerTitle.textContent = title;
        localStorage.setItem("banner-title", title);
    }

    if(description){
        bannerDescription.textContent = description;
        localStorage.setItem("banner-description", description);
    }

    alert("Banner saved successfully.");
}


/* =========================
LOAD SAVED BANNER
========================= */

document.addEventListener("DOMContentLoaded", function(){

    const savedBrand = localStorage.getItem("banner-brand");
    const savedTitle = localStorage.getItem("banner-title");
    const savedDescription = localStorage.getItem("banner-description");

    const bannerBrand = document.getElementById("bannerBrand");
    const bannerTitle = document.getElementById("bannerTitle");
    const bannerDescription = document.getElementById("bannerDescription");

    const brandInput = document.getElementById("brandInput");
    const titleInput = document.getElementById("titleInput");
    const descInput = document.getElementById("descInput");

    if(savedBrand && bannerBrand){
        bannerBrand.textContent = savedBrand;
    }

    if(savedTitle && bannerTitle){
        bannerTitle.textContent = savedTitle;
    }

    if(savedDescription && bannerDescription){
        bannerDescription.textContent = savedDescription;
    }

    if(brandInput){
        brandInput.value =
            savedBrand || bannerBrand?.textContent || "";
    }

    if(titleInput){
        titleInput.value =
            savedTitle || bannerTitle?.textContent || "";
    }

    if(descInput){
        descInput.value =
            savedDescription || bannerDescription?.textContent.trim() || "";
    }

});
/* =========================
BANNER BACKGROUND IMAGE
========================= */

const bannerImageInput = document.getElementById("bannerImageInput");
const mainBanner = document.getElementById("mainBanner");
const bannerPreview = document.getElementById("bannerPreview");

if (bannerImageInput) {

    bannerImageInput.addEventListener("change", function () {

        const file = this.files[0];

        if (!file) return;

        if (!file.type.startsWith("image/")) {
            alert("Please choose an image file.");
            return;
        }

        const reader = new FileReader();

        reader.onload = function (event) {

            const bannerImage = event.target.result;

            localStorage.setItem("bannerBackgroundImage", bannerImage);

            if (mainBanner) {
                mainBanner.style.backgroundImage =
                    `linear-gradient(rgba(0,0,0,.28), rgba(0,0,0,.28)), url("${bannerImage}")`;

                mainBanner.style.backgroundSize = "cover";
                mainBanner.style.backgroundPosition = "center";
                mainBanner.style.backgroundRepeat = "no-repeat";
            }

            if (bannerPreview) {
                bannerPreview.style.backgroundImage = `url("${bannerImage}")`;
                bannerPreview.textContent = "";
            }

        };

        reader.readAsDataURL(file);

    });

}


/* LOAD SAVED BANNER IMAGE */

const savedBannerImage =
    localStorage.getItem("bannerBackgroundImage");

if (savedBannerImage) {

    if (mainBanner) {
        mainBanner.style.backgroundImage =
            `linear-gradient(rgba(0,0,0,.28), rgba(0,0,0,.28)), url("${savedBannerImage}")`;

        mainBanner.style.backgroundSize = "cover";
        mainBanner.style.backgroundPosition = "center";
        mainBanner.style.backgroundRepeat = "no-repeat";
    }

    if (bannerPreview) {
        bannerPreview.style.backgroundImage =
            `url("${savedBannerImage}")`;

        bannerPreview.textContent = "";
    }

}/* =========================
BANNER BACKGROUND IMAGE
========================= */

const bannerImageInput = document.getElementById("bannerImageInput");
const mainBanner = document.getElementById("mainBanner");
const bannerPreview = document.getElementById("bannerPreview");

if (bannerImageInput) {

    bannerImageInput.addEventListener("change", function () {

        const file = this.files[0];

        if (!file) return;

        if (!file.type.startsWith("image/")) {
            alert("Please choose an image file.");
            return;
        }

        const reader = new FileReader();

        reader.onload = function (event) {

            const bannerImage = event.target.result;

            localStorage.setItem("bannerBackgroundImage", bannerImage);

            if (mainBanner) {
                mainBanner.style.backgroundImage =
                    `linear-gradient(rgba(0,0,0,.28), rgba(0,0,0,.28)), url("${bannerImage}")`;

                mainBanner.style.backgroundSize = "cover";
                mainBanner.style.backgroundPosition = "center";
                mainBanner.style.backgroundRepeat = "no-repeat";
            }

            if (bannerPreview) {
                bannerPreview.style.backgroundImage = `url("${bannerImage}")`;
                bannerPreview.textContent = "";
            }

        };

        reader.readAsDataURL(file);

    });

}


/* LOAD SAVED BANNER IMAGE */

const savedBannerImage =
    localStorage.getItem("bannerBackgroundImage");

if (savedBannerImage) {

    if (mainBanner) {
        mainBanner.style.backgroundImage =
            `linear-gradient(rgba(0,0,0,.28), rgba(0,0,0,.28)), url("${savedBannerImage}")`;

        mainBanner.style.backgroundSize = "cover";
        mainBanner.style.backgroundPosition = "center";
        mainBanner.style.backgroundRepeat = "no-repeat";
    }

    if (bannerPreview) {
        bannerPreview.style.backgroundImage =
            `url("${savedBannerImage}")`;

        bannerPreview.textContent = "";
    }

}/* =========================
BANNER BACKGROUND IMAGE
========================= */

const bannerImageInput = document.getElementById("bannerImageInput");
const mainBanner = document.getElementById("mainBanner");
const bannerPreview = document.getElementById("bannerPreview");

if (bannerImageInput) {

    bannerImageInput.addEventListener("change", function () {

        const file = this.files[0];

        if (!file) return;

        if (!file.type.startsWith("image/")) {
            alert("Please choose an image file.");
            return;
        }

        const reader = new FileReader();

        reader.onload = function (event) {

            const bannerImage = event.target.result;

            localStorage.setItem("bannerBackgroundImage", bannerImage);

            if (mainBanner) {
                mainBanner.style.backgroundImage =
                    `linear-gradient(rgba(0,0,0,.28), rgba(0,0,0,.28)), url("${bannerImage}")`;

                mainBanner.style.backgroundSize = "cover";
                mainBanner.style.backgroundPosition = "center";
                mainBanner.style.backgroundRepeat = "no-repeat";
            }

            if (bannerPreview) {
                bannerPreview.style.backgroundImage = `url("${bannerImage}")`;
                bannerPreview.textContent = "";
            }

        };

        reader.readAsDataURL(file);

    });

}


/* LOAD SAVED BANNER IMAGE */

const savedBannerImage =
    localStorage.getItem("bannerBackgroundImage");

if (savedBannerImage) {

    if (mainBanner) {
        mainBanner.style.backgroundImage =
            `linear-gradient(rgba(0,0,0,.28), rgba(0,0,0,.28)), url("${savedBannerImage}")`;

        mainBanner.style.backgroundSize = "cover";
        mainBanner.style.backgroundPosition = "center";
        mainBanner.style.backgroundRepeat = "no-repeat";
    }

    if (bannerPreview) {
        bannerPreview.style.backgroundImage =
            `url("${savedBannerImage}")`;

        bannerPreview.textContent = "";
    }

}
/* =========================
AUTHOR POPUP
========================= */

function openAuthorPopup(name, description, image, link) {

    const popup = document.getElementById("authorPopup");
    const popupName = document.getElementById("popupAuthorName");
    const popupDescription = document.getElementById(
        "popupAuthorDescription"
    );
    const popupImage = document.getElementById("popupAuthorImage");
    const popupLink = document.getElementById("popupAuthorLink");

    if (!popup) return;

    popupName.textContent = name;
    popupDescription.textContent = description;
    popupImage.src = image;
    popupImage.alt = name;
    popupLink.href = link;

    popup.style.display = "flex";
    document.body.style.overflow = "hidden";
}


function closeAuthorPopup() {

    const popup = document.getElementById("authorPopup");

    if (!popup) return;

    popup.style.display = "none";
    document.body.style.overflow = "";
}


/* TUTUP BILA KLIK LUAR POPUP */

const authorPopup = document.getElementById("authorPopup");

if (authorPopup) {

    authorPopup.addEventListener("click", function (event) {

        if (event.target === authorPopup) {
            closeAuthorPopup();
        }

    });

}


/* TUTUP GUNA ESC */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {
        closeAuthorPopup();
    }

});
