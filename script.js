const day = new Date().getDay();
const isSchoolnight = day < 5; // less than friday
const string = `it ${isSchoolnight ? "is" : "is (not)"} a school night`;
const messageElement = document.getElementById("message");
messageElement.innerHTML = string;
