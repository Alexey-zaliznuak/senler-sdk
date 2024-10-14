import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';

export function IsStringOrNumberArray(validationOptions?: ValidationOptions): Function {
  return function(object: Object, propertyName: string) {
    registerDecorator({
      name: 'isStringOrNumberArray',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        validate(value: any, _args: ValidationArguments): boolean {
          return Array.isArray(value) && value.every(item => typeof item === 'string' || typeof item === 'number');
        },
        defaultMessage(args: ValidationArguments): string {
          return `All elements of ${args.property} must be number or string`;
        }
      }
    });
  };
}
