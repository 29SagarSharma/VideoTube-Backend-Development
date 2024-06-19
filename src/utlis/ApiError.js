class ApiError extends Error{
    constructor(
        statusCode,
        message="Something went wrong",
        errors =[],
            statck =""
    ){
        super(message)
        this.statusCode = statusCodethis.data =nullthis.message=messagethis.sucess=false;
        this.errors= errors

        if(statck){
            this.stack = statck
        }else{
            Error.captureStackTrace(this,this.constructor)
        }

    }
}

export {ApiError}