import Joi from 'joi';

/**
 * Shortcut for alternatives
 * @param combinations Array of schemas
 * @param setRequired Use all schemas as required
 * @returns Joi.Alternatives.try(your schemas)
 */
export const Alternatives = (combinations: Joi.AnySchema[], setRequired: boolean = false, setOptional: boolean = false): Joi.AlternativesSchema<any> => {
  let schemas = combinations.map((schema) => (setRequired ? schema.required() : schema));
  schemas = combinations.map((schema) => (setOptional ? schema.optional() : schema));

  return Joi.alternatives().try(...schemas);
};
