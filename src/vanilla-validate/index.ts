import {
  formWithValidationClass,
  validateInput,
  validateForm
} from "./validate";

import { registerNewValidator } from "./validators";

let initVanillaValidation = function () {
  let forms = document.querySelectorAll(`.${formWithValidationClass}`);

  forms.forEach((f) => {
    let inputs = f.querySelectorAll("input");
    inputs.forEach((i) => {
      if (i.type === "checkbox") {
        i.addEventListener("click", (e) => {
          validateInput(f, e.target, null);
        });
      } else {
        i.addEventListener("change", (e) => {
          validateInput(f, e.target, null);
        });
        i.addEventListener("blur", (e) => {
          validateInput(f, e.target, null);
        });
      }
    });

    f.addEventListener(
      "submit",
      function (e) {
        if (!validateForm(this)) {
          e.preventDefault();
        }
      },
      false
    );
  });
};

export { initVanillaValidation, registerNewValidator };
