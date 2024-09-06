import { ApiError } from '../errors/ApiError';
import { BaseResponse } from './response.dto';

export function handleApiError(target: unknown, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
  const originalMethod = descriptor.value;

  descriptor.value = async function(...args: any[]) {
    const result: BaseResponse = await originalMethod.apply(this, args);

    if (result.success === false) {
      throw new ApiError(result.error_code!);
    }

    return result;
  };

  return descriptor;
}
