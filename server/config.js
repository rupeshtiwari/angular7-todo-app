const envProps = process.env;
module.exports = {
  port: envProps.PORT || 8080,
  env: envProps.NODE_ENV || 'development'
};
