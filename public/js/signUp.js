/* eslint-disable indent */
$(document).ready(function () {

    $("select").formSelect();

    $(".profile-type").on("click", function () {
        if ($("#service-provider:checked").val() === "on") {
            $("#jobs-div").removeClass("hide");
        } else {
            $("#jobs-div").addClass("hide");
        }
    });

    $("#register-btn").on("click", function () {
        event.preventDefault();
        var firstName = $("#first-name").val().trim();
        var lastName = $("#last-name").val().trim();
        if ($("#pet-owner:checked").val() === "on") {
            var petOwner = 1;
        } else {
            var petOwner = 0;
        }
        if ($("#service-provider:checked").val() === "on") {
            var serviceProvider = 1;
        } else {
            var serviceProvider = 0;
        }
        if ($("#service-provider:checked").val() === "on") {

            if ($("#job-title").val() === null) {

                alert("Select a job title.");

            } else {

                var jobTitle = $("#job-title").val().trim();

            }

        } else {
            var jobTitle = "Owner";
        }
        var email = $("#email").val().trim();
        var password = $("#password").val().trim();
        var passwordCheck = $("#password-again").val().trim();

        if (firstName.length === 0 || lastName.length === 0 || email.length === 0 || password.length === 0) {

            alert("all fields must be filled out");

        } else if (password !== passwordCheck) {

            alert("Passwords do not match.");

        } else {

            console.log("firstName: " + firstName);
            console.log("lastName: " + lastName);
            console.log("petOwner: " + petOwner);
            console.log("serviceProvider: " + serviceProvider);
            console.log("jobTitle: " + jobTitle);
            console.log("email: " + email);
            console.log("password: " + password);

            var newUser = {
                // eslint-disable-next-line camelcase
                first_name: firstName,
                // eslint-disable-next-line camelcase
                last_name: lastName,
                // eslint-disable-next-line camelcase
                service_provider: serviceProvider,
                // eslint-disable-next-line camelcase
                pet_owner: petOwner,
                role: jobTitle,
                email: email,
                password: password
            };

            console.log(newUser);

            $.ajax("/api/users", {
                method: "POST",
                data: newUser
            }).then(
                function () {
                    console.log("created new user");
                    // function (event) { return true };
                    window.location.href = "/";
                }
            );

        }
    });
});