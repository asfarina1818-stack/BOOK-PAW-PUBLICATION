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
function editBio(){

    const bio = document.getElementById("biodata");

    const newBio = prompt(
        "Kemaskini biodata penulis:",
        bio.innerHTML
    );

    if(newBio){

        bio.innerHTML = newBio;

        localStorage.setItem(
            "biodata",
            newBio
        );

    }

}


window.addEventListener("load", function(){

    const bio = document.getElementById("biodata");

    const savedBio = localStorage.getItem("biodata");

    if(savedBio && bio){

        bio.innerHTML = savedBio;

    }

});

function editKarya(){

    const karya = document.getElementById("karya");

    const newKarya = prompt(
        "Masukkan senarai karya (pisahkan dengan koma):",
        karya.innerText
    );

   if(newKarya){

        karya.innerHTML = "";

        newKarya.split(",").forEach(function(item){

            let li = document.createElement("li");

            li.innerHTML = item.trim();

            karya.appendChild(li);

        });


       localStorage.setItem("karya", newKarya);

    }

}



window.addEventListener("load", function(){

    const karya = document.getElementById("karya");

    const savedKarya = localStorage.getItem("karya");

    if(savedKarya && karya){

        karya.innerHTML="";

        savedKarya.split(",").forEach(function(item){

            let li=document.createElement("li");

            li.innerHTML=item.trim();

            karya.appendChild(li);

        });

    }

});

function editPencapaian(){

    const pencapaian = document.getElementById("pencapaian");

    const newPencapaian = prompt(
        "Masukkan pencapaian (pisahkan dengan koma):",
        pencapaian.innerText
    );

    if(newPencapaian){

        pencapaian.innerHTML = "";

        newPencapaian.split(",").forEach(function(item){

            let li = document.createElement("li");

            li.innerHTML = item.trim();

            pencapaian.appendChild(li);

        });

        localStorage.setItem(
            "pencapaian",
            newPencapaian
        );

    }

}

function editProfil(){

let biodata = prompt(
"Edit Biodata:",
document.getElementById("biodata").innerHTML
);


let pendidikan = prompt(
"Edit Pendidikan:",
document.getElementById("pendidikan").innerHTML
);


let kerjaya = prompt(
"Edit Kerjaya:",
document.getElementById("kerjaya").innerHTML
);


let karya = prompt(
"Edit Karya (pisahkan dengan koma):",
document.getElementById("karya").innerText
);


let pencapaian = prompt(
"Edit Pencapaian (pisahkan dengan koma):",
document.getElementById("pencapaian").innerText
);



if(biodata){

document.getElementById("biodata").innerHTML=biodata;

localStorage.setItem("biodata",biodata);

}


if(pendidikan){

document.getElementById("pendidikan").innerHTML=pendidikan;

localStorage.setItem("pendidikan",pendidikan);

}


if(kerjaya){

document.getElementById("kerjaya").innerHTML=kerjaya;

localStorage.setItem("kerjaya",kerjaya);

}


if(karya){

let ul=document.getElementById("karya");

ul.innerHTML="";

karya.split(",").forEach(function(item){

let li=document.createElement("li");

li.innerHTML=item.trim();

ul.appendChild(li);

});

localStorage.setItem("karya",karya);

}



if(pencapaian){

let ul=document.getElementById("pencapaian");

ul.innerHTML="";

pencapaian.split(",").forEach(function(item){

let li=document.createElement("li");

li.innerHTML=item.trim();

ul.appendChild(li);

});

localStorage.setItem("pencapaian",pencapaian);

}


}
function setTheme(theme){

document.body.className = theme;

localStorage.setItem(
"theme",
theme
);

}



window.addEventListener("load",function(){

let savedTheme = localStorage.getItem("theme");

if(savedTheme){

document.body.className = savedTheme;

}

});
