import { CustomError } from './custom-error';

export class DatabaseConnectionError extends CustomError {

    statusCode = 500;
    reason = 'Error connection databse';

    constructor() {
        super('Error connection databse');

        Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
    }

    serializedError() {
        return [
            { message: this.reason }
        ];
    }
}