import { AppError } from "../resultHandling/app.error"
import ErrorCodes from "../resultHandling/errorCodes"

export const checkIfBodyExists = (req) => {
    if(!req.body){
        throw new AppError(ErrorCodes.backend.bodyMissing.msg, "Request body is missing.", 400, ErrorCodes.backend.bodyMissing.returnCode);
    }
}