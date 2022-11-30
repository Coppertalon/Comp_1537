var receivedArray = []
function setup() {

    document.getElementById("nameFilter").checked = false;
    document.getElementById("weightFilter").checked = false;
    document.getElementById("bothFilter").checked = false;
    document.getElementById("allFilter").checked = false;
    document.getElementById("lovesApple").checked = false;
    document.getElementById("lovesCarrot").checked = false;
    $("#unicornNameInHTML").val("")
    $("#unicornLowWeightInHTML").val("")
    $("#unicornHighWeightInHTML").val("")

    $("#getByNameBtn").click(function () {

        document.getElementById("nameFilter").checked = false;
        document.getElementById("weightFilter").checked = false;
        document.getElementById("bothFilter").checked = false;
        document.getElementById("allFilter").checked = false;

        $.ajax({
            url: "http://localhost:5000/getUnicornsByNameRoute",
            type: "POST",
            data: {
                "unicornNameInHTTPBody":
                    $("#unicornNameInHTML").val()
            },
            success: function (data) {
                receivedArray = data

                $("#result").html(JSON.stringify(data));
            }
        });
    })

    $("#getByWeightBtn").click(function () {

        document.getElementById("nameFilter").checked = false;
        document.getElementById("weightFilter").checked = false;
        document.getElementById("bothFilter").checked = false;
        document.getElementById("allFilter").checked = false;

        $.ajax({
            url: "http://localhost:5000/getUnicornsByWeightRoute",
            type: "POST",
            data: {
                "unicornLowWeightInHTTPBody":
                    $("#unicornLowWeightInHTML").val(),

                "unicornHighWeightInHTTPBody":
                    $("#unicornHighWeightInHTML").val(),
            },
            success: function (data) {
                receivedArray = data
                $("#result").html(JSON.stringify(data));

            }
        });
    })

    $("#getByFavBtn").click(function () {

        document.getElementById("nameFilter").checked = false;
        document.getElementById("weightFilter").checked = false;
        document.getElementById("bothFilter").checked = false;
        document.getElementById("allFilter").checked = false;

        let favFoods = []

        if (document.getElementById("lovesCarrot").checked == true) {
            favFoods.push("carrot")
        }

        if (document.getElementById("lovesApple").checked == true) {
            favFoods.push("apple")
        }

        $.ajax({

            url: "http://localhost:5000/getUnicornsByLovesRoute",
            type: "POST",
            data: {
                "unicornLoveFood":
                    favFoods,
            },

            success: function (data) {
                receivedArray = data
                $("#result").html(JSON.stringify(data));
            }
        });
    })

    $("#nameFilter").change(function () {

        document.getElementById("weightFilter").checked = false;
        document.getElementById("bothFilter").checked = false;
        document.getElementById("allFilter").checked = false;

        if ($(this).prop("checked")) {
            useArray = receivedArray.map((item) => {
                return item.name;
            })
            $("#result").html(JSON.stringify(useArray));

        } else {
            useArray = receivedArray.map((item) => {
                return item;
            })
            $("#result").html(JSON.stringify(useArray));
        }
    })

    $("#weightFilter").change(function () {

        document.getElementById("nameFilter").checked = false;
        document.getElementById("bothFilter").checked = false;
        document.getElementById("allFilter").checked = false;

        if ($(this).prop("checked")) {
            useArray = receivedArray.map((item) => {
                return item.weight;
            })
            $("#result").html(JSON.stringify(useArray));

        } else {
            useArray = receivedArray.map((item) => {
                return item;
            })
            $("#result").html(JSON.stringify(useArray));
        }
    })


    $("#bothFilter").change(function () {

        document.getElementById("nameFilter").checked = false;
        document.getElementById("weightFilter").checked = false;
        document.getElementById("allFilter").checked = false;

        if ($(this).prop("checked")) {
            nameArray = receivedArray.map((item) => {
                return item.name;
            })
            weightArray = receivedArray.map((item) => {
                return item.weight;
            })
            $("#result").html(JSON.stringify(nameArray));
            $("#result").append("&nbsp;&nbsp;&nbsp;");
            $("#result").append(JSON.stringify(weightArray));

        } else {
            useArray = receivedArray.map((item) => {
                return item;
            })
            $("#result").html(JSON.stringify(useArray));
        }
    })

    $("#allFilter").change(function () {

        document.getElementById("nameFilter").checked = false;
        document.getElementById("weightFilter").checked = false;
        document.getElementById("bothFilter").checked = false;

        if ($(this).prop("checked")) {
            console.log("test")
            useArray = receivedArray.map((item) => {
                return item;
            })
            $("#result").html(JSON.stringify(useArray));

        } else {
            useArray = receivedArray.map((item) => {
                return item;
            })
            $("#result").html(JSON.stringify(useArray));
        }
    })
}

$(document).ready(setup)