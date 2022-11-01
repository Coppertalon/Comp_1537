function add_function() {
  let x = jQuery("#in1").val();
  let y = jQuery("#in2").val();
  let z = Number(x) + Number(y);
  result = "The result is " + x + " + " + y + " = " + z
  result2 =
    `
  <span style="background-color:teal">
    ${result}
    <button class="delete"> hide </button>
  </span>
  `
  jQuery("#output").css("background-color", "teal")
  jQuery("#output").css("width", "fit-content")
  jQuery("#history").append(result2 + "<br>")
  jQuery("#output").html(result)
}

function sub_function() {
  let x = jQuery("#in1").val();
  let y = jQuery("#in2").val();
  let z = Number(x) - Number(y);
  result = "The result is " + x + " - " + y + " = " + z
  result2 =
    `
  <span style="background-color:lime">
    ${result}
    <button class="delete"> hide </button>
  </span>
  `
  jQuery("#output").css("background-color", "lime")
  jQuery("#output").css("width", "fit-content")
  jQuery("#history").append(result2 + "<br>")
  jQuery("#output").html(result)
}

function mult_function() {
  let x = jQuery("#in1").val();
  let y = jQuery("#in2").val();
  let z = Number(x) * Number(y);
  result = "The result is " + x + " * " + y + " = " + z
  result2 =
    `
  <span style="background-color:red">
    ${result}
    <button class="delete"> hide </button>
  </span>
  `
  jQuery("#output").css("background-color", "red")
  jQuery("#output").css("width", "fit-content")
  jQuery("#history").append(result2 + "<br>")
  jQuery("#output").html(result)
}

function div_function() {
  let x = jQuery("#in1").val();
  let y = jQuery("#in2").val();
  let z = Number(x) / Number(y);
  result = "The result is " + x + " / " + y + " = " + z
  result2 =
    `
  <span style="background-color:yellow">
    ${result}
    <button class="delete"> hide </button>
  </span>
  `
  jQuery("#output").css("background-color", "yellow")
  jQuery("#output").css("width", "fit-content")
  jQuery("#history").append(result2 + "<br>")
  jQuery("#output").html(result)
}
function delete_function() {
  jQuery(this).parent().remove()
}


setup = function () {
  console.log("setup");
  jQuery("#add").click(add_function);
  jQuery("#sub").click(sub_function);
  jQuery("#mult").click(mult_function);
  jQuery("#div").click(div_function);
  $("body").on("click", ".delete", delete_function);
}


$(document).ready(setup)