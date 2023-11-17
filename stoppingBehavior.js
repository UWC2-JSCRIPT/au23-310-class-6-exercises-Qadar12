// Do not change

$(document).ready(function () {
  document.getElementById("cat").addEventListener("click", () => {
    alert("meow!");
  });

  // When clicked, "More info" link should alert "Here's some info"
  // instead of going to a new webpage

  $("#more-info").on("click", function (event) {
    event.preventDefault();
    alert("More info");
  });

  // When the bark button is clicked, should alert "Bow wow!"
  // Should *not* alert "meow"
  $(".dog").on("click", function (event) {
    event.stopPropagation();
    alert("bark");
  });
});
