import { CustomError } from './custom-error';

export class NotFoundError extends CustomError {

    statusCode = 404;
    reason = 'Not Found!';

    constructor() {
        super('route not found');

        Object.setPrototypeOf(this, NotFoundError.prototype);
    }
    serializedError() {

        return [
            { message: this.reason }
        ];
    }
}