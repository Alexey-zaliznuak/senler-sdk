import { ValidationError as _ValidationError } from "class-validator";

export class ValidationError extends Error {
  public validationErrors: _ValidationError[];

  constructor(errors: _ValidationError[]) {
    super("Validation error");
    this.validationErrors = errors;
  }

  formatErrors(): string {
    return this.validationErrors.map(err => {
      const msg = err.toString(true, false, undefined, true);
      return `${msg}`;
    }).join(';\n');
  }
}
