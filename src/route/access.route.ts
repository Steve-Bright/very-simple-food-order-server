import express from "express";
import AccountController from "../api/v1/controller/access.controller";

let subName = "account"

const router = express.Router();

router.post(`/${subName}/create-account`, AccountController.createAccount);

export default router;