function getZipInfo(zip) {

    $("#results").empty();

    var titleDiv = $("<div>").attr("id", "title-div");


    var saveToFavsBtn = $("<a>").attr("id", "save-btn").addClass("btn-floating btn-large waves-effect waves-light red");
    var btnContent = $("<img>").addClass("heart").attr("src", "assets/images/heart-white-outline-no-fill.png");
    var zipTitle = $("<h3>").addClass("white-text center").attr("id", "zip-display").html("Results for " + zip);


    $("#results").append(titleDiv);
    titleDiv.append(zipTitle);
    titleDiv.append(saveToFavsBtn);
    saveToFavsBtn.append(btnContent);


    var sfURL = "https://www.quandl.com/api/v3/datasets/ZILL/Z" + zip + "_SF.json?rows=1&api_key=wNNgsSVpMcxry936Vu8V";

    $.ajax({
        url: sfURL,
        method: "GET"
    }).done(function(response) {
        console.log(response);

        var sfWrapper = $("<div>").addClass("wrapper col s12 m6 l3 white-text center").attr("id", "sf-wrapper");
        var sfImg = $("<img>").attr("src", "assets/images/singlefam.png").attr("id", "sf-img");
        var sfDiv = $("<div>").attr("id", "sf-div");
        var sfTitle = $("<p>").html("Single Family Residences").attr("id", "sf-title");
        var sfData = $("<p>").html("$" + response.dataset.data[0][1]).attr("id", "sf-data");

        $("#results").append(sfWrapper);
        sfWrapper.append(sfImg);
        sfWrapper.append(sfDiv);
        sfDiv.append(sfTitle);
        sfDiv.append(sfData);

        console.log($("#sfData").text());

        var mrURL = "https://www.quandl.com/api/v3/datasets/ZILL/Z" + zip + "_RMP.json?rows=1&api_key=wNNgsSVpMcxry936Vu8V";

        $.ajax({
            url: mrURL,
            method: "GET"
        }).done(function(response) {
            console.log(response);

            var mrWrapper = $("<div>").addClass("wrapper col s12 m6 l3 white-text center").attr("id", "mr-wrapper");
            var mrImg = $("<img>").attr("src", "assets/images/rent.png").attr("id", "mr-img");
            var mrDiv = $("<div>").attr("id", "mr-div");
            var mrTitle = $("<p>").html("Rentals Median Price").attr("id", "mr-title");
            var mrData = $("<p>").html("$" + response.dataset.data[0][1]).attr("id", "mr-data");

            $("#results").append(mrWrapper);
            mrWrapper.append(mrImg);
            mrWrapper.append(mrDiv);
            mrDiv.append(mrTitle);
            mrDiv.append(mrData);

            var mlURL = "https://www.quandl.com/api/v3/datasets/ZILL/Z" + zip + "_MLP?rows=1&api_key=wNNgsSVpMcxry936Vu8V";

            $.ajax({
                url: mlURL,
                method: "GET"
            }).done(function(response) {
                console.log(response);

                var mlWrapper = $("<div>").addClass("wrapper col s12 m6 l3 white-text center").attr("id", "ml-wrapper");
                var mlImg = $("<img>").attr("src", "assets/images/sale.png").attr("id", "ml-img");
                var mlDiv = $("<div>").attr("id", "ml-div");
                var mlTitle = $("<p>").html("Median List Price").attr("id", "ml-title");
                var mlData = $("<p>").html("$" + response.dataset.data[0][1]).attr("id", "ml-data");

                $("#results").append(mlWrapper);
                mlWrapper.append(mlImg);
                mlWrapper.append(mlDiv);
                mlDiv.append(mlTitle);
                mlDiv.append(mlData);

                var msURL = "https://www.quandl.com/api/v3/datasets/ZILL/Z" + zip + "_MSP.json?rows=1&api_key=wNNgsSVpMcxry936Vu8V";

                $.ajax({
                    url: msURL,
                    method: "GET"
                }).done(function(response) {
                    console.log(response);

                    var msWrapper = $("<div>").addClass("wrapper col s12 m6 l3 white-text center").attr("id", "ms-wrapper");
                    var msImg = $("<img>").attr("src", "assets/images/sold.png").attr("id", "ms-img");
                    var msDiv = $("<div>").attr("id", "ms-div");
                    var msTitle = $("<p>").html("Median Sale Price").attr("id", "ms-title");
                    var msData = $("<p>").html("$" + response.dataset.data[0][1]).attr("id", "ms-data");

                    $("#results").append(msWrapper);
                    msWrapper.append(msImg);
                    msWrapper.append(msDiv);
                    msDiv.append(msTitle);
                    msDiv.append(msData);

                    var bdrm1URL = "https://www.quandl.com/api/v3/datasets/ZILL/Z" + zip + "_1B.json?rows=1&api_key=wNNgsSVpMcxry936Vu8V";

                    $.ajax({
                        url: bdrm1URL,
                        method: "GET"
                    }).done(function(response) {
                        console.log(response);

                        var bdrm1Wrapper = $("<div>").addClass("wrapper col s12 m6 l3 white-text center").attr("id", "bdrm1-wrapper");
                        var bdrm1Img = $("<img>").attr("src", "assets/images/1br.png").attr("id", "bdrm1-img");
                        var bdrm1Div = $("<div>").attr("id", "bdrm1-div");
                        var bdrm1Title = $("<p>").html("One Bedroom Homes").attr("id", "bdrm1-title");
                        var bdrm1Data = $("<p>").html("$" + response.dataset.data[0][1]).attr("id", "bdrm1-data");

                        $("#results").append(bdrm1Wrapper);
                        bdrm1Wrapper.append(bdrm1Img);
                        bdrm1Wrapper.append(bdrm1Div);
                        bdrm1Div.append(bdrm1Title);
                        bdrm1Div.append(bdrm1Data);

                        var bdrm2URL = "https://www.quandl.com/api/v3/datasets/ZILL/Z" + zip + "_2B.json?rows=1&api_key=wNNgsSVpMcxry936Vu8V";

                        $.ajax({
                            url: bdrm2URL,
                            method: "GET"
                        }).done(function(response) {
                            console.log(response);

                            var bdrm2Wrapper = $("<div>").addClass("wrapper col s12 m6 l3 white-text center").attr("id", "bdrm2-wrapper");
                            var bdrm2Img = $("<img>").attr("src", "assets/images/2br.png").attr("id", "bdrm2-img");
                            var bdrm2Div = $("<div>").attr("id", "bdrm2-div");
                            var bdrm2Title = $("<p>").html("Two Bedroom Homes").attr("id", "bdrm2-title");
                            var bdrm2Data = $("<p>").html("$" + response.dataset.data[0][1]).attr("id", "bdrm2-data");

                            $("#results").append(bdrm2Wrapper);
                            bdrm2Wrapper.append(bdrm2Img);
                            bdrm2Wrapper.append(bdrm2Div);
                            bdrm2Div.append(bdrm2Title);
                            bdrm2Div.append(bdrm2Data);

                            var fcURL = "https://www.quandl.com/api/v3/datasets/ZILL/Z" + zip + "_FR.json?rows=1&api_key=wNNgsSVpMcxry936Vu8V";

                            $.ajax({
                                url: fcURL,
                                method: "GET"
                            }).done(function(response) {
                                console.log(response);

                                var fcWrapper = $("<div>").addClass("wrapper col s12 m6 l3 white-text center").attr("id", "fc-wrapper");
                                var fcImg = $("<img>").attr("src", "assets/images/foreclose.png").attr("id", "fc-img");
                                var fcDiv = $("<div>").attr("id", "fc-div");
                                var fcTitle = $("<p>").html("Foreclosure Resales (%)").attr("id", "fc-title");
                                var fcData = $("<p>").html(response.dataset.data[0][1] + "%").attr("id", "fc-data");

                                $("#results").append(fcWrapper);
                                fcWrapper.append(fcImg);
                                fcWrapper.append(fcDiv);
                                fcDiv.append(fcTitle);
                                fcDiv.append(fcData);

                                var taxURL = "https://taxrates.api.avalara.com:443/postal?country=usa&postal=" + zip + "&apikey=OOkTEd0jbFpfXlBklm0byMJ6hZ1%2BRGMxHIHCwpCz8p1fdRC5ULNz5uF6Ks4HTqsmZmZA337Kv7mK4hdKI5Poag%3D%3D";

                                $.ajax({
                                    url: taxURL,
                                    method: "GET"
                                }).done(function(response) {

                                    console.log(response);

                                    var taxWrapper = $("<div>").addClass("wrapper col s12 m6 l3 white-text center").attr("id", "tax-wrapper");
                                    var taxImg = $("<img>").attr("src", "assets/images/tax.png").attr("id", "tax-img");
                                    var taxDiv = $("<div>").attr("id", "tax-div");
                                    var taxTitle = $("<p>").html("State Sales Tax").attr("id", "tax-title");
                                    var taxData = $("<p>").html(response.totalRate + "%").attr("id", "tax-data");

                                    $("#results").append(taxWrapper);
                                    taxWrapper.append(taxImg);
                                    taxWrapper.append(taxDiv);
                                    taxDiv.append(taxTitle);
                                    taxDiv.append(taxData);

                                });
                            });
                        });
                    });
                });
            });
        });
    });
};

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
                    getZipInfo(currZip);
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

    var zip = $("#zipcode-input").val();
    console.log(zip);
    getZipInfo(zip);

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
            saveUser(username);
        }

    });

    // Add smooth scrolling to all links in navbar + footer link
    $(".navbar a, a[href='#home']").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();
            // Store hash
            var hash = this.hash;
            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function() {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if

    });

    $(window).scroll(function() {
        $(".slideanim").each(function() {
            var pos = $(this).offset().top;
            var winTop = $(window).scrollTop();
            if (pos < winTop + 600) {
                $(this).addClass("slide");
            }
        });
    });

});

$(document).on("click", "#save-btn", saveToFavs);

$("#go-home").on("click", function() {

    $(".introSection").css("display", "block");
    $(".querySection").css("display", "block");
    $(".infoSection").css("display", "block");
    $("#results").empty();
    $(".cardSection").css("display", "none");

});

$("#go-favs").on("click", function() {

    $(".introSection").css("display", "none");
    $(".querySection").css("display", "none");
    $(".infoSection").css("display", "none");
    $(".cardSection").css("display", "block");

});
