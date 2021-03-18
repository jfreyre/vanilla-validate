import sut from "./regex";

describe("The regex validator", function () {
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
    expect(sut.key).toBe("regex");
  });

  describe("when a pattern is defined", () => {
    it("should be valid if value is empty", () => {
      // arrange
      testElement.value = "";

      // act
      const result = sut.isValid(testElement, testForm);

      // assert
      expect(result).toBeTruthy();
    });

    it("should be valid if value respect the regex", () => {
      // arrange
      testElement.dataset.valRegexPattern = "^foo$";
      testElement.value = "foo";

      // act
      const result = sut.isValid(testElement, testForm);

      // assert
      expect(result).toBeTruthy();
    });

    it(`should be invalid if value don't respect the regex`, () => {
      // arrange
      testElement.dataset.valRegexPattern = "^foo$";
      testElement.value = "bar";

      // act
      const result = sut.isValid(testElement, testForm);

      // assert
      expect(result).toBeFalsy();
    });
  });
});
