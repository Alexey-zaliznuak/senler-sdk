// TODO: remove if unusefull

export const mockSuccessResponseData = {
  items: [
    {
      "id":  1,
      "name":  "John",
      "surname":  "Doe",
    },
    {
      "id":  1,
      "name":  "Doe",
      "surname":  "John",
    }
  ]
}

export const mockSuccessResponse = {
  success: true,
  ...mockSuccessResponseData,
};

export const mockErrorResponse = {
  success: false,
  error_code: 1,
  error_message: 'Missing parameter',
  ...mockSuccessResponseData,
};
