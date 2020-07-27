/*
JavaScript for ToDoJS
Source-Code : https://www.github.com/niirmaaltwaatii/ToDoJS.git
*/
var id = 0;

var arr = [

];

function add(){
  add0(id);
}

function add0(id) {
  id += 1;
  this.id = id;
  console.log(id);
  console.log(this.id);
  var text = document.getElementById("text");
  var list = document.getElementById("list");

  var li = document.createElement("li");
  li.id=this.id;

  var span = document.createElement("span");
  var txt = document.createTextNode(text.value);
  span.appendChild(txt);

  var chk =document.createElement("input");
  chk.type="checkbox";

  var btn = document.createElement("button");
  btn.className="del";
  btn.innerHTML="DELETE";
  // btn.onclick=document.getElementById(this.id).visibility="hidden";

  li.appendChild(chk);
  li.appendChild(span);
  li.appendChild(btn);
  list.appendChild(li);

  // arr.push(li);
  // list.appendChild(arr.map());

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