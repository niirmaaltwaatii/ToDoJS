/*
JavaScript for ToDoJS
Source-Code : https://www.github.com/niirmaaltwaatii/ToDoJS.git
*/
function add() {
  var text = document.getElementById("text");
  var list = document.getElementById("list");

  var li = document.createElement("li");
  var txt = document.createTextNode(text.value);

  li.appendChild(txt);
  list.appendChild(li);

  list.style.visibility = "visible";
  text.value = "";
}

addEventListener("keydown",keydown)

function keydown(e){
    var txt = document.getElementById("text").value;
    if (txt && e.keyCode === 13){
        add();
    }
}