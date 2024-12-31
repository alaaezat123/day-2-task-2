var nameS = document.getElementById("po");
var age = document.getElementById("popo");
var result = document.getElementById("result");
var table = document.getElementById("table");
var id = 1;
var link = document.getElementById("link");

nameS.addEventListener("focus", function (e) {
  nameS.style.border = "4px solid black";
});

nameS.addEventListener("blur", function (e) {
  nameS.style.border = "4px solid orange";
});

nameS.addEventListener("input", function (e) {
  if (nameS.value.length >= 3) {
    nameS.style.border = "4px solid green";
    result.style.display = "none";
  } else {
    nameS.style.border = "4px solid red";
    result.style.display = "block";
  }
});

age.addEventListener("focus", function (e) {
  age.style.border = "4px solid black";
});

age.addEventListener("blur", function (e) {
  age.style.border = "4px solid orange";
});

age.addEventListener("input", function (e) {
  if (age.value >= 18 && age.value < 30) {
    age.style.border = "4px solid green";
    result.style.display = "none";
  } else {
    age.style.border = "4px solid red";
    result.style.display = "block";
  }
});

function addFun() {
    
  var newStudent = document.createElement("tr");
  newStudent.setAttribute("id", "student" + id);

  newStudent.innerHTML = `
    <td>${id}</td>
    <td>${nameS.value}</td>
    <td>${age.value}</td>
    <td><button onclick="removeStudent(${id})">Delete</button></td>
  `;

  table.appendChild(newStudent);
  id++;
}

function removeStudent(studentId) {
  var studentRow = document.getElementById("student" + studentId);
  if (studentRow) {
    table.removeChild(studentRow);
  }
}
