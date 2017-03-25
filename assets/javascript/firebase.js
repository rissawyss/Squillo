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

function saveUser(username) {

    database.ref().push({
        name: username,
        favorites: favs
    })

}

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

    database.ref().once("value", function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            var childData = childSnapshot.val();
            for (var key in childData) {
                if (childData[key] === currUser) {
                    console.log(childSnapshot.key);
                    var theKey = childSnapshot.key;

                    var updateFavs = database.ref().child(theKey);
                    updateFavs.push({
                        "favorites": newFav
                    });

                    // updateFavs.on("child_added", function(obj) {
                    //     // console.log("OBJECT",obj.val());
                    //     var zipObj = obj.val();
                    //     console.log(zipObj.favorites);
                    //     var card = $("<div class='col s12 m4 l3'><div class='card blue-grey'><div class='card-content white-text'><span class='card-title'>" + zipObj.favorites.zip + "</span>")
                    //     $("#card-display").append(card);
                    // })
                }
            }
        });
    });



    console.log("++++++++++++++");
}



function renderCards() {

    $("#card-display").empty();
    var currUser = localStorage.getItem("squilloName");

    database.ref().once("value", function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            var childData = childSnapshot.val();
            for (var key in childData) {
                if (childData[key] === currUser) {
                    console.log(childSnapshot.key);
                    var theKey = childSnapshot.key;

                    var updateFavs = database.ref().child(theKey);

                    updateFavs.on("child_added", function(obj) {
                        // console.log("OBJECT",obj.val());
                        var zipObj = obj.val();
                        var favorite = zipObj.favorites;
                        console.log(zipObj.favorites);
                        var card = $("<div class='col s12 m4 l3'><div class='card blue-grey'><div class='card-content white-text'><span class='card-title'>" + favorite.zip + "</span><ul><li>Single Family Homes: " + favorite.singleFamilyData+ "</li><li>Median Rental Price: " + favorite.medianRentData+ "</li><li>Median List Price: " + favorite.medianListData+ "</li><li>Median Sale Price: " + favorite.medianSaleData+ "</li><li>One Bedroom Homes: " + favorite.bdrm1Data+ "</li><li>Two Bedroom Homes: " + favorite.bdrm2Data+ "</li><li>State Sales Tax: " + favorite.salesTaxData+ "</li></ul></div></div></div>");
                        $("#card-display").append(card);
                    })
                }
            }
        });
    });

}
