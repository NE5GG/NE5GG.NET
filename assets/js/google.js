function initiateOneTap() {
  // Configure Google One Tap options
  const options = {
    client_id: "203363874589-dtjqndbokl6kq0ekq1q4fssa5vn6sphe.apps.googleusercontent.com",
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

        
          // Update the icon with the profile picture URL (if consent is granted)
          document.getElementById('account_id').src = imageUrl;
          });
    });
  });
}
