const loginValidation = (values) => {
  let errors = {};

  // Validate email
  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email is not valid';
  }

  // Validate password
  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 8) {
    errors.password = 'Password must be at least 8 characters long';
  } else if (!/(?=.*[a-z])/.test(values.password)) {
    errors.password = 'Password must contain at least one lowercase letter';
  } else if (!/(?=.*[A-Z])/.test(values.password)) {
    errors.password = 'Password must contain at least one uppercase letter';
  } else if (!/(?=.*\d)/.test(values.password)) {
    errors.password = 'Password must contain at least one number';
  } else if (!/(?=.*[!@#$%^&*])/.test(values.password)) {
    errors.password = 'Password must contain at least one special character (!@#$%^&*)';
  }

  // Validate name
  if (!values.fullName) {
    errors.fullName = 'Name is required';
  } else if (values.fullName.length < 3) {
    errors.fullName = 'Name must have at least 3 characters';
  } else if (!/^[a-zA-Z\s]+$/.test(values.fullName)) {
    errors.fullName = 'Name must contain only letters and spaces';
  }

  // Validate confirm password
  if (!values.confirmPassword) {
    errors.confirmPassword = 'Confirm Password is required';
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = 'Passwords do not match';
  }

  return errors;
};

export default loginValidation;
