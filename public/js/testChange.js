/* eslint-disable indent */
$(document).ready(function () {

    $("select").formSelect();

    // change user info

    $(".user-save-btn").on("click", function () {
        userId = $(this).attr("data-user-id");
        console.log(userId);

        var firstName = $("#user-first-name").val().trim();
        var lastName = $("#user-last-name").val().trim();
        var imageUrl = $("#user-image-url").val().trim();
        var jobTitle = $("#user-role").val().trim();
        var location = $("#user-location").val().trim();
        if (jobTitle === "Owner") {
            var petOwner = 1;
            var serviceProvider = 0;
        } else {
            var petOwner = 0;
            var serviceProvider = 1;
        }

        var newInfo = {
            // eslint-disable-next-line camelcase
            first_name: firstName,
            // eslint-disable-next-line camelcase
            last_name: lastName,
            image: imageUrl,
            // eslint-disable-next-line camelcase
            service_provider: serviceProvider,
            // eslint-disable-next-line camelcase
            pet_owner: petOwner,
            role: jobTitle,
        };

        console.log(newInfo);


        $.ajax("/api/users/update/stats/" + userId, {
            type: "PUT",
            data: newInfo
        }).then(
            function () {
                console.log("Profile Updated.");
                // function (event) { return true };
                location.reload();
            }
        );

    });

    $(".user-cancel-btn").on("click", function () {
        userId = $(this).attr("data-user-id");
        console.log(userId);

        $("#user-first-name").val("");
        $("#user-last-name").val("");
        $("#user-image-url").val("");
        $("#user-role").val("");
        $("#user-location").val("");

    });

    $(".about-save-btn").on("click", function () {
        userId = $(this).attr("data-about-id");
        console.log(userId);

        var aboutMe = $("#user-about-me").val().trim();


        console.log(aboutMe);


    });

    $(".about-cancel-btn").on("click", function () {
        userId = $(this).attr("data-about-id");
        console.log(userId);

        $("#user-about-me").val("");


    });



});