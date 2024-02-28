const options = {
  client_id: "203363874589-dtjqndbokl6kq0ekq1q4fssa5vn6sphe.apps.googleusercontent.com",
  callback: function(response) {
    // Handle the One Tap response
    const profile = response.getBasicProfile();
    const imageUrl = profile.getImageUrl();

    // Create a new img tag
    const img = document.createElement('img');
    img.src = imageUrl;
    img.className = 'account-icon';
    img.id = 'account_id';

    // Replace the i tag with the img tag
    const icon = document.getElementById('account_id');
    icon.parentNode.replaceChild(img, icon);
  },
};

  // Initialize Google One Tap
  window.google.accounts.id.initialize(options);
  window.google.accounts.id.prompt(); // This will display the One Tap prompt
}

// Call initiateOneTap when the page loads
window.onload = initiateOneTap;