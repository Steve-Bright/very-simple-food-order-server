class ResultModel {
    codeStatus: number;
    success: boolean;
    msg: string; 
    returnCode: string | null; 
    data: any | null;
    error: any | null;

    constructor(codeStatus, success, msg, data =null, returnCode = null,error = null) {
        this.codeStatus = codeStatus;
        this.success = success;
        this.msg = msg;
        this.returnCode = returnCode;
        this.data = data;
        this.error = error;
    }
}

export const Result = (codeStatus, success, msg, data = null, returnCode = null,error = null) => {
    return new ResultModel(codeStatus, success, msg, data, returnCode, error);
}

export const successExecute = (res, msg, data, codeStatus = 200, returnCode = null, error = null) => {
    let result = new ResultModel(codeStatus, true, msg, data, returnCode, error);
    return res.status(result.codeStatus).json(result);
}

export const errorExecute = (res, msg, error, data = null, codeStatus = 400, returnCode = null) => {
    let result = new ResultModel(codeStatus, false, msg, data, returnCode, error);
    return res.status(result.codeStatus).json(result);
}

export const unknownError = (res, error) => {
    let result = new ResultModel(500, false, "An unknown error occurred", null, null, error.message);
    return res.status(result.codeStatus).json(result);
}

export const wrongRoute = (res) => {
    let result = new ResultModel(404, false, "Route not found", null, null, null);
    return res.status(result.codeStatus).json(result);
}