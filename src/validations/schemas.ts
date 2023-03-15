import Joi from 'joi';

const productSchema = Joi.object({
  name: Joi.string().min(3).required(),
  amount: Joi.string().min(3).required(),
});

const userSchema = Joi.object({
  username: Joi.string().min(3).required(),
  vocation: Joi.string().min(3).required(),
  level: Joi.number().integer().min(1).required(),
  password: Joi.string().min(8).required(),
});

const productsIdsSchema = Joi.array().items(Joi.number().required()).required().messages({
  'array.base': '"productsIds" must be an array',
  'array.includesRequiredUnknowns': '"productsIds" must include only numbers',
});

const joi = {
  productSchema,
  userSchema,
  productsIdsSchema,
};

export default joi;
