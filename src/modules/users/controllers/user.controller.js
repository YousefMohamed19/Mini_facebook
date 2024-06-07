import { userModel } from "../../../../db/models/user.model.js";
import bcrypt from "bcrypt";

// Implement routes and controllers for user registration, login,and logout. (email must be unique)
export const signUp = async (req, res,next) => {    
    const { username, email, Password } = req.body;
    const password =  bcrypt.hashSync(Password, 10);
    try{
    const newUser = await userModel.create({username, email, password},{
        attributes:{
            exclude:"password"
        }
    })
    return res.status(201).json({message:'user created successfully',data:newUser,success:true});}
    catch(err){
        return res.status(401).json({message:'user already exist',success:false})
    }
}
// login 
export const login = async (req, res,next) => {
    const { email, password } = req.body;
    try{
        const user = await userModel.findOne({where:{email}});
       
        const isPasswordValid = bcrypt.compareSync(password, user.password);
        if(!isPasswordValid){
            return res.status(401).json({message:"invalid credentials",success:false});
        }
        return res.status(200).json({message:`welcome ${user.username}`,success:true});
    }catch(err){
        return res.status(500).json({message:"invalid credentials",success:false});
    }
}

// logout
export const logout = async (req, res,next) => {
    return res.status(200).json({message:"user logged out successfully",success:true});
}