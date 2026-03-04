export class AppError extends Error {
    codeStatus: number;
    msg: string;
    returnCode: string | null;

    constructor(msg: string, error: string, codeStatus: number, returnCode: string) {
        super(error);
        this.codeStatus = codeStatus;
        this.msg = msg;
        this.returnCode = returnCode;

        Error.captureStackTrace(this, this.constructor);
    }
}