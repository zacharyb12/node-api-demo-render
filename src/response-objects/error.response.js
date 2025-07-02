export class ErrorResponse {
    constructor(message , statusCode = 400){
        this.success = false;
        this.message = message;
        this.statusCode = statusCode;
    }
}

export class NotFoundErrorResponse extends ErrorResponse {
    constructor( message = 'Not Found') {
        super(message , 404)
    }
}