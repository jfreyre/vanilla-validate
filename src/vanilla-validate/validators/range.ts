import { Validator } from "./validator.interface";

import "regexp";

const key = "range";
function isValid(element: HTMLElement, form: HTMLFormElement) {
  let value = element.value.toLowerCase();

  let min = element.dataset.valRangeMin?.toLowerCase();
  let max = element.dataset.valRangeMax?.toLowerCase();

  var isValid = false;

  if (element.type === "checkbox") {
    isValid =
      element.checked.toString() === min && element.checked.toString() === max;
  } else if (+value > +min && +value < +max) {
    isValid = true;
  }

  return isValid;
}

const range: Validator = {
  key,
  isValid
};

export default range;
