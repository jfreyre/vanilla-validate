import "./style.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import {
  initVanillaValidation,
  registerNewValidator
} from "./vanilla-validate";

console.log("aaa");

// Uncomment to register a custom validation
registerNewValidator({
  key: "foo",
  isValid: (element, form) => {
    return false;
  }
});

initVanillaValidation();
