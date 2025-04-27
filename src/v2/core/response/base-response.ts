export type BaseResponse<T = {}> = {
  success: boolean;
  error_code?: number;
  error_message?: string;
} & T;
