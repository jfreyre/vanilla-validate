import "regexp";
import { Validator } from "./validator.interface";

const key = "regex";

function isValid(
  element: HTMLInputElement | HTMLSelectElement,
  form: HTMLFormElement
) {
  const data = element.dataset.valRegexPattern;

  if (data === undefined || !data.length) {
    console.warn(`no pattern defined for element.`);
  }

  const pattern = new RegExp(data);

  return element.value.length === 0 || pattern.test(element.value);
}

const regex: Validator = {
  key,
  isValid
};

export default regex;
