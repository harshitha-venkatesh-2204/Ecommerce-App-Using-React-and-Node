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
  
    return errors;
  };
  
  export default loginValidation;
  