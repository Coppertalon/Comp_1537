var receivedArray = []
function setup() {


    $("select").change(function () {
        let gender = $("select option:selected").val()
        if (gender === "Male") {
            $.ajax({
                url: "http://localhost:5000/getUnicornsByGender",
                type: "POST",
                data: {
                    "unicornGender":
                        "m"
                },
                success: function (data) {
                    receivedArray = data

                    $("#result").html(JSON.stringify(data));
                }
            });
        }

        if (gender === "Female") {
            $.ajax({
                url: "http://localhost:5000/getUnicornsByGender",
                type: "POST",
                data: {
                    "unicornGender":
                        "f"
                },
                success: function (data) {
                    receivedArray = data

                    $("#result").html(JSON.stringify(data));
                }
            });
        }
    })

}

$(document).ready(setup)