// validate fields
export const validateFields = (fields, fieldsToValidate) => {
  const errors = [];
  fieldsToValidate.forEach(field => {
    if (!fields[field]) {
      errors.push(field);
    }
  });

  return errors;
};

// validate password
export const validatePassword = password => {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!passwordRegex.test(password)) {
    return false;
  } else {
    return true;
  }
};

// check if a specific field is empty
export const isFieldEmpty = (field, emptyFields) =>
  emptyFields?.includes(field);
