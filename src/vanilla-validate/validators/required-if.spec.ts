import sut from "./required-if";

describe("The required-if validator", function () {
  let testForm: HTMLFormElement;
  let testElement: HTMLInputElement;
  let targetElement: HTMLInputElement;

  beforeEach(() => {
    testForm = document.createElement("form");
    testForm.id = "testForm";

    testElement = document.createElement("input");
    testElement.id = "testElement";

    targetElement = document.createElement("input");
    targetElement.id = "targetElement";
    targetElement.name = "targetElement";

    testForm.appendChild(testElement);

    testForm.appendChild(targetElement);

    document.body.appendChild(testForm);
  });

  afterEach(() => {
    testForm.remove();
    testElement.remove();
  });

  it("should have a fixed key", () => {
    expect(sut.key).toBe("required-if");
  });

  describe(`when target doesn't exist`, () => {
    beforeEach(() => {
      testElement.dataset.valRequiredIfTargetProperty = "unknown-element";
    });
  });

  describe(`when operator doesn't exist`, () => {
    beforeEach(() => {
      testElement.dataset.valRequiredIfOperator = "unknown-operator";
    });
  });

  describe("when target and operator exist", () => {
    beforeEach(() => {
      targetElement.value
        = testElement.dataset.valRequiredIfTargetValue
        = "bar";
      testElement.dataset.valRequiredIfOperator = "Equal";
      testElement.dataset.valRequiredIfTargetProperty = targetElement.name;
    });

    it("should be valid if there is a value", () => {
      // arrange
      testElement.value = "foo";

      // act
      const result = sut.isValid(testElement, testForm);

      // assert
      expect(result).toBeTruthy();
    });

    it("should be invalid if there is no value", () => {
      // arrange
      testElement.value = "";

      // act
      const result = sut.isValid(testElement, testForm);

      // assert
      expect(result).toBeFalsy();
    });
  });
});
