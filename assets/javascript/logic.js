function blah(zip) {

    $("#results").empty();
    var singleFamily = "https://www.quandl.com/api/v3/datasets/ZILL/Z"+zip+"_SF.json?rows=1&api_key=wNNgsSVpMcxry936Vu8V";

    $.ajax({
        url: singleFamily,
        method: "GET"
    }).done(function(response) {
        console.log(response);

        var p = $("<p>").addClass("info-row");
        var name = $("<span>").html(response.dataset.name).addClass("left");
        var data = $("<span>").html("$" + response.dataset.data[0][1]).addClass("right");

        $("#results").append(p);
        p.append(name);
        p.append(data);

        var medianRent = "https://www.quandl.com/api/v3/datasets/ZILL/Z"+zip+"_RMP.json?rows=1&api_key=wNNgsSVpMcxry936Vu8V";

        $.ajax({
            url: medianRent,
            method: "GET"
        }).done(function(response) {
            console.log(response);

            var p = $("<p>").addClass("info-row");;
            var name = $("<span>").html(response.dataset.name).addClass("left");
            var data = $("<span>").html("$" + response.dataset.data[0][1]).addClass("right");

            $("#results").append(p);
            p.append(name);
            p.append(data);

            var medianList = "https://www.quandl.com/api/v3/datasets/ZILL/Z"+zip+"_MLP?rows=1&api_key=wNNgsSVpMcxry936Vu8V";

            $.ajax({
                url: medianList,
                method: "GET"
            }).done(function(response) {
                console.log(response);

                var p = $("<p>").addClass("info-row");;
                var name = $("<span>").html(response.dataset.name).addClass("left");
                var data = $("<span>").html("$" + response.dataset.data[0][1]).addClass("right");

                $("#results").append(p);
                p.append(name);
                p.append(data);

                var medianSale = "https://www.quandl.com/api/v3/datasets/ZILL/Z"+zip+"_MSP.json?rows=1&api_key=wNNgsSVpMcxry936Vu8V";

                $.ajax({
                    url: medianSale,
                    method: "GET"
                }).done(function(response) {
                    console.log(response);

                    var p = $("<p>").addClass("info-row");;
                    var name = $("<span>").html(response.dataset.name).addClass("left");
                    var data = $("<span>").html("$" + response.dataset.data[0][1]).addClass("right");

                    $("#results").append(p);
                    p.append(name);
                    p.append(data);

                    var bdrm1 = "https://www.quandl.com/api/v3/datasets/ZILL/Z"+zip+"_1B.json?rows=1&api_key=wNNgsSVpMcxry936Vu8V";

                    $.ajax({
                        url: bdrm1,
                        method: "GET"
                    }).done(function(response) {
                        console.log(response);

                        var p = $("<p>").addClass("info-row");;
                        var name = $("<span>").html(response.dataset.name).addClass("left");
                        var data = $("<span>").html("$" + response.dataset.data[0][1]).addClass("right");

                        $("#results").append(p);
                        p.append(name);
                        p.append(data);

                        var bdrm2 = "https://www.quandl.com/api/v3/datasets/ZILL/Z"+zip+"_2B.json?rows=1&api_key=wNNgsSVpMcxry936Vu8V";

                        $.ajax({
                            url: bdrm2,
                            method: "GET"
                        }).done(function(response) {
                            console.log(response);

                            var p = $("<p>").addClass("info-row");;
                            var name = $("<span>").html(response.dataset.name).addClass("left");
                            var data = $("<span>").html("$" + response.dataset.data[0][1]).addClass("right");

                            $("#results").append(p);
                            p.append(name);
                            p.append(data);

                            var foreclosure = "https://www.quandl.com/api/v3/datasets/ZILL/Z"+zip+"_FR.json?rows=1&api_key=wNNgsSVpMcxry936Vu8V";

                            $.ajax({
                                url: foreclosure,
                                method: "GET"
                            }).done(function(response) {
                                console.log(response);

                                var p = $("<p>").addClass("info-row");;
                                var name = $("<span>").html(response.dataset.name).addClass("left");
                                var data = $("<span>").html(response.dataset.data[0][1] + "%").addClass("right");

                                $("#results").append(p);
                                p.append(name);
                                p.append(data);

                            });
                        });
                    });
                });
            });
        });
    });
};

var zip = "90020";
console.log(zip);

var queryURL = "https://taxrates.api.avalara.com:443/postal?country=usa&postal=" + zip + "&apikey=OOkTEd0jbFpfXlBklm0byMJ6hZ1%2BRGMxHIHCwpCz8p1fdRC5ULNz5uF6Ks4HTqsmZmZA337Kv7mK4hdKI5Poag%3D%3D";

console.log(queryURL);

$.ajax({
    url: queryURL,
    method: "GET"
}).done(function(response) {
    var tax = response.totalRate;
    console.log(tax);
    var taxArea = response.rates[0];
    var taxState = response.rates[1];
    console.log(taxArea.name);
    console.log(taxState.name);


    var p = $("<p>").text("Sales Tax for " + taxArea.name + " , " + taxState.name + " : " + tax + "%");

    $("#salesTaxData").append(p);

});



function initMap() {

    var map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 39.926555,
            lng: -101.080318
        },
        zoom: 4
    });

    var geocoder = new google.maps.Geocoder();

    $("#currentLocationBtn").on("click", function(event) {
        event.preventDefault();
        console.log("heLLO");

        var infoWindow = new google.maps.InfoWindow({
            map: map,
        });

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {

                var pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };

                infoWindow.setPosition(pos);

                console.log(pos);
                map.setZoom(12);
                map.setCenter(pos);

                var reverseGeoURL = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + pos.lat + "," + pos.lng + "&key=AIzaSyARhPeu596nXJrWQNKL-YoIXwkV0MbhCW0";

                $.ajax({
                    url: reverseGeoURL,
                    method: "GET"
                }).done(function(response) {
                    console.log(response);
                    console.log(response.results[0].address_components[7].short_name);
                    var currZip = response.results[0].address_components[7].short_name;
                    blah(currZip);
                    infoWindow.setContent("Current Zip: " + currZip);
                })

            }, function() {

                handleLocationError(true, infoWindow, map.getCenter());

            });

        } else {
            // Browser doesn't support Geolocation
            handleLocationError(false, infoWindow, map.getCenter());

        }
        locationClicked = true;
        localStorage.setItem("locationClicked", locationClicked);

    });

    $("#searchBtn").on("click", function() {
        event.preventDefault();


        geocodeAddress(geocoder, map);
        $("#zipcode").val("");

    })

}

function geocodeAddress(geocoder, resultsMap) {

    var zip = $("#zipcode").val();
    blah(zip);

    geocoder.geocode({
        'address': zip
    }, function(results, status) {

        if (status === google.maps.GeocoderStatus.OK) {

            var infoWindow = new google.maps.InfoWindow({
                map: resultsMap,
                position: results[0].geometry.location
            });

            infoWindow.setContent(zip);
            resultsMap.setCenter(results[0].geometry.location);
            resultsMap.setZoom(12);

        } else {

            alert('Geocode was not successful for the following reason: ' + status);

        }

    });

}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {

    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
}

$(document).ready(function() {

    if (localStorage.getItem("squilloName") === null || localStorage.getItem("locationClicked") === false) {
        $('.modal').modal();
        $('#modal1').modal('open');
        console.log("NO NAME");
    } else {
        $("#hi").html("Howdy, " + localStorage.getItem("squilloName") + "!");
    }

    var locationClicked = false;
    $(".button-collapse").sideNav();

    $("#enterButton").on("click", function() {
        var username = $("#name").val();
        console.log(username);
        if (username !== "" && username !== null) {
            localStorage.setItem("squilloName", username);
            $("#hi").html("Howdy, " + localStorage.getItem("squilloName") + "!");

            // localStorage.setItem("locationClicked", locationClicked);
        }

    })

});
