$("select").formSelect();

$("#register-btn").on("click", function () {
    var firstName = $("#first-name").val().trim();
    var lastName = $("#last-name").val().trim();
    if ($("#pet-owner:checked").val() === "on") {
        var petOwner = 1;
    } else {
        var petOwner = 0;
    };
    if ($("#service-provider:checked").val() === "on") {
        var serviceProvider = 1;
    } else {
        var serviceProvider = 0;
    };
    if ($("#service-provider:checked").val() === "on") {
        var jobTitle = $("#job-title").val().trim();
    } else {
        var jobTitle = "None";
    };
    var email = $("#email").val().trim();
    var password = $("#password").val().trim();

    console.log(`${firstName}
    ${firstName}
    ${lastName}
    ${petOwner}
    ${serviceProvider}
    ${jobTitle}
    ${email}
    ${password}`)
});