import account from "../../db/model/account";

const ErrorCodes = {
    general: {
        unknown: {
            msg: "UNKNOWN_ERROR",
            returnCode: "GEN_ERR_001"
        },
        
        routeNotFound: {
            msg: "ROUTE_NOT_FOUND",
            returnCode: "GEN_ERR_002"
        },

        unauthorized: {
            msg: "UNAUTHORIZED",
            returnCode: "GEN_ERR_003"
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
        },

        notFound: {
            msg: "ACCOUNT_NOT_FOUND",
            returnCode: "ACC_ERR_002"
        },

        invalidLogin: {
            msg: "INVALID_LOGIN_CREDENTIALS",
            returnCode: "ACC_ERR_003"
        }
    }
}

export default ErrorCodes;