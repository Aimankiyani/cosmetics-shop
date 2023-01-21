 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
 import { getDatabase,push,set,ref,onValue,update,remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyA0MUK76CqHv41StNzDgAMGGcDs7IG3VR4",
   authDomain: "contact-b1c44.firebaseapp.com",
   projectId: "contact-b1c44",
   storageBucket: "contact-b1c44.appspot.com",
   messagingSenderId: "927064428113",
   appId: "1:927064428113:web:6478328272b62337ed3270",
   measurementId: "G-05JW97LFPN"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
 const Dt = getDatabase();



 window.add = function(){
    var c_name = document.getElementById("contact_name").value;
   var c_email = document.getElementById("contact_email").value;
   var c_phone = document.getElementById("contact_phone").value;
   var c_message = document.getElementById("contact_message").value;
   if(c_name == ""){
    alert("please enter name");
   }else if(c_email == "" || c_email.indexOf("@")== -1){
   alert("please enter email")
   } else if (c_phone.length != 11){
    alert("please enter correct number")
   } else if(c_message.length < 5){
    alert("please enter proper message")
   }else {
    var obj = {
        name: c_name,
        email:c_email,
        phone:c_phone,
        message:c_message,
    }
    var Userref = push(ref(Dt , "Contact/"))
    obj.id = Userref.key 
    set(Userref,obj)
    document.getElementById("contact_name").value = "";
    document.getElementById("contact_email").value = "";
    document.getElementById("contact_phone").value = "";
    document.getElementById("contact_message").value = "";
   }

}