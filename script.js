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

    image.src = URL.createObjectURL(event.target.files[0]);

}
