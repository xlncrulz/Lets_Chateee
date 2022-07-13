
var  firebaseConfig = {
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

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();
function redirectToRoomName(name){
      localStorage.setItem("room_name",name)
      window.location="kwitter_page.html"
}