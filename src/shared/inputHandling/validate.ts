import _jwt from "jsonwebtoken";
import { env } from "../env";
import ErrorCodes from "../resultHandling/errorCodes";
import { errorExecute } from "../resultHandling/result";

// export const validateToken = () => {
//   return async(req, res, next) => { 
//       let token
//       try {
//         if(req.headers.authorization){
//             token = req.headers.authorization.split(" ")[1];
//         }
//         else{
//             errorExecute(res, ErrorCodes.general.unauthorized.msg, "Unauthorized to access the service.", null, 401, ErrorCodes.general.unauthorized.returnCode)
//         }
        
//         if(token){
//           const tokenUser = _jwt.verify(token, env.jwtSecret);
//           req.user = tokenUser

//         }
//       } catch (error) {
//           let resultFormat
//           if(error.name == "TokenExpiredError"){
//               resultFormat = failure(ErrorCodes.tokenExpired.message, 401, new Error("Token expired. " + error.message), ErrorCodes.tokenExpired.code)
//           }else{
//               resultFormat = failure(ErrorCodes.unauthorized.message, 401, new Error("Unauthorized to access. " + error.message), ErrorCodes.unauthorized.code)
//           }
          
//           executeResult(resultFormat, res)
//       }
  
//   }
// }


// export const validateBody = (schema) => {
//     return (req, res, next) => {
//       const options = {
//       errors: {
//         wrap: {
//           label: false
//         }
//       }
//     };
//       let result = schema.validate(req.body || {}, options);
  
//       if (result.error) {

//         let errorMsg = result.error.details[0].message;
//         executeResult(failure(ErrorCodes.inputInvalid.message, 400, new Error(errorMsg), ErrorCodes.inputInvalid.code), res);
//       } else {
//         next();
//       }
//     };
//   };