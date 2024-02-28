function handleCredentialResponse(response) {
  // Log the ID token
  console.log("ID: " + response.credential);

  // Get the user's profile information
  var profile = google.accounts.id.getBasicProfile();
  console.log('Full Name: ' + profile.getName());
  console.log('Given Name: ' + profile.getGivenName());
  console.log('Family Name: ' + profile.getFamilyName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail());

  // Update the profile picture
  const imageUrl = profile.getImageUrl();
  const img = document.createElement('img');
  img.src = imageUrl;
  img.className = 'account-icon';
  img.id = 'account_id';
  const icon = document.getElementById('account_id');
  icon.parentNode.replaceChild(img, icon);
}