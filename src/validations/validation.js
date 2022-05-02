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
  }else{
      return true;
  }
};

export const passwordMatch = (password, confirmPassword) => {
  if (password.localeCompare(confirmPassword)) {
    return false;
  }else{
      return true;
  }
};