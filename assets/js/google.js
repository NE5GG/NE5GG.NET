function initiateOneTap() {
    // Configure Google One Tap options
    const options = {
      client_id: "203363874589-ps068ejfroefimjmdq06vvhfm2gnpug7.apps.googleusercontent.com",
      context: "signin",
      scope: "profile", // Request profile information from Google
    };
  
    // Initialize Google One Tap
    window.gapi.load("signin2", (googleAuth) => {
      googleAuth.init(options);
  
      // Attach click handler to the existing button
      const button = document.querySelector('.account-icon');
      button.addEventListener('click', () => {
        googleAuth.attachClickHandler(button, (googleUser) => {
          const profile = googleUser.getBasicProfile();
          const imageUrl = profile.getImageUrl();
  
          // **Important:** Display a clear notice or prompt requesting user consent
          // before accessing their profile picture.
          if (confirm("Would you like to display your profile picture?")) {
            // Update the icon with the profile picture URL (if consent is granted)
            document.querySelector('.account-icon').src = imageUrl;
          } else {
            // Inform user that profile picture won't be displayed
            console.log("User declined to display profile picture.");
          }
        });
      });
    });
  }
  