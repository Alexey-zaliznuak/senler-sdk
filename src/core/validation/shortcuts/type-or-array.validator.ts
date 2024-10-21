import Joi from 'joi';

export const TypeOrArray = (T: Joi.AnySchema<any>): Joi.AlternativesSchema<any> => Joi.alternatives().try(T.required(), Joi.array().items(T.optional()).required());

export const TypeOrNotEmptyArray = (T: Joi.AnySchema<any>): Joi.AlternativesSchema<any> => Joi.alternatives().try(T.required(), Joi.array().items(T.optional()).required().min(1));
