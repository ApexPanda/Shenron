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
        var jobTitle = $("#user-role").val();
        var userLocation = $("#user-location").val().trim();
        if (jobTitle === "Owner") {
            var petOwner = 1;
            var serviceProvider = 0;
        } else if (jobTitle !== null) {
            var petOwner = 0;
            var serviceProvider = 1;
        }

        var alterInfo = {
            id: userId,
        };

        if (firstName.length !== 0) {
            // eslint-disable-next-line camelcase
            alterInfo.first_name = firstName;
        }
        if (lastName.length !== 0) {
            // eslint-disable-next-line camelcase
            alterInfo.last_name = lastName;
        }
        if (imageUrl.length !== 0) {
            // eslint-disable-next-line camelcase
            alterInfo.image = imageUrl;
        }
        if (userLocation.length !== 0) {
            alterInfo.location = userLocation;
        }

        if (jobTitle !== null) {
            alterInfo.role = jobTitle;
            // eslint-disable-next-line camelcase
            alterInfo.service_provider = serviceProvider;
            // eslint-disable-next-line camelcase
            alterInfo.pet_owner = petOwner;
        }

        console.log(alterInfo);


        $.ajax("/api/user/update", {
            type: "PUT",
            data: alterInfo
        }).then(
            function () {
                console.log("Profile Updated.");
                // function (event) { return true };
                alert("Info Updated!");
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

    // change about me 

    $(".about-save-btn").on("click", function () {
        userId = $(this).attr("data-about-id");
        console.log(userId);

        var aboutMe = $("#user-about-me").val().trim();

        var alterAbout = {
            id: userId
        };

        if (aboutMe.length !== 0) {
            // eslint-disable-next-line camelcase
            alterAbout.about_me = aboutMe;
        }

        console.log(alterAbout);

        $.ajax("/api/user/update", {
            type: "PUT",
            data: alterAbout
        }).then(
            function () {
                console.log("Profile Updated.");
                // function (event) { return true };
                alert("Info Updated!");
                location.reload();
            }
        );
    });

    $(".about-cancel-btn").on("click", function () {
        userId = $(this).attr("data-about-id");
        console.log(userId);

        $("#user-about-me").val("");


    });

    // change pets

    $(".pet-save-btn").on("click", function () {
        petId = $(this).attr("data-pet-id");
        console.log(petId);

        var petName = $("#pet-name" + petId).val().trim();
        var imageUrl = $("#pet-image-url" + petId).val().trim();
        var petType = $("#pet-type" + petId).val().trim();
        var petLocation = $("#pet-location" + petId).val().trim();
        var petAbout = $("#pet-about-me" + petId).val().trim();


        var alterPet = {
            id: petId,
        };

        if (petName.length !== 0) {
            // eslint-disable-next-line camelcase
            alterPet.pet_name = petName;
        }
        if (imageUrl.length !== 0) {
            // eslint-disable-next-line camelcase
            alterPet.image = imageUrl;
        }
        if (petType.length !== 0) {
            // eslint-disable-next-line camelcase
            alterPet.pet_type = petType;
        }
        if (petLocation.length !== 0) {
            alterPet.location = petLocation;
        }
        if (petAbout.length !== 0) {
            // eslint-disable-next-line camelcase
            alterPet.about_me = petAbout;
        }

        console.log(alterPet);


        $.ajax("/api/pet/update", {
            type: "PUT",
            data: alterPet
        }).then(
            function () {
                console.log("Profile Updated.");
                alert("Pet Info Updated!");
                location.reload();
            }
        );

    });

    $(".pet-cancel-btn").on("click", function () {
        petId = $(this).attr("data-pet-id");
        console.log(petId);

        $("#pet-name" + petId).val("");
        $("#pet-image-url" + petId).val("");
        $("#pet-type" + petId).val("");
        $("#pet-location" + petId).val("");
        $("#pet-about-me" + petId).val("");

    });

    // change review me 

    $(".review-save-btn").on("click", function () {
        reviewId = $(this).attr("data-review-id");
        console.log(reviewId);

        var reviewTitle = $("#review-title" + reviewId).val().trim();
        var reviewText = $("#review-text" + reviewId).val().trim();
        var reviewRating = $("#review-rating" + reviewId).val();

        var alterReview = {
            id: reviewId
        };

        if (reviewTitle.length !== 0) {
            // eslint-disable-next-line camelcase
            alterReview.title = reviewTitle;
        }
        if (reviewTitle.Text !== 0) {
            // eslint-disable-next-line camelcase
            alterReview.review = reviewText;
        }
        if (reviewTitle.rating !== null) {
            // eslint-disable-next-line camelcase
            alterReview.rating = reviewRating;
        }

        console.log(alterReview);

        $.ajax("/api/review/update", {
            type: "PUT",
            data: alterReview
        }).then(
            function () {
                console.log("Review Updated.");
                // function (event) { return true };
                alert("Review Updated!");
                location.reload();
            }
        );
    });

    $(".review-cancel-btn").on("click", function () {
        userId = $(this).attr("data-review-id");
        console.log(userId);

        $("#user-review-me").val("");


    });

    // Add Pets
    $("#add-pet-btn").on("click", function () {
        console.log("adding a pet");
        $("#add-pet-btn-div").addClass("hide");
        $("#new-pet-form").append(`
          <div class="row">
                <div class="col s12">

                    <div class="card white">

                        <div class="card-stacked">
                            <div class="card-content">
                                <span class="card-title butlr-green-text font3">New Pet</span>
                                <textarea id="new-pet-name" class="materialize-textarea "
                                    placeholder="ex. Spot"></textarea>
                                <label for="new-pet-name">Name</label>

                                <textarea id="new-pet-image-url" class="materialize-textarea "
                                    placeholder="ex. https://website/image.jpg"></textarea>
                                <label for="new-pet-image-url">image url</label>

                                <textarea id="new-pet-type" class="materialize-textarea "
                                    placeholder="ex. Dog"></textarea>
                                <label for="new-pet-type">Pet Type</label>

                                <textarea id="new-pet-location" class="materialize-textarea "
                                    placeholder="ex. Miami, California"></textarea>
                                <label for="new-pet-location">Location</label>

                                <textarea id="new-pet-about-me" class="materialize-textarea  long-text-box"
                                    placeholder="ex, He's the best!"></textarea>
                                <label for="new-pet-about-me">About Me</label>
                            </div>
                            <div class="row">
                                <div class="col s12">

                                    <a id="save-new-pet-btn" class="waves-effect waves-light btn butlr-green right"><i
                                            class="material-icons">done</i></a>
                                    <a id="clear-new-pet-btn"
                                        class="waves-effect waves-light btn grey right margin-right-5"><i
                                            class="material-icons">clear</i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>`);

        $("#save-new-pet-btn").on("click", function () {

            userId = $("#profile-div").attr("data-user-id");
            console.log(userId);

            var petName = $("#new-pet-name").val().trim();
            var petType = $("#new-pet-type").val().trim();
            var petLocation = $("#new-pet-location").val().trim();
            var petImage = $("#new-pet-image-url").val().trim();
            var petAbout = $("#new-pet-about-me").val().trim();

            if (petName.length === 0 || petType.length === 0 || petLocation.length === 0) {

                alert("Name, Type, and location must be filled out.");

            } else {

                var newPet = {

                    // eslint-disable-next-line camelcase
                    owner_id: userId,
                    // eslint-disable-next-line camelcase
                    pet_name: petName,
                    // eslint-disable-next-line camelcase
                    pet_type: petType,
                    location: petLocation,
                };

                if (petImage.length !== 0) {
                    // eslint-disable-next-line camelcase
                    newPet.image = petImage;
                }
                if (petAbout.length !== 0) {
                    // eslint-disable-next-line camelcase
                    newPet.about_me = petAbout;
                }

                console.log(newPet);
                $("#new-pet-form").empty();
                $("#add-pet-btn-div").removeClass("hide");

                $.ajax("/api/pets", {
                    type: "POST",
                    data: newPet
                }).then(
                    function () {
                        console.log("created new pet");
                        // function (event) { return true };
                        location.reload();
                    }
                );

            }
        });
        $("#clear-new-pet-btn").on("click", function () {
            console.log("pet cleared.");
            $("#new-pet-form").empty();
            $("#add-pet-btn-div").removeClass("hide");
        });
    });



});