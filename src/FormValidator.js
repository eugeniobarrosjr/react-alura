import validator from 'validator/es';

class FormValidator {
  constructor(validations) {
    this.validations = validations;
  }

  validate(state) {
    let validation = this.isValidate();

    this.validations.forEach((rule) => {
      const value = state[rule.field.toString()];
      const args = rule.args || [];

      const method =
        typeof rule.method === 'string' ? validator[rule.method] : rule.method;

      if (method(value, ...args, state) !== rule.validWhen) {
        validation[rule.field] = {
          isInvalid: true,
          message: rule.message,
        };
        validation.isValid = false;
      }
    });

    return validation;
  }

  isValidate() {
    const validation = {};

    this.validations.map(
      (rule) => (validation[rule.field] = { isInvalid: false, message: true })
    );

    return { isValid: true, ...validation };
  }
}

export default FormValidator;
