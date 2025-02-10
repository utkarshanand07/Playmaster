class ApiResponse {
    constructor(statusCode, data, message = "Success"){        // used to structure API responses in a consistent way
        this.statusCode = statusCode                               // HTTP status code
        this.data = data                                           // Response data payload
        this.message = message                                     // Response message, success as default
        this.success = statusCode < 400                            // Boolean indicating success status code
    }
}

export { ApiResponse }