import sut from "./required";

describe("The required validator", function () {
  let testForm: HTMLFormElement;
  let testElement: HTMLInputElement;

  beforeEach(() => {
    testForm = document.createElement("form");
    testForm.id = "testForm";

    testElement = document.createElement("input");
    testElement.id = "testElement";

    testForm.appendChild(testElement);

    document.body.appendChild(testForm);
  });

  afterEach(() => {
    testForm.remove();
    testElement.remove();
  });

  it("should have a fixed key", () => {
    expect(sut.key).toBe("required");
  });

  it("should be invalid if value is empty", () => {
    // arrange
    testElement.value = "";

    // act
    const result = sut.isValid(testElement, testForm);

    // assert
    expect(result).toBeFalsy();
  });

  it("should be valid if there is a value", () => {
    // arrange
    testElement.value = "foo";

    // act
    const result = sut.isValid(testElement, testForm);

    // assert
    expect(result).toBeTruthy();
  });
});
