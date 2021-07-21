const env = process.env;

export default {
  port: Number(env.PORT || 1078),
  host: env.HOST || 'localhost',
  isDev: env.NODE_ENV !== 'production'
};