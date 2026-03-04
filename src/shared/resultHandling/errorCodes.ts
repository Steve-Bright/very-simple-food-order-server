const ErrorCodes = {
    general: {
        unknown: {
            msg: "UNKNOWN_ERROR",
            returnCode: "GEN_ERR_001"
        },
        
        routeNotFound: {
            msg: "ROUTE_NOT_FOUND",
            returnCode: "GEN_ERR_002"
        }
    },
    backend: {
        bodyMissing: {
            msg: "REQUEST_BODY_MISSING",
            returnCode: "BE_ERR_001"
        }
    },
    account: {
        existingAcc: {
            msg: "EXISTING_ACCOUNT",
            returnCode: "ACC_ERR_001"
        }
    }
}

export default ErrorCodes;