  // Initialize Firebase using squillo firebase database
  
  var config = {
    apiKey: "AIzaSyCp9Tb6cWTLPmjD95LDQfDXoLXJ39XXEZI",
    authDomain: "squillo-991f9.firebaseapp.com",
    databaseURL: "https://squillo-991f9.firebaseio.com",
    storageBucket: "squillo-991f9.appspot.com",
    messagingSenderId: "935359938051"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  //var squilloName = ""; local storage established on logic.js
  var zips = ""; //need appropriate variable for each saved zip
  var favs = [];



//************* this saveUser function needs to be called on the logic.js file when user entered*********
  function saveUser() {
	event.preventDefault();

		database.ref().set({
	    squilloName: squilloName
	    // favs: favs 
	  });

}

//************* this saveFavZip funtion needs to be called when user clicks to add favorite. Need variable to capture zip.*********
function saveFavZip() {
	event.preventDefault();
	zips = $("#zip-input").val().trim();
	favs.push(zips);
	console.log(favs);

	
	localStorage.setItem("favs", favs);

		database.ref().update({
	    favs: favs

	});

}