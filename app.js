$(document).ready(function () {
  $("#submit").click(function () {
    var address = $("#address").val();
    var name = $("#name").val();

    if (address.length == "") {
      $("#p1").text("Please enter address");
      $("#address").focus();
      return false;
    }
    else if (name.length == "") {
      $("#p2").text("enter your name");
      $("#name").focus();
    }
  })
})