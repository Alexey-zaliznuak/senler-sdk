import Joi from 'joi';

/**
 * Validate first argument by provided schema
 * @param schema Schema for validation
 * @param optional Throw error if not optional and data is undefined
 */
export function ValidateData(schema: Joi.ObjectSchema, optional: boolean = false) {
  return function (_target: any, _key: string, descriptor: PropertyDescriptor): any {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]): any {
      const [data] = args;

      if (!optional && data === undefined) throw new Error('Validation error: Data required.');
      if (optional && data === undefined) return originalMethod.apply(this, [...args]);

      const { error, value } = schema.validate(data);

      if (error) {
        throw new Error(`Validation error: ${error.details.map((x) => x.message).join(', ')}`);
      }

      return originalMethod.apply(this, [value, ...args.slice(1)]);
    };

    return descriptor;
  };
}
