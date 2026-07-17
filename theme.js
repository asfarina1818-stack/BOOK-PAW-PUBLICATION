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
