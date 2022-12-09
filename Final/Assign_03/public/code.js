var receivedArray = []

function populate_Data() { // remove a ingredient from the array
    unicornName = jQuery(this).attr('id')
    if ($(`#${receivedArray[unicornName].name}`).html() == "") {
        $(`#${receivedArray[unicornName].name}`).append("test")
    }
    else if ($(`#${receivedArray[unicornName].name}`).html() != "") {
        $(`#${receivedArray[unicornName].name}`).html("")
    }

}

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
                    $("#result").html("")

                    receivedArray = data
                    for (let i = 0; i < receivedArray.length; i++) {
                        $("#result").append(`
                        ${receivedArray[i].name}
                        <br>
                        <button class="unicorn" id="${i}">
                            Show Details
                        </button>
                        <br><br>
                        <div id=${receivedArray[i].name}></div>
                                            `)
                    }
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
                    $("#result").html("")
                    receivedArray = data
                    for (let i = 0; i < receivedArray.length; i++) {
                        $("#result").append(`
                        ${receivedArray[i].name}
                        <br>
                        <button class="unicorn" id="${i}">
                            Show Details
                        </button>
                        <br><br>
                        <div id=${receivedArray[i].name}></div>
                                            `)
                    }
                }
            });
        }
    })
    $("body").on("click", ".unicorn", populate_Data);
}

$(document).ready(setup)