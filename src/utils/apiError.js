class apiError extends Error {
    constructor(
        statusCode,
        message = "Somthing Went Wrong",
        errors = [],
        statck = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.errors = errors
        this.data = ""
        this.message = "message"
        this.success = false
        this.stack = statck
    }
}

export {apiError}