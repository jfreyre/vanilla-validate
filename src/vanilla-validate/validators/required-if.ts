function compareValue(valueToCompare, operator, targetValue) {
  switch (operator) {
    case "Equal":
      return valueToCompare === targetValue;
    case "NotEqual":
      return valueToCompare !== targetValue;
    case "GreaterThan":
      return valueToCompare > targetValue;
    case "GreaterThanOrEqual":
      return valueToCompare >= targetValue;
    case "LessThan":
      return valueToCompare < targetValue;
    case "LessThanOrEqual":
      return valueToCompare <= targetValue;
    default:
      throw `operator '${operator}' is not yet supported`;
  }
}

const elementIsRadioOrCheckbox = (element: HTMLInputElement) =>
  element.type === "checkbox" || element.type === "radio";

const key = "required-if";

function isValid(element: HTMLInputElement, form: HTMLFormElement) {
  const compareToProperty = element.dataset.valRequiredIfTargetProperty;
  const targetValue = element.dataset.valRequiredIfTargetValue;
  const operator = element.dataset.valRequiredIfOperator;

  console.log(form.querySelectorAll(`[name="${compareToProperty}"]`));
  let elementToCompare = [
    ...form.querySelectorAll(`[name="${compareToProperty}"]`)
  ];

  const currentIsCheckbox = elementIsRadioOrCheckbox(element);
  const targetIsCheckbox = elementIsRadioOrCheckbox(elementToCompare[0]);

  if (targetIsCheckbox) {
    elementToCompare = elementToCompare.find((input) => input.checked);
  }

  const valToCompare = elementToCompare ? elementToCompare.value : null;

  let isRequired = compareValue(valToCompare, operator, targetValue);

  // based on rule, check if input is valid
  return (
    !isRequired ||
    (currentIsCheckbox ? element.checked : element.value.length > 0)
  );
}

const requiredIf: Validator = {
  key,
  isValid
};

export default requiredIf;
