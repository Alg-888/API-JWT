import jwt from "jsonwebtoken";

export const requireToken = (req, res, next) => {
    try {
        
        let token = req.headers?.authorization
        if (!token) 
        throw new Error("No Bearer");
        
        token= token.split(" ")[1];
        const {uid} = jwt.verify(token, process.env.JWT_SECRET)
        
        req.uid= uid
        
        next()

    } catch (error) {
        const TokenVerificationErrors ={
            "nncalid signature": "La firma de JWT no es valida",
            "jwt expired":"JWT expirado",
            "invalid token": "Token no valido",
            "No Bearer": "Utiliza fomato Bearer",
        };
        return res
        .status(401)
        .json({error: TokenVerificationErrors[error.message]})
    }
}