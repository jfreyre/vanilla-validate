export interface Validator {
  key: string;
  isValid: ElementIsValidFunc;
}

export interface ElementIsValidFunc {
  (element: HTMLInputElement, form: HTMLFormElement): boolean;
}
