const options = {
  client_id: "203363874589-dtjqndbokl6kq0ekq1q4fssa5vn6sphe.apps.googleusercontent.com",
  callback: function(response) {
    // Get the JWT from the response
    const jwt = response.credential;

    // Send the JWT to your server
    fetch('/api/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ jwt: jwt })
    });

    // Update the profile picture
    const imageUrl = response.imageUrl;
    const img = document.createElement('img');
    img.src = imageUrl;
    img.className = 'account-icon';
    img.id = 'account_id';
    const icon = document.getElementById('account_id');
    icon.parentNode.replaceChild(img, icon);
  },
};

// Initialize Google One Tap
window.google.accounts.id.initialize(options);
window.google.accounts.id.prompt(); // This will display the One Tap prompt

// Call initiateOneTap when the page loads
window.onload = initiateOneTap;