import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';

export function IsStringOrNumberArray(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isStringOrNumberArray',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, _args: ValidationArguments) {
          return Array.isArray(value) && value.every(item => typeof item === 'string' || typeof item === 'number');
        },
        defaultMessage(args: ValidationArguments) {
          return `All elements of ${args.property} must be number or string`;
        },
      },
    });
  };
}
