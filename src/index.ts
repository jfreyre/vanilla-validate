import "./style.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import {
  initVanillaValidation,
  registerNewValidator
} from "./vanilla-validate";

// Uncomment to register a custom validation
registerNewValidator({
  key: "foo",
  isValid: (element, form) => {
    // this one will be invalid forever
    return false;
  }
});

initVanillaValidation();
