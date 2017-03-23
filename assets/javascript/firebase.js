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
  // var zips = ""; //need appropriate variable for each saved zip
  var favs = [];



//************* this saveUser function needs to be called on the logic.js file when user entered*********
function saveUser(username) {

		database.ref().push({
	    squilloName: username,
	    // favs: favs 
	  });

}

//************* this saveFavZip funtion needs to be called when user clicks to add favorite. Need variable to capture zip.*********
function saveToFavs(zip) {
	
	favs.push(zip);
	console.log(favs);

	
	localStorage.setItem("favs", favs);

	database.ref("squilloName").update({
    	favs: favs
	});


}