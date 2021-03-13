import "regexp";
import { Validator } from "./validator.interface";

const key = "regex";

function isValid(element: HTMLElement, form: HTMLFormElement) {
  const pattern = new RegExp(element.dataset.valRegexPattern);

  return element.value.length === 0 || pattern.test(element.value);
}

const regex: Validator = {
  key,
  isValid
};

export default regex;
