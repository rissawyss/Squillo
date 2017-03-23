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
  var name = "";
  var zip = ""; //need appropriate variable for each saved zip
  var singleFamilyData = "";
  var medianRentData = "";
  var medianListData = "";
  var medianSaleData = "";
  var bdrm1Data = "";
  var bdrm2Data = "";
  var foreclosureData = "";
  var salesTaxData = "";
  var favs = [];




//************* this saveUser function needs to be called on the logic.js file when user entered*********
  function saveUser() {
	event.preventDefault();

	name = $("#name").val();

		database.ref().push({
	    name: name
	    // favs: favs 
	  });

}

//************* this saveFavZip funtion needs to be called when user clicks to add favorite. Need variable to capture zip.*********
$("#save-btn").on("click", function(event) {
	event.preventDefault();
	zip = $("#zip-display").text();
	singleFamilyData = $("#singleFamilyData").text();
	medianRentData = $("#medianRentData").text();
	medianListData = $("#medianListData").text();
	medianSaleData = $("#medianSaleData").text();
	bdrm1Data = $("#bdrm1Data").text();
	bdrm2Data = $("#bdrm2Data").text();
	foreclosureData = $("#foreclosureData").text();
	salesTaxData = $("#salesTaxData").text();

	console.log("zip: " + zip);
	console.log("SingleFamilyData: " + singleFamilyData);
	console.log("MedianRentData: " + medianRentData);
	console.log("MedianListData: " + medianListData);
	console.log("MedianSaleData: " + medianSaleData);
	console.log("BDRM1Data: " + bdrm1Data);
	console.log("BDRM2Data: " + bdrm2Data);
	console.log("ForeclosureData: " + foreclosureData);
	console.log("salesTaxData: " + salesTaxData);




	// favs.push(zips);
	// console.log(favs);


	
	// localStorage.setItem("favs", favs);

	// 	database.ref().update({
	//     favs: favs

	});