import { User } from "../models/User.js";
import jwt from "jsonwebtoken"
import { generateToken } from "../utils/tokenManager.js";

export const register= async(req,res)=> {
    const {email,password} = req.body;
    try {
        
        let user = await User.findOne({email})
        if(user) throw {code:11000}

        user= new User({ email, password })
        await user.save();
        
        return res.status(201).json({ ok:true})
    } catch (error) {
        console.log(error.message)
        if (error.code === 11000) {
            return res.status(400).json({ error: "Ya existe este usuario"})
        }
        return res.status(500).json({ error: "Error en el servidor"})
    }
}

export const login= async(req,res)=> {
    try {
            const {email,password} = req.body;

            let user = await User.findOne({email})
            if (!user) 
                return res.status(403).json({error:"No existe este usuario"})
            
            const respuestaPassword = await user.comparePassword(password)
            if (!respuestaPassword) 
                 return res.status(403).json({error:"Contraseña incorrecta"})
            
            
            const {token, expiresIn} = generateToken(user.id)

            return res.json({token, expiresIn});
        }catch (error) {
            console.log(error)
        }
        
    } 

export const infoUser = async(req, res) => {
    try {
        const user = await User.findById(req.uid).lean()
        return res.json({user})

    } catch (error) {
        return res.status(500).json({error:"ERROR DEL SERVER"})
    }
}  