const day = new Date().getDay();
const isSchoolnight = day < 5; // less than friday
const string = `${isSchoolnight ? "it’s" : "it’s not"} a school night`;
const messageElement = document.getElementById("message");
messageElement.innerHTML = string;
