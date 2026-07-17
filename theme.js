let selectedBackground = "";

/* =========================
OPEN / CLOSE APPEARANCE
========================= */

function openTheme(){

    const popup = document.getElementById("themeBox");

    if(popup){
        popup.style.display = "flex";
        document.body.style.overflow = "hidden";
    }

}

function closeTheme(){

    const popup = document.getElementById("themeBox");

    if(popup){
        popup.style.display = "none";
        document.body.style.overflow = "";
    }

}

/* =========================
THEME COLOR
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
WEBSITE BACKGROUND
========================= */

function previewBackground(event){

    const file = event.target.files[0];

    const previewBox =
        document.getElementById("previewBox");

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

function applyBackground(){

    if(!selectedBackground){

        alert("Please choose an image first.");

        return;

    }

    localStorage.setItem(
        "website-background",
        selectedBackground
    );

    setWebsiteBackground(selectedBackground);

    closeTheme();

}

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
BANNER TEXT SETTINGS
========================= */

function saveBanner(){

    const brandInput =
        document.getElementById("brandInput");

    const titleInput =
        document.getElementById("titleInput");

    const descInput =
        document.getElementById("descInput");

    const bannerBrand =
        document.getElementById("bannerBrand");

    const bannerTitle =
        document.getElementById("bannerTitle");

    const bannerDescription =
        document.getElementById("bannerDescription");

    const brand =
        brandInput ? brandInput.value.trim() : "";

    const title =
        titleInput ? titleInput.value.trim() : "";

    const description =
        descInput ? descInput.value.trim() : "";

    if(brand && bannerBrand){

        bannerBrand.textContent = brand;

        localStorage.setItem(
            "banner-brand",
            brand
        );

    }

    if(title && bannerTitle){

        bannerTitle.textContent = title;

        localStorage.setItem(
            "banner-title",
            title
        );

    }

    if(description && bannerDescription){

        bannerDescription.textContent =
            description;

        localStorage.setItem(
            "banner-description",
            description
        );

    }

    alert("Banner saved successfully.");

}


/* =========================
BANNER BACKGROUND IMAGE
========================= */

function applyBannerImage(image){

    const banner =
        document.getElementById("mainBanner");

    const preview =
        document.getElementById("bannerPreview");

    if(banner){

        banner.style.backgroundImage =
            `linear-gradient(
                rgba(0,0,0,.28),
                rgba(0,0,0,.28)
            ),
            url("${image}")`;

        banner.style.backgroundSize =
            "cover";

        banner.style.backgroundPosition =
            "center";

        banner.style.backgroundRepeat =
            "no-repeat";

    }

    if(preview){

        preview.style.backgroundImage =
            `url("${image}")`;

        preview.textContent = "";

    }

}
/* =========================
AUTHOR POPUP
========================= */

function openAuthorPopup(
    name,
    description,
    image,
    link
){

    const popup =
        document.getElementById("authorPopup");

    const popupName =
        document.getElementById("popupAuthorName");

    const popupDescription =
        document.getElementById("popupAuthorDescription");

    const popupImage =
        document.getElementById("popupAuthorImage");

    const popupLink =
        document.getElementById("popupAuthorLink");

    if(
        !popup ||
        !popupName ||
        !popupDescription ||
        !popupImage ||
        !popupLink
    ){

        alert(
            "Author popup belum lengkap dalam index.html."
        );

        return;

    }

    popupName.textContent = name;

    popupDescription.textContent =
        description;

    popupImage.src = image;
    popupImage.alt = name;

    popupLink.href = link;

    popup.style.display = "flex";

    document.body.style.overflow =
        "hidden";

}


function closeAuthorPopup(){

    const popup =
        document.getElementById("authorPopup");

    if(popup){

        popup.style.display =
            "none";

    }

    document.body.style.overflow =
        "";

}/* =========================
AUTHOR POPUP
========================= */

function openAuthorPopup(
    name,
    description,
    image,
    link
){

    const popup =
        document.getElementById("authorPopup");

    const popupName =
        document.getElementById("popupAuthorName");

    const popupDescription =
        document.getElementById("popupAuthorDescription");

    const popupImage =
        document.getElementById("popupAuthorImage");

    const popupLink =
        document.getElementById("popupAuthorLink");

    if(
        !popup ||
        !popupName ||
        !popupDescription ||
        !popupImage ||
        !popupLink
    ){

        alert(
            "Author popup belum lengkap dalam index.html."
        );

        return;

    }

    popupName.textContent = name;

    popupDescription.textContent =
        description;

    popupImage.src = image;
    popupImage.alt = name;

    popupLink.href = link;

    popup.style.display = "flex";

    document.body.style.overflow =
        "hidden";

}


function closeAuthorPopup(){

    const popup =
        document.getElementById("authorPopup");

    if(popup){

        popup.style.display =
            "none";

    }

    document.body.style.overflow =
        "";

}/* =========================
AUTHOR POPUP
========================= */

function openAuthorPopup(
    name,
    description,
    image,
    link
){

    const popup =
        document.getElementById("authorPopup");

    const popupName =
        document.getElementById("popupAuthorName");

    const popupDescription =
        document.getElementById("popupAuthorDescription");

    const popupImage =
        document.getElementById("popupAuthorImage");

    const popupLink =
        document.getElementById("popupAuthorLink");

    if(
        !popup ||
        !popupName ||
        !popupDescription ||
        !popupImage ||
        !popupLink
    ){

        alert(
            "Author popup belum lengkap dalam index.html."
        );

        return;

    }

    popupName.textContent = name;

    popupDescription.textContent =
        description;

    popupImage.src = image;
    popupImage.alt = name;

    popupLink.href = link;

    popup.style.display = "flex";

    document.body.style.overflow =
        "hidden";

}


function closeAuthorPopup(){

    const popup =
        document.getElementById("authorPopup");

    if(popup){

        popup.style.display =
            "none";

    }

    document.body.style.overflow =
        "";

}
/* =========================
LOAD SAVED SETTINGS
========================= */

document.addEventListener(
    "DOMContentLoaded",
    function(){

        const savedTheme =
            localStorage.getItem(
                "theme-color"
            );

        const savedBackground =
            localStorage.getItem(
                "website-background"
            );

        if(savedTheme){

            document.documentElement.style.setProperty(
                "--theme-color",
                savedTheme
            );

        }

        if(savedBackground){

            selectedBackground =
                savedBackground;

            setWebsiteBackground(
                savedBackground
            );

            const previewBox =
                document.getElementById(
                    "previewBox"
                );

            if(previewBox){

                previewBox.style.backgroundImage =
                    `url("${savedBackground}")`;

                previewBox.textContent = "";

            }

        }


        /* LOAD BANNER TEXT */

        const savedBrand =
            localStorage.getItem(
                "banner-brand"
            );

        const savedTitle =
            localStorage.getItem(
                "banner-title"
            );

        const savedDescription =
            localStorage.getItem(
                "banner-description"
            );

        const bannerBrand =
            document.getElementById(
                "bannerBrand"
            );

        const bannerTitle =
            document.getElementById(
                "bannerTitle"
            );

        const bannerDescription =
            document.getElementById(
                "bannerDescription"
            );

        const brandInput =
            document.getElementById(
                "brandInput"
            );

        const titleInput =
            document.getElementById(
                "titleInput"
            );

        const descInput =
            document.getElementById(
                "descInput"
            );

        if(savedBrand && bannerBrand){

            bannerBrand.textContent =
                savedBrand;

        }

        if(savedTitle && bannerTitle){

            bannerTitle.textContent =
                savedTitle;

        }

        if(
            savedDescription &&
            bannerDescription
        ){

            bannerDescription.textContent =
                savedDescription;

        }

        if(brandInput){

            brandInput.value =
                savedBrand ||
                (
                    bannerBrand
                    ? bannerBrand.textContent
                    : ""
                );

        }

        if(titleInput){

            titleInput.value =
                savedTitle ||
                (
                    bannerTitle
                    ? bannerTitle.textContent
                    : ""
                );

        }

        if(descInput){

            descInput.value =
                savedDescription ||
                (
                    bannerDescription
                    ? bannerDescription.textContent.trim()
                    : ""
                );

        }


        /* BANNER IMAGE UPLOAD */

        const bannerImageInput =
            document.getElementById(
                "bannerImageInput"
            );

        if(bannerImageInput){

            bannerImageInput.addEventListener(
                "change",
                function(){

                    const file =
                        this.files[0];

                    if(!file){
                        return;
                    }

                    if(
                        !file.type.startsWith(
                            "image/"
                        )
                    ){

                        alert(
                            "Please choose an image file."
                        );

                        return;

                    }

                    const reader =
                        new FileReader();

                    reader.onload =
                        function(event){

                            const bannerImage =
                                event.target.result;

                            try{

                                localStorage.setItem(
                                    "bannerBackgroundImage",
                                    bannerImage
                                );

                                applyBannerImage(
                                    bannerImage
                                );

                            }catch(error){

                                alert(
                                    "This image is too large. Please choose a smaller image."
                                );

                            }

                        };

                    reader.readAsDataURL(
                        file
                    );

                }
            );

        }


        /* LOAD SAVED BANNER IMAGE */

        const savedBannerImage =
            localStorage.getItem(
                "bannerBackgroundImage"
            );

        if(savedBannerImage){

            applyBannerImage(
                savedBannerImage
            );

        }


        /* CLOSE AUTHOR POPUP
        WHEN CLICKING OUTSIDE */

        const authorPopup =
            document.getElementById(
                "authorPopup"
            );

        if(authorPopup){

            authorPopup.addEventListener(
                "click",
                function(event){

                    if(
                        event.target ===
                        authorPopup
                    ){

                        closeAuthorPopup();

                    }

                }
            );

        }

    }
);


/* =========================
ESC KEY
========================= */

document.addEventListener(
    "keydown",
    function(event){

        if(event.key === "Escape"){

            closeAuthorPopup();
            closeTheme();

        }

    }
);
/* SEARCH AUTHOR */

function searchAuthor(){

    const searchInput =
        document.getElementById("authorSearch");

    if(!searchInput) return;

    const searchText =
        searchInput.value.toLowerCase().trim();

    const authorCards =
        document.querySelectorAll(".author-grid .card");

    authorCards.forEach(function(card){

        const authorName =
            card.querySelector("h3");

        if(!authorName) return;

        const name =
            authorName.textContent.toLowerCase();

        if(name.includes(searchText)){
            card.style.display = "";
        }else{
            card.style.display = "none";
        }

    });

}
function clearSearch(){

    const input =
        document.getElementById("authorSearch");

    input.value="";

    searchAuthor();

    input.focus();

}
