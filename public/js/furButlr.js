$(document).ready(function () {
  // NavBar================================================
  $(".dropdown-trigger").dropdown();
  $(".dropdown-trigger-collapse").dropdown();
  $(".sidenav").sidenav();
  // Modal ================================================
  $(".modal").modal();

  // Login event listener and ajax post ===================
  $(document).on("click", "#login-submit", function (event) {
    event.preventDefault();
    var email = $("#login-email").val().trim();
    var password = $("#pass").val().trim();
    if (!email || !password) {
      alert("Please fill out all fields");
    } else {
      $.ajax({
        url: "/api/login",
        method: "POST",
        data: {
          email: email,
          password: password
        }
      });
    }
    // window.location.assign("./dashboard"); // may need to just location.reload
    location.reload();
  });

  $.get("/api/session").then(function (data) {
    console.log(data);
  });

});
