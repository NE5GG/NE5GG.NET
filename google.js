// google.js
function onSignIn(googleUser) {
    // Get the user's profile
    var profile = googleUser.getBasicProfile();

    // Get the URL of the user's profile picture
    var imageUrl = profile.getImageUrl();

    // Update the icon to the user's profile picture
    document.querySelector('.account-icon').src = imageUrl;
}