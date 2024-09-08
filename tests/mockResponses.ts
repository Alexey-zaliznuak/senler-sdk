export const mockSuccessResponse = {
  success: true,
  error_code: 0,
  error_message: 'No error',
  data: {
    id: 1,
    name: 'Test User',
  }
};

export const mockErrorResponse = {
  success: false,
  error_code: 1,
  error_message: 'Missing parameter',
  data: {
    id: null,
    name: 'Error User',
  }
};
