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


function makeTempAccount (userName) {
  // in the firebase config i changed the auth to have some funciotnality, in
  // order to persist the "session" on the db side of things, this will help you
  // have something to hook to to pull your data in.
  firebase.auth().signInAnonymously().catch(function (err) {
    console.log(err.code, err.message)
  })
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log(user)
      console.log(user.isAnonymous)
      console.log(user.uid)
      // after setting the anon user up in the auth you use the uid that is
      // created to hook your username to, then you have an objec to write to &
      // read from in firebase.
      database.ref('user/' + userName).set({
        uid: user.uid,
        username: userName
      })
    } else {
      console.log('user signed out')
    }
  })
}
function readTempUser (userName) {
  // in this function, you would be able to preform a look up based on username
  // since that is all you want to collect
  database.ref('/user/' + userName).once('value').then(function(snapshot) {
    var _user = snapshot.val();
    // inside this funciton you would not preform any writing to the user object,
    // this is only meant to illustrate the snapshot that firebase provides on a
    // single read of an obejct below are some links to the firebase doc pages that
    // can help explain how to do the writing/saving of additional data on your
    // user objects
    return console.log(_user)
  });
}

// you can find the pages that you will need in the docs at these links
// https://firebase.google.com/docs/database/admin/save-data
// https://firebase.google.com/docs/database/web/read-and-write
// ========================================================================
// function writeTempUserFav () {}
// function readTempUserFavs () {}


//************* this saveFavZip funtion needs to be called when user clicks to add favorite. Need variable to capture zip.*********
$("#save-btn").on("click", function(event) {
  console.log('clicked save')
	// event.preventDefault();
	// zip = $("#zip-display").text();
	// singleFamilyData = $("#singleFamilyData").text();
	// medianRentData = $("#medianRentData").text();
	// medianListData = $("#medianListData").text();
	// medianSaleData = $("#medianSaleData").text();
	// bdrm1Data = $("#bdrm1Data").text();
	// bdrm2Data = $("#bdrm2Data").text();
	// foreclosureData = $("#foreclosureData").text();
	// salesTaxData = $("#salesTaxData").text();
	// console.log("zip: " + zip);
	// console.log("SingleFamilyData: " + singleFamilyData);
	// console.log("MedianRentData: " + medianRentData);
	// console.log("MedianListData: " + medianListData);
	// console.log("MedianSaleData: " + medianSaleData);
	// console.log("BDRM1Data: " + bdrm1Data);
	// console.log("BDRM2Data: " + bdrm2Data);
	// console.log("ForeclosureData: " + foreclosureData);
	// console.log("salesTaxData: " + salesTaxData);
	// favs.push(zips);
	// console.log(favs);
	// localStorage.setItem("favs", favs);
	// 	database.ref().update({
	//     favs: favs
});
