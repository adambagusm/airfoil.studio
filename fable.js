function openForm() {
  const emailDefault = document.getElementById("emailinput").value;

  document.querySelector("#emailmodal").value = emailDefault;
}

openForm();

$(".button-modal").on("click", function () {
  $(".body").addClass("no-scroll");
});

$(".form-moda-bg").on("click", function () {
  $(".body").removeClass("no-scroll");
});

$(".clear").on("click", function () {
  $(".body").addClass("no-scroll");
});

$(".alt").on("click", function () {
  $(".body").addClass("no-scroll");
});

// $(".button-waitlist").on("click", function () {
//   emailModal + 1;
// });

$(document).keydown(function (e) {
  if (e.key === "Escape") {
    $(".form-moda-bg").click();
  }
});
