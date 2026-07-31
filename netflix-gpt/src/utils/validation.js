import { firebaseErrorMessages } from "./constants";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&^#()_\-+=])[A-Za-z\d@$!%*?&^#()_\-+=]{8,}$/;

const isValidEmail = (email) => {
  return emailRegex.test(email);
};

const isValidPassword = (password) => {
  return passwordRegex.test(password);
};

export const checkValidation = (email, password) => {
  const validMail = isValidEmail(email);
  const validPassword = isValidPassword(password);
  const error = [];

  if (!validMail) error.push("Invalid email");
  if (!validPassword) error.push("Invalid password");

  return error.length ? error.join(" ") : null;
};

export const getFirebaseErrorMessage = (code) => {
  return (
    firebaseErrorMessages[code] ?? "Something went wrong. Please try again."
  );
};
