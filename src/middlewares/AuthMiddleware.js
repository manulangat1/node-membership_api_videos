import { User } from "../database/models";
import jwt from 'jsonwebtoken'
class AuthMiddleware {
    static async isAuth(req,res,next){
        try{
            const token = req.header('Authorization').replace('Bearer ','')
            const data = jwt.verify(token,'secret')
            console.log(data)
    
            const user = await User.findOne({where:{email:data.email}})
            if (!user){
                res.status(401).json({
                    success:false,
                    message:'Invalid token'
                })
            } else{
                req.user = user 
                req.token = token 
                next()
            }
        } catch (err){
            console.log(`Error:${err}`.red.underline)
            res.status(401).json({
                success:false,
                message:'You seem to be logged out, kindly retry again later'
            })
        }
    }
}
export default AuthMiddleware