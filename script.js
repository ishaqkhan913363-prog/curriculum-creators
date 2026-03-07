document
.getElementById("curriculumForm")
.addEventListener("submit", async function(e){

e.preventDefault();

let course = document.getElementById("course").value;

let level = document.getElementById("level").value;

let duration = document.getElementById("duration").value;

try{

let response = await fetch("http://localhost:5000/generate-curriculum",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
course:course,
level:level,
duration:duration
})

});

let data = await response.json();

let result=document.getElementById("result");

result.style.display="block";

let html=`<h3>${data.course} Curriculum (${data.level})</h3><ul>`;

data.curriculum.forEach(function(item){

html+=`<li>${item}</li>`;

});

html+="</ul>";

result.innerHTML=html;

}

catch(error){

console.log(error);

}

});


particlesJS("particles-js",{

particles:{
number:{value:80},

color:{value:"#6366f1"},

shape:{type:"circle"},

opacity:{value:0.5},

size:{value:3},

line_linked:{
enable:true,
distance:150,
color:"#8b5cf6",
opacity:0.4
},

move:{
enable:true,
speed:2
}

},

interactivity:{
events:{
onhover:{
enable:true,
mode:"repulse"
}
}
}

});
document
.getElementById("curriculumForm")
.addEventListener("submit", async function(e){

e.preventDefault();

let course = document.getElementById("course").value;
let level = document.getElementById("level").value;
let duration = document.getElementById("duration").value;

try {

let response = await fetch("http://localhost:5000/generate-curriculum", {

method: "POST",

headers: {
"Content-Type": "application/json"
},

body: JSON.stringify({
course: course,
level: level,
duration: duration
})

});

let data = await response.json();

let result = document.getElementById("result");

result.style.display = "block";

let html = `<h3>${data.course} Curriculum (${data.level})</h3><ul>`;

data.curriculum.forEach(function(topic){

html += `<li>${topic}</li>`;

});

html += "</ul>";

result.innerHTML = html;

}

catch(error){

console.log("Error:", error);

}

});