import { ApiError } from '../errors';
import { BaseResponse } from './base-response';

/**
 * Decorator that checks the `success` field from the response object of an API method.
 * If `success` is `false`, it throws an `ApiError` with the associated error code.
 * The decorator is intended to handle errors based on the response structure documented at:
 * https://help.senler.ru/senler/dev/api/vozvrashaemye-oshibki
 */
export function handleApiError(_target: any, _propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
  const originalMethod = descriptor.value;

  descriptor.value = async function (...args: any[]): Promise<any> {
    const result: BaseResponse = await originalMethod.apply(this, args);

    if (result.success === false) {
      throw new ApiError(result.error_code, result.error_message);
    }

    return result;
  };

  return descriptor;
}
