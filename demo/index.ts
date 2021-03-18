// just for styling purpose
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// import our real lib
import {
  initVanillaValidation,
  registerNewValidator
} from "../src/vanilla-validate";

// Uncomment to register a custom validation
registerNewValidator({
  key: "foo",
  isValid: (element, form) => {
    // this one will be invalid forever
    return false;
  }
});

initVanillaValidation();
