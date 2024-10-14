import { ClassConstructor, plainToInstance } from "class-transformer";
import { validateOrReject, ValidationError } from "class-validator";

import { ValidationError as CustomValidationError } from "./validation-error";


export async function validateData<T extends object>(cls: ClassConstructor<T>, data: any) {
  const instance = plainToInstance(cls, data);

  try {
    await validateOrReject(instance);
  } catch (errors) {
    if (Array.isArray(errors)) {
      throw new CustomValidationError(errors as ValidationError[]);
    }
    else {
      throw new Error('Unknown validation error occurred.');
    }
  }
}
