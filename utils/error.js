class AppError extends Error{
  constructor(message, statusCode){
    super(message);
    this.statusCode = statusCode;

    Error.capturesStackTrace(this,this.constructor);

  }
}

module.exports = AppError;