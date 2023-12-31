export class AppError extends Error {
    constructor(message, statusCode){
        super(message);

        this.statusCode = statusCode;
        this.status = `statusCode`.startsWith('4') ? 'error' : 'fail';
        this.isOperationel = true;

        Error.captureStackTrace(this, this.constructor);
    }
}