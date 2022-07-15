//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyA2iiIt7L7a8REeNOWzay7OmbZxcSnWqmc",
      authDomain: "kwitter-app-891ae.firebaseapp.com",
      databaseURL: "https://kwitter-app-891ae-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-891ae",
      storageBucket: "kwitter-app-891ae.appspot.com",
      messagingSenderId: "782979081996",
      appId: "1:782979081996:web:8d73c2b9e621e1bd0dcb29"
    };
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
      firebase_message_id = childKey;
      message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send()
{
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
   });

  document.getElementById("msg").value = "";
}