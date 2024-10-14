import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';

export function IsDateFormat(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isDateFormat',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, _args: ValidationArguments) {
          // Regular expression for the format d.m.Y H:i:s (for example, 11/27/2018 10:00:00)
          const dateFormatRegex = /^\d{2}\.\d{2}\.\d{4} \d{2}:\d{2}:\d{2}$/;
          return typeof value === 'string' && dateFormatRegex.test(value);
        },
        defaultMessage(args: ValidationArguments) {
          return `${args.property} it must be in the format d.m.Y H:i:s (for example, 27.11.2018 10:00:00).`;
        },
      },
    });
  };
}
