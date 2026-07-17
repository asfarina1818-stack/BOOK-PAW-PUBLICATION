function changeTheme(color){

document.documentElement.style.setProperty(
"--theme-color",
color
);


localStorage.setItem(
"theme",
color
);

}



window.onload=function(){

let savedTheme =
localStorage.getItem("theme");


if(savedTheme){

document.documentElement.style.setProperty(
"--theme-color",
savedTheme
);

}

}

function openTheme(){

document.getElementById("themeBox").style.display="flex";

}


function closeTheme(){

document.getElementById("themeBox").style.display="none";

}

function openTheme(){

document.getElementById("themeBox").style.display="flex";

}


function closeTheme(){

document.getElementById("themeBox").style.display="none";

}
