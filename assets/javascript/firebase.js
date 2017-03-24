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
  var saved = [];
  var userinfo;
  var favorites;

  var user = firebase.auth().currentUser;
  console.log(user);




//************* this saveUser function needs to be called on the logic.js file when user entered*********
  function saveUser() {
	event.preventDefault();

	name = $("#name").val();

//=====================================================
	userinfo = database.ref("'" + name + "'");


	// userinfo.push({
	// 	favorites: favs
	// })
//=====================================================
		database.ref().push({
	    name: name,
	    saved: saved
	    //saved: userinfo.push({saved: saved}) 
	  });

// 		userinfo.child(name).set({
//   		saved: saved
// });

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

	var newFav = {
  		zip: zip,
		singleFamilyData: singleFamilyData,
		medianRentData: medianRentData,
		medianListData: medianListData,
		medianSaleData: medianSaleData,
		bdrm1Data: bdrm1Data,
		bdrm2Data: bdrm2Data,
		foreclosureData: foreclosureData,
		salesTaxData: salesTaxData
};

	// database.ref().push({
	// 	zip: zip,
	// 	singleFamilyData: singleFamilyData,
	// 	medianRentData: medianRentData,
	// 	medianListData: medianListData,
	// 	medianSaleData: medianSaleData,
	// 	bdrm1Data: bdrm1Data,
	// 	bdrm2Data: bdrm2Data,
	// 	foreclosureData: foreclosureData,
	// 	salesTaxData: salesTaxData
	// })




	saved.push(newFav);
	// console.log(saved);

	userinfo.child(name).push({newFav});

	
	// localStorage.setItem("saved", saved);

		database.ref().update({
	    saved: saved

	});

	});


	database.ref().on("value", function(snapshot) {

      // storing the snapshot.val() in a variable for convenience
      console.log("name: " + snapshot.val().name);
      console.log("everything else: " + snapshot.val().saved);
      var card = snapshot.val().saved;
      var card1 = snapshot.val().saved[0];
      var card2 = snapshot.val().saved[1];
      console.log(card1);
      console.log(card2);
  });