function showAuthor(name, info){

document.getElementById("authorName").innerHTML = name;
document.getElementById("authorInfo").innerHTML = info;

document.getElementById("popup").style.display="flex";

}

function closePopup(){

document.getElementById("popup").style.display="none";

}
function changeImage(event){

    const image = document.getElementById("profileImage");
    const file = event.target.files[0];

    if(file){

        const reader = new FileReader();

        reader.onload = function(e){

            image.src = e.target.result;

           localStorage.setItem(
    window.location.pathname + "_image",
    e.target.result
);

        }

        reader.readAsDataURL(file);

    }

}



window.onload = function(){

    const image = document.getElementById("profileImage");

   const savedImage = localStorage.getItem(
    window.location.pathname + "_image"
);

    if(savedImage && image){

        image.src = savedImage;

    }

}
