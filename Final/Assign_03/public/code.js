var receivedArray = []

function populate_Data() { // remove a ingredient from the array
    unicornName = jQuery(this).attr('id')
    vampires = receivedArray[unicornName].vampires
    console.log(vampires)
    if (receivedArray[unicornName].gender === "m") {
        useGender = "Male"
    }
    if (receivedArray[unicornName].gender === "f") {
        useGender = "Female"
    }
    if ($(`#${receivedArray[unicornName].name}`).html() == "") {
        $(`#${receivedArray[unicornName].name}`).append(`
        <ul>
            <li>dob: ${receivedArray[unicornName].dob}</li>
            <li>loves: ${receivedArray[unicornName].loves}</li>
            <li>weight: ${receivedArray[unicornName].weight}</li>
            <li>gender: ${useGender}</li>
        </ul>
        `)

        if (receivedArray[unicornName].vampires > 1) {
            $(`#${receivedArray[unicornName].name}`).append(`
           <ul>
            <li>vampires: ${receivedArray[unicornName].vampires}</li>            
        </ul>
        `)
        }

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
                        <li>
                        ${receivedArray[i].name}
                        <br>
                        <button class="unicorn" id="${i}">
                            Show Details
                        </button>
                        <br><br>
                        <div id=${receivedArray[i].name}></div>
                        </li>`)
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
                        <li>
                        ${receivedArray[i].name}
                        <br>
                        <button class="unicorn" id="${i}">
                            Show Details
                        </button>
                        <br><br>
                        <div id=${receivedArray[i].name}></div>
                        </li>`)
                    }
                }
            });
        }
    })
    $("body").on("click", ".unicorn", populate_Data);
}

$(document).ready(setup)