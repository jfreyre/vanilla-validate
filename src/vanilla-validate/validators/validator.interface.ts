export interface Validator {
  key: string;
  isValid: ElementIsValidFunc;
}

export interface ElementIsValidFunc {
  (element: HTMLSelectElement, form: HTMLFormElement): boolean;
}
