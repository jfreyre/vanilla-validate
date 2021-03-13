import { ElementIsValidFunc, Validator } from "./validator.interface";

import "regexp";

const key = "equalto";

// https://referencesource.microsoft.com/
// #System.ComponentModel.DataAnnotations/DataAnnotations/CompareAttribute.cs

function isValid(element: HTMLElement, form: HTMLFormElement) {
  const targetFieldName = element.dataset.valEqualtoOther;

  // TODO: Check if pattern is always the same
  // example is using -> nameAttribute.split(".")[0] + "." + other.split(".")[1];
  var otherName = targetFieldName.split(".")[1];
  var targetElement = form.querySelector('[name="' + otherName + '"]');

  if (!targetElement) {
    console.warn(`unable to find ${otherName}`);
  }

  return (
    (element as HTMLInputElement).value ===
    (targetElement as HTMLInputElement).value
  );
}

const isEqualTo: Validator = {
  key,
  isValid
};

export default isEqualTo;
