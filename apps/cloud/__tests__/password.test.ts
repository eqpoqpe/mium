// // Example usage
// const password = 'myPassword';
// const salt = crypto.randomBytes(16).toString('hex');

// // Hash the password
// hashPassword(password, salt)
//   .then(hashedPassword => {
//     console.log('Hashed Password:', hashedPassword);

//     // For verification, retrieve the salt and hashed password from the database
//     // Then use verifyPassword to check the password
//     const storedSalt = salt;
//     const storedHashedPassword = hashedPassword;

//     // Verify the password
//     return verifyPassword(password, storedSalt, storedHashedPassword);
//   })
//   .then(isValid => {
//     console.log('Password is valid:', isValid);
//   })
//   .catch(err => {
//     console.error('Error:', err);
//   });