$(document).ready(function () {
  /**
   * Toggles "done" class on <li> element.
   * event-delegation: start at parent element to child to toggle
   */
  $("ul").on("click", "li", function () {
    $(this).toggleClass("done");
  });

  /**
   * Delete element when delete link clicked.
   * event-delegation: start at parent element to child to delete class and fadeOut
   */
  $("ul").on("click", ".delete", function (event) {
    event.stopPropagation();

    let rm = $(this).closest("li");
    $(this).fadeOut("slow", function () {
      rm.remove();
    });
  });

  /**
   * Adds new list item to <ul>
   * find parent,create li, add&append values and append to parent
   */
  const addListItem = function (e) {
    const text = $("input").val();
    let ul = $("ul");
    let newItem = $("<li>");

    newItem.append(
      $("<span>").text(text),
      $("<a>").addClass("delete").text("Delete")
    );

    ul.append(newItem);

    $("input").val("");
  };

  // add listener for add

  $(".add-item").on("click", addListItem);
});

/*
<li>
 <span>Homework</span>
 <a class="delete">Delete</a>
</li>
*/
