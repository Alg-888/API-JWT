import express from "express";
import {infoUser, login,register} from "../controllers/auth.controller.js";
import { body } from "express-validator";
import { validationResultExpress } from "../middlewares/validationResultExpress.js";
import { requireToken } from "../middlewares/requireToken.js";
const router = express.Router()

router.post(
    "/register",
[
    body("email", "Formato de email incorecto")
    .trim()
    .isEmail()
    .normalizeEmail(),
    body("password","Formato de password debe tener minimo 6 caracteres")
    .trim()
    .isLength({min:6}),
    body("password","Formato de password incorecto").custom(
        (value,{req})=>{
        if(value !== req.body.repassword){
            throw new Error('No coinciden las contraseñas')
        }
        return value
    })

    
],  
    validationResultExpress,
    register
);

router.post("/login",[
    body("email", "Formato de email incorecto")
    .trim()
    .isEmail()
    .normalizeEmail(),
    body("password","Formato de password debe tener minimo 6 caracteres")
    .trim()
    .isLength({min:6}),
],
    validationResultExpress,
    login)

   router.get('/protected',requireToken, infoUser) 
    
export default router;