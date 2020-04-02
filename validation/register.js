const Validator = require("validator");

const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};
// Convert empty fields to an empty string so we can use validator functions
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.company_name = !isEmpty(data.company_name) ? data.company_name : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password_confirm = !isEmpty(data.password_confirm) ? data.password_confirm : "";

  // Name checks
  if(!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = 'Name must be between 2 to 30 chars';
}

if(Validator.isEmpty(data.name)) {
    errors.name = 'Name field is required';
}

// Email checks
if(!Validator.isEmail(data.email)) {
  errors.email = 'Email is invalid';
}

if(Validator.isEmpty(data.email)) {
  errors.email = 'Email is required';
}

// Company name checks
if(!Validator.isLength(data.company_name, { min: 2, max: 30 })) {
  errors.company_name = 'Company name must be between 2 to 30 chars';
}

if(Validator.isEmpty(data.company_name)) {
  errors.company_name = 'Company name is required';

// Password checks
if(!Validator.isLength(data.password, {min: 6, max: 30})) {
  errors.password = 'Password must have 6 chars';
}

if(Validator.isEmpty(data.password)) {
  errors.password = 'Password is required';
}

if(!Validator.isLength(data.password_confirm, {min: 6, max: 30})) {
  errors.password_confirm = 'Password must have 6 chars';
}

if(!Validator.equals(data.password, data.password_confirm)) {
  errors.password_confirm = 'Password and Confirm Password must match';
}

if(Validator.isEmpty(data.password_confirm)) {
  errors.password_confirm = 'Password is required';
}

return {
    errors,
    isValid: isEmpty(errors)
  }
  }
}