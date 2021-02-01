import dotenv from 'dotenv';

dotenv.config();

export default {
  PORT: process.env.PORT || 5000,
  MONGODB_URL: process.env.MONGODB_URL || 'mongodb+srv://nltruongvi:TjmWjm824594@cluster0.vzakd.mongodb.net/propzy?retryWrites=true&w=majority',
  JWT_SECRET: process.env.JWT_SECRET || 'somethingsecret',
  //PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID || 'sb',
  //accessKeyId: process.env.accessKeyId || 'accessKeyId',
  //secretAccessKey: process.env.secretAccessKey || 'secretAccessKey',
  SYSTEM_EXTERNAL_EMAIL_USER: process.env.SYSTEM_EXTERNAL_EMAIL_USER || 'xyz',
  SYSTEM_EXTERNAL_EMAIL_PWD: process.env.SYSTEM_EXTERNAL_EMAIL_PWD || 'xyz',
  SYSTEM_EXTERNAL_EMAIL_FROM: process.env.SYSTEM_EXTERNAL_EMAIL_FROM || 'Propzy <vietnam@propzy.asia>'
};
