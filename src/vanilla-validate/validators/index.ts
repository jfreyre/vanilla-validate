import email from "./email";
import equalTo from "./equal-to";
import { Validator } from "./validator.interface";

// TODO: Find a way to properly create / adapt new validators
// TODO: Idea for some custom case, the key could be a function instead to determine if the validator should apply on field. This could be the case for `email` we can check either if the field input type is email or if it has the attribute data-val-email
const validators = {
  email,
  equalTo
};

function registerNewValidator(validator: Validator) {
  if (!validator.key) {
    throw new Error("No key defined");
  }

  if (typeof validator.isValid !== "function") {
    throw new Error("is Valid should be a function");
  }

  validators[validator.key] = validator;
}

export { validators, registerNewValidator };
