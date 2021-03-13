import sut from "./equal-to";

describe("The equal to validator", function () {
  let testForm: HTMLFormElement;
  let testElement: HTMLInputElement;

  // TODO ?
  beforeEach(() => {
    jest.spyOn(console, "warn");
  });

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
    expect(sut.key).toBe("equalto");
  });

  it("should fail if data set is not defined", () => {
    // arrange
    testElement.value = "foo";

    // act
    let result = sut.isValid(testElement, testForm);

    // assert
    expect(console.warn).toHaveBeenCalledTimes(1);
    expect(result).toBeFalsy();
  });

  describe("when target exist", () => {
    let testTarget: HTMLInputElement;

    beforeEach(() => {
      testElement.dataset.valEqualtoOther = "*.testTarget";

      testTarget = document.createElement("input");
      testTarget.name = "testTarget";

      testForm.appendChild(testTarget);
    });

    afterEach(() => {
      expect(console.warn).toHaveBeenCalledTimes(0);
    });

    it("should return true if value are equal", () => {
      // arrange
      testTarget.value = "foo";
      testElement.value = "foo";

      // act
      const result = sut.isValid(testElement, testForm);
      // assert
      expect(result).toBeTruthy();
    });

    it("should return false if value are different", () => {
      // arrange
      testTarget.value = "foo";
      testElement.value = "bar";

      // act
      const result = sut.isValid(testElement, testForm);
      // assert
      expect(result).toBeFalsy();
    });
  });
});
