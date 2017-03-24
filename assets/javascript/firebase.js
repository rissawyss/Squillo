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
var singleFam = "";
var medianRent = "";
var medianList = "";
var medianSale = "";
var bdrm1 = "";
var bdrm2 = "";
var foreclosures = "";
var tax = "";
var zip = "";
var favs = [""];



function saveUser(username) {

    var userInfo = database.ref("'" + username + "'");
    // userInfo.push({
    //     singleFam: singleFam,
    //     medianRent: medianRent,
    //     medianList: medianList,
    //     medianSale: medianSale,
    //     bdrm1: bdrm1,
    //     bdrm2: bdrm2,
    //     foreclosures: foreclosures,
    //     tax: tax,
    //     zip: zip
    // });
    userInfo.push({
        favorites: favs
    })
    
}

function saveToFavs(username) {

    singleFam = $("#singleFam").html();
    medianRent = $("#medianRent").html();
    medianList = $("#medianList").html();
    medianSale = $("#medianSale").html();
    bdrm1 = $("#bdrm1").html();
    bdrm2 = $("#bdrm2").html();
    foreclosures = $("#foreclosures").html();
    tax = $("#tax").html();
    zip = $("#zip-display").html();
    var newFav = {
        singleFam: singleFam,
        medianRent: medianRent,
        medianList: medianList,
        medianSale: medianSale,
        bdrm1: bdrm1,
        bdrm2: bdrm2,
        foreclosures: foreclosures,
        tax: tax,
        zip: zip
    }
    
    favs.push(newFav);
    console.log(favs);
    
    database.ref("'"+ username+"'").push({newFav});

    

}
