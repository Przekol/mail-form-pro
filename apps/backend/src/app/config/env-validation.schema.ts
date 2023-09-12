import Joi from 'joi';

export const envValidationSchema = Joi.object({
  POSTGRES_USER: Joi.string().required(),
  POSTGRES_PASSWORD: Joi.string().required(),
  POSTGRES_DB: Joi.string().required(),
  POSTGRES_PORT: Joi.number().required(),
  POSTGRES_HOST: Joi.string().required(),
  MAIL_PORT: Joi.number().required(),
  BACKEND_APP_PORT: Joi.number().required(),
});
