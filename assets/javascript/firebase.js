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
var favs = [];

function saveUser(username) {

    database.ref().push({
        name: username,
        favorites: favs
    })

}

// $(document).on("click", "#save-btn", function(){

// });

function saveToFavs(event) {
    event.preventDefault();
    console.log("++++++++++++++");

    var currUser = localStorage.getItem("squilloName");

    zip = $("#zip-display").text();
    singleFamilyData = $("#sf-data").text();
    medianRentData = $("#mr-data").text();
    medianListData = $("#ml-data").text();
    medianSaleData = $("#ms-data").text();
    bdrm1Data = $("#bdrm1-data").text();
    bdrm2Data = $("#bdrm2-data").text();
    foreclosureData = $("#fc-data").text();
    salesTaxData = $("#tax-data").text();

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

    favs.push(newFav);

    database.ref().once("value", function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            var childData = childSnapshot.val();
            for (var key in childData) {
                if (childData[key] === currUser) {
                    console.log(childSnapshot.key);
                    theKey = childSnapshot.key;

                    var updateFavs = database.ref().child(theKey);
                    updateFavs.update({
                        "favorites": favs
                    });

                }
            }
        });
    });

    console.log(theKey);



    console.log(theKey);
    console.log("zip: " + zip);
    console.log("SingleFamilyData: " + singleFamilyData);
    console.log("MedianRentData: " + medianRentData);
    console.log("MedianListData: " + medianListData);
    console.log("MedianSaleData: " + medianSaleData);
    console.log("BDRM1Data: " + bdrm1Data);
    console.log("BDRM2Data: " + bdrm2Data);
    console.log("ForeclosureData: " + foreclosureData);
    console.log("salesTaxData: " + salesTaxData);





    console.log("++++++++++++++");
    // username.child(fav).update({favs});

}

//************* this saveFavZip funtion needs to be called when user clicks to add favorite. Need variable to capture zip.*********
