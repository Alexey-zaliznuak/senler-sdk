import Joi from 'joi';

// Numeric
export const OptionalNumber = Joi.number();
export const RequiredNumber = OptionalNumber.required();

export const OptionalInteger = OptionalNumber.integer();
export const RequiredInteger = OptionalInteger.required();

export const OptionalPosInteger = OptionalInteger.min(0);
export const RequiredPosInteger = OptionalPosInteger.required();

// Strings
export const OptionalString = Joi.string();
export const RequiredString = OptionalString.required();
