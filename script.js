function showAuthor(name, info){

document.getElementById("authorName").innerHTML = name;
document.getElementById("authorInfo").innerHTML = info;

document.getElementById("popup").style.display="flex";

}

function closePopup(){

document.getElementById("popup").style.display="none";

}
