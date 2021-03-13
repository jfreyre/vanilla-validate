// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

import { validators } from "./validators";

console.log(validators);

export const formWithValidationClass = "js-form-validation";

function clearErrorMessage(form, element) {
  var detail = form.querySelector(
    `[data-valmsg-for="${element.getAttribute("name")}"]`
  );
  if (detail) {
    detail.textContent = "";
  }
}

function addValidationError(form, element, message, summary) {
  if (summary) {
    var li = document.createElement("li");
    li.textContent = message;
    summary.appendChild(li);
  }

  var detail = form.querySelector(
    `[data-valmsg-for="${element.getAttribute("name")}"]`
  );
  if (detail) {
    detail.textContent = message;
  }
}

export function validateInput(
  form: HTMLFormElement,
  element: HTMLElement,
  summary: string
) {
  let returnValue = true;

  console.log("START validator of ", element.getAttribute("name"));

  for (const [, validator] of Object.entries(validators)) {
    let attrKey = `data-val-${validator.key}`;

    if (element.hasAttribute(attrKey)) {
      const isValid = validator.isValid(element, form);

      console.log(`--> `, validator.key, " is ", isValid);

      if (isValid && returnValue) {
        clearErrorMessage(form, element);
      } else if (!isValid) {
        let message = element.getAttribute(attrKey);
        addValidationError(form, element, message, summary);
        returnValue = false;
      }
    }
  }

  console.log(
    "END validation for ",
    element.getAttribute("name"),
    "is ",
    returnValue
  );

  return returnValue;
}

export function validateForm(form) {
  var returnValue = true;
  var i;
  var summary = form.querySelector('[data-valmsg-summary="true"]');
  summary.textContent = "";

  var elements = form.querySelectorAll("[data-val]");

  for (i = 0; i < elements.length; i++) {
    const currentInput = elements[i];

    debugger;
    if (!validateInput(form, currentInput, summary)) {
      returnValue = false;
    }
  }

  console.log("Form validation is finally", returnValue);
  return returnValue;
}
