// Wrap your JS code in the jQuery document.ready method
$(document).ready(function () {
  // Access (read) the data-color attribute of the <img>,
  // log to the console

  let img = $("img").data("color");
  console.log(img);

  // Update the third <li> item ("Turbocharged"),
  // set the class name to "highlight" index is eq

  $("li:eq(2)").addClass("highlight");

  // Create a new <a> element containing the text "Buy Now!"
  // with an id of "cta" after the last <p>

  let newA = $('<a href="#">');
  newA.text("Buy Now");
  newA.attr("id", "cta");
  $("main").append(newA);

  // Remove (delete) the last paragraph
  // (starts with "Available for purchase now…")

  // deleting the content but not the element <p>
  $("p").empty();

  // Create a listener on the "Buy Now!" link that responds to a click event.
  // When clicked, the the "Buy Now!" link should be removed
  // and replaced with text that says "Added to cart"

  newA.on("click", function () {
    $(this).html("Added to Cart");
  });
});
