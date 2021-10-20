$(document).ready(function() {
  $("#order-form").submit(function(event) {
    event.preventDefault();

    const firstName = $("#inputFName").val();
    const lastName = $("#inputLName").val();
    const email = $("#inputEmail4").val();
    const date = $("#inputDate").val();
    const address1 = $("#inputAddress").val();
    const address2 = $("#inputAddress2").val();
    const city = $("#inputCity").val();
    const state = $("#inputState").val();
    const zip = $("#inputZip").val();
    const prizeChosen = $("input:radio[name=prize]:checked").val();
    let inputColor;

    $("#receipt-content").prepend(
      "<p>" + prizeChosen + "</p><p>Shipping to:</p><p>" + firstName + " " + lastName + " " + email + "</p><p>" + address1 + "</p><p>" + address2 + "</p><p>" + city + ", " + state + " " + zip + "</p><p>Order Date: " + date + "</p>"
      );
      
    // if (prizeChosen === "Gift Boxes") {
    //   inputColor = document.getElementById("color").value;
    // } else if (prizeChosen === "Nintendo Switch") {
    //   inputColor = document.getElementById("nintendo").value;
    // } else {
    //   inputColor = document.getElementById("bedsheets").value;
    // }
    // $("#color-selection").setAttribute("background-color", inputColor);
    $("#receipt").show();
  });
});

//let inputColor = document.getElementById("faveColor").value;