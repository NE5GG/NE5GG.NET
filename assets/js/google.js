function handleCredentialResponse(response) {
  // Log the ID token
  console.log("ID: " + response.credential);

  // Get the user's full name and email
  const fullName = response.name;
  const email = response.email;

  // Split the full name into first and last name
  const nameParts = fullName.split(' ');
  const firstName = nameParts[0];
  const lastName = nameParts.length > 1 ? nameParts[nameParts.length - 1] : '';

  console.log('First Name: ' + firstName);
  console.log('Last Name: ' + lastName);
  console.log('Email: ' + email);
}