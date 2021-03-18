import email from "./email";
import equalTo from "./equal-to";
import range from "./range";
import regex from "./regex";
import requiredIf from "./required-if";
import required from "./required";
import { Validator } from "./validator.interface";

// TODO: Find a way to properly create / adapt new validators
// TODO: Idea for some custom case, the key could be a function instead to determine if the validator should apply on field. This could be the case for `email` we can check either if the field input type is email or if it has the attribute data-val-email
const validators = {
  email,
  equalTo,
  range,
  regex,
  requiredIf,
  required
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
