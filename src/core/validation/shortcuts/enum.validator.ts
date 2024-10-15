import Joi from 'joi';

type EnumObject = { [key: string]: string };
/**
 * Стрелочная функция для создания Joi схемы, которая валидирует значения enum
 * @param enumObj - перечисление (enum)
 * @returns Joi.Alternatives.try(your enum)
 */
export const ListOfEnumerate = (enumObject: EnumObject): Joi.ArraySchema => {
  return Joi.array().items(Joi.string().valid(...Object.values(enumObject)));
}
