import { Validator } from "./validator.interface";

import "regexp";

const key = "email";

function isValid(element: HTMLInputElement) {
  let value = element.value.toLowerCase();

  if (value.length > 0) {
    // TODO: Real basic email validation. Must be improved
    const pattern = /[^@]+@[^\.]+\..+/;
    let regex = new RegExp(pattern);

    return regex.test(value);
  }

  return true;
}

let emailValidator: Validator = {
  key,
  isValid
};

export default emailValidator;
