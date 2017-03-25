$(document).ready(function() {
    console.log(database)
    if (localStorage.getItem("squilloName") === null || localStorage.getItem("locationClicked") === false) {
        $('.modal').modal();
        $('#modal1').modal('open');
        console.log("NO NAME");
    } else {
      // $("#hi").html("Howdy, " + localStorage.getItem("squilloName") + "!");
      // =========================================================================== above ;)
      console.log(localStorage.getItem("squilloName"))
    }

    var locationClicked = false;
    $(".button-collapse").sideNav();

    $("#enterButton").on("click", function() {
        var username = $("#name").val();
        console.log(username);
        if (username !== "" && username !== null) {
            localStorage.setItem("squilloName", username);
            console.log(localStorage.getItem("squilloName"))
            // $("#hi").html("Howdy, " + localStorage.getItem("squilloName") + "!");
            // =============================================================================================================================
            // You should be able to call read/write any data you need to from the firebase.js script in this conditional as well as above
            localStorage.setItem("locationClicked", locationClicked);
            console.log("locationClicked", locationClicked);
        }

    })

});
