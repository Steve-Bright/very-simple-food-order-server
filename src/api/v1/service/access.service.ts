import account from "../../../db/model/account";
import { AppError } from "../../../shared/resultHandling/app.error";
import ErrorCodes from "../../../shared/resultHandling/errorCodes";

export const createAccount = async (username: string, password: string) => {
    try {
        const existingAccount = await account.findOne({ username });
        if (existingAccount) {
            throw new AppError(ErrorCodes.account.existingAcc.msg, "Username already exists.", 400, ErrorCodes.account.existingAcc.returnCode);
        }

        const newAccount = new account({
            username,
            password
        })
        await newAccount.save();
        return newAccount;
    } catch (error) {
        if (error instanceof AppError) {
            throw error;
        }else{
            throw new AppError(ErrorCodes.general.unknown.msg, error.message, 500, ErrorCodes.general.unknown.returnCode);
        }
    }
};