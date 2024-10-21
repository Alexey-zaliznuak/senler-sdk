import Joi from 'joi';

interface EnumObject {
  [key: string]: string;
}

/**
 * Arrow function for creating a Joi schema that validates enum values
 * @param enumObject enumerate object
 * @returns Joi.Alternatives.try(your enum)
 */
export const OneOfEnumerate = (enumObject: EnumObject): Joi.StringSchema => {
  return Joi.string().valid(...Object.values(enumObject));
};

/**
 * Arrow function for creating a Joi schema that validates enum values
 * @param enumObject enumerate object
 * @returns Joi.Alternatives.try(your enum)
 */
export const ListOfEnumerate = (enumObject: EnumObject): Joi.ArraySchema => {
  return Joi.array().items(OneOfEnumerate(enumObject));
};
