const ErrorCodes = {
    general: {
        unknown: {
            message: "UNKNOWN_ERROR",
            returnCode: "GEN_ERR_001"
        }
    },
    account: {
        existingAcc: {
            message: "EXISTING_ACCOUNT",
            returnCode: "ACC_ERR_001"
        }
    }
}

export default ErrorCodes;