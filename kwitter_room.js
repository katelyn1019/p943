// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCFJTMHEFZUSYIk-XETKS1833DuEPidJuY",
    authDomain: "project-c5a75.firebaseapp.com",
    projectId: "project-c5a75",
    storageBucket: "project-c5a75.appspot.com",
    messagingSenderId: "494300363779",
    appId: "1:494300363779:web:81c09eaede9f1f61bfe236"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

var user = localStorage.getItem("username");
document.getElementById("username").innerHTML = "Welcome " + user + "!";

function logout() {
    window.location = "index.html";
}

function addRoom() {
    
}
