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

        //later123 haven't done the hashing of the password yet.
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

export const login = async (username: string, password: string) => {
    try{
        const existingAccount = await account.findOne({username});
        if(!existingAccount) {
            throw new AppError(ErrorCodes.account.invalidLogin.msg, "Invalid username or password.", 400, ErrorCodes.account.invalidLogin.returnCode);
        }

        if(existingAccount.password !== password) {
            throw new AppError(ErrorCodes.account.invalidLogin.msg, "Invalid username or password.", 400, ErrorCodes.account.invalidLogin.returnCode);
        }

        const {password: _, __v, createdAt, updatedAt,...userpayload} = existingAccount.toObject();
        return userpayload;

    }catch(error){
        if(error instanceof AppError) {
            throw error;
        }else{
            throw new AppError(ErrorCodes.general.unknown.msg, error.message, 500, ErrorCodes.general.unknown.returnCode);
        }
    }
}