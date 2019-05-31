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

    if ("currentUser" in data) {
      var sessionid = data.currentUser.id;
      var sessionImage = data.currentUser.image;
      var sessionName = data.currentUser.firstName;
      console.log("session id: " + sessionid);
      console.log("session img: " + sessionImage);
      console.log("session name: " + sessionName);
      $("#profile-nav-image").css("backgroundImage", "url('" + sessionImage + "')");
      $("#session-name").text(sessionName);
      $("#user-profile-link").attr("href", "./userProfile?id=" + sessionid);
      $("#user-edit-link").attr("href", "./testChange?id=" + sessionid);
      $(".login-show").removeClass("hide");
      $(".logout-show").addClass("hide");
    } else {
      console.log("User not logged in");
    }
  });




});
