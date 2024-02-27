function initiateOneTap() {
  // Configure Google One Tap options
  const options = {
    client_id: "YOUR_CLIENT_ID",
    context: "signin",
    scope: "profile", // Request profile information (name and picture)
  };

  // Initialize Google One Tap
  window.gapi.load("signin2", (googleAuth) => {
    googleAuth.init(options);

    // Attach click handler to the existing button
    const button = document.getElementById('account_id');
    button.addEventListener('click', () => {
      googleAuth.attachClickHandler(button, (googleUser) => {
        const profile = googleUser.getBasicProfile();
        const imageUrl = profile.getImageUrl();

        // **Important:** Seek user consent before accessing or displaying image
        if (confirm("Would you like to display your profile picture?")) {
          // Update the icon with the profile picture URL (if consent is granted)
          document.getElementById('account_id').src = imageUrl;
        } else {
          // Inform user that picture won't be displayed (optional)
          console.log("User declined to display profile picture.");
        }
      });
    });
  });
}
