class ApiError extends Error {
    constructor(                               // used to handle API errors in a structured and consistent way
        statusCode,                                    // HTTP status code for the error
        message= "Something went wrong",               // Default error message
        errors = [],                                   // Additional error details
        stack = ""                                     // Optional stack trace
    ){
        super(message)                                 // Call the parent Error class constructor
        this.statusCode = statusCode
        this.data = null                               // No data in an error response
        this.message = message
        this.success = false;
        this.errors = errors

        if (stack) {                           // Set stack trace if provided, otherwise capture automatically
            this.stack = stack
        } else{
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export {ApiError}