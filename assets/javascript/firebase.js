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

  var name = "";
  var zip = "";
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


function saveUser() {
	event.preventDefault();

	name = $("#name").val();


	database.ref().push({
    "name": name,
    "saved": saved
  });

}


$("#save-btn").on("click", function(event) {
	event.preventDefault();

	name = (localStorage.getItem("squilloName"));
	zip = $("#zip-display").text();
	singleFamilyData = $("#singleFamilyData").text();
	medianRentData = $("#medianRentData").text();
	medianListData = $("#medianListData").text();
	medianSaleData = $("#medianSaleData").text();
	bdrm1Data = $("#bdrm1Data").text();
	bdrm2Data = $("#bdrm2Data").text();
	foreclosureData = $("#foreclosureData").text();
	salesTaxData = $("#salesTaxData").text();

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

	saved.push(newFav);
	
	var userKey = "";

	database.ref().once("value", function(snapshot){
		snapshot.forEach(function(childSnapshot){
			var childData = childSnapshot.val();
			for (var prop in childData){
				if (childData[prop] === name) {
					console.log("found it");
					
					userKey = childSnapshot.key;

					database.ref(userKey).update({
				    saved: saved
					});
				}
			}
		});
	});
});




	


