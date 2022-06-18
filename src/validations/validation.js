import isEmail from "validator/lib/isEmail";


// validate email
export const validateEmail = (value) => {
  if (!isEmail(value)) {
    return false;
  } else {
    return true;
  }
};

export const required = (value) => {
  if (!value) {
    return false;
  } else {
    return true;
  }
};

export const passwordMatch = (password, confirmPassword) => {
  //check if confirm password matches password 
  if (password.localeCompare(confirmPassword)) {
    return false;
  } else {
    return true;
  }
};

export const validateNic = (value) => {
  // ^ matches position just before the first character of the string
  // $ matches position just after the last character of the string
  if (!/^\d{10}$/.test(value)) {
    return false;
  } else {
    return true;
  }
};