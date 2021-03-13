export interface Validator {
  key: string;
  isValid: ElementIsValidFunc;
}

export interface ElementIsValidFunc {
  (element: HTMLElement, form: HTMLFormElement): boolean;
}
