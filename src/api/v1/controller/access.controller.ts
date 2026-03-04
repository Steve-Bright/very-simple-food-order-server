import { createAccount, login } from "../service/access.service";
import { AppError } from "../../../shared/resultHandling/app.error";
import { successExecute, unknownError, errorExecute} from "../../../shared/resultHandling/result"
import { checkIfBodyExists } from "../../../shared/inputHandling/input.handler";
import { genToken } from "../../../shared/util";

const AccountController = {
    createAccount: async (req, res) => {
        try {
            checkIfBodyExists(req);
            const { username, password } = req.body;
            const newAccount = await createAccount(username, password);
            successExecute(res, "Account created successfully", newAccount, 201);
        } catch (error) {
            errorExecute(res, error.msg, error.message, null, error.codeStatus, error.returnCode);
        }
    },

    login: async(req, res) => {
        try{
            checkIfBodyExists(req);
            const { username, password } = req.body;
            const account = await login(username, password);
            let token = await genToken({id: account._id, role: account.role});
            successExecute(res, "Login successful", { account, token }, 200);   
        }catch(error){
            errorExecute(res, error.msg, error.message, null, error.codeStatus, error.returnCode);
        }
    }
}

export default AccountController;