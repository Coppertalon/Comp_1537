var receivedArray = []
function setup() {

    $("#getByNameBtn").click(function () {
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

    $("#nameFilter").change(function () {
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
        if ($(this).prop("checked")) {
            useArray = receivedArray.map((item) => {
                return item.name, item.weight;
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