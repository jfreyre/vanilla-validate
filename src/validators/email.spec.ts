import emailValidator from "./email";

describe("The email input validator", function () {
  let sut: HTMLInputElement;

  beforeEach(() => {
    sut = document.createElement("input");
    sut.id = "sut";

    document.body.appendChild(sut);
  });

  afterEach(() => {
    sut.remove();
  });

  it("should have a fixed key", () => {
    expect(emailValidator.key).toBe("email");
  });

  describe("when element is a real email input", () => {
    function test_for_different_kind_of_input(type: string) {
      beforeEach(() => {
        sut.type = type;
      });

      describe(`for ${type} inputs`, () => {
        it("should work for a valid email", () => {
          // arrange
          sut.value = "foo@bar.com";

          // act
          const result = emailValidator.isValid(sut, null);

          // assert
          expect(result).toBeTruthy();
        });

        it("should works for an empty input", () => {
          // arrange
          sut.value = "";

          // act
          const result = emailValidator.isValid(sut, null);

          // assert
          expect(result).toBeTruthy();
        });

        it("should fail for an ivalid email", () => {
          // arrange
          sut.value = "foo";

          // act
          const result = emailValidator.isValid(sut, null);

          // assert
          expect(result).toBeFalsy();
        });
      });
    }

    ["text", "email"].forEach((v) => test_for_different_kind_of_input(v));
  });
});
