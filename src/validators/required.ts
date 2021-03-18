import { Validator } from "./validator.interface";

const key = "required";

function isValid(element: HTMLElement, form: HTMLFormElement) {
  return element.value.length > 0;
}

const required: Validator = {
  key,
  isValid
};

export default required;
