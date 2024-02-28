function decodeJwt(jwt) {
  // Split the JWT into parts
  const parts = jwt.split('.');

  // Check if the JWT includes the correct number of parts
  if (parts.length !== 3) {
    throw new Error('The JWT is not correctly formatted');
  }

  // Decode the payload
  const payload = parts[1];
  const decodedPayload = JSON.parse(atob(payload));

  return decodedPayload;
}

function handleCredentialResponse(response) {
  // Log the ID token
  console.log("ID: " + response.credential);

  // Decode the JWT
  const decodedJwt = decodeJwt(response.credential);

  // Get the user's name and email
  const firstName = decodedJwt.given_name;
  const lastName = decodedJwt.family_name;
  const email = decodedJwt.email;
  const picture = decodedJwt.picture;

  console.log('First Name: ' + firstName);
  console.log('Last Name: ' + lastName);
  console.log('Email: ' + email);
  console.log('Picture: ' + picture);
}