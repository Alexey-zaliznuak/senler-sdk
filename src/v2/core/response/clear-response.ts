/**
 * Decorator that removes specific metadata fields (`success`, `error_code`, `error_message`)
 * from the response object of an API method. This is useful for returning only the relevant
 * data to the user or client, without any status-related or error-related fields.
 */
export function clearResponse(_target: any, _propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
  const originalMethod = descriptor.value;

  descriptor.value = async function (...args: any[]): Promise<any> {
    const result = await originalMethod.apply(this, args);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { success, error_code, error_message, ...filteredResult } = result;

    return filteredResult;
  };

  return descriptor;
}
