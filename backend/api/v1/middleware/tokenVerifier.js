const jwt = require('jsonwebtoken')
const db = require('../db/db')





const tokenValidation = async (req, res, next) => {
    const token = req.headers["x-access-token"].split(' ')[1];
    if (token) {
        req.token = token
        try {
            const decodedToken = await tokenVerification(req.token, next)
            if (!decodedToken) {
                res.status(401).send({
                    "STATUS": "AUTH_UNAUTHORIZED_TOKEN",
                    "MESSAGE": "User does not have token."
                })
            } else if (decodedToken.expired) {
                res.status(401).send({
                    "STATUS": "AUTH_UNAUTHORIZED_TOKEN",
                    "MESSAGE": "User token is expired please re-login."
                })
            } else {
                res.locals.id = decodedToken.userId
                next();
            }

        } catch (err) {

            res.status(401).send({
                "STATUS": "AUTH_UNAUTHORIZED_TOKEN",
                "MESSAGE": "User token is error, please re-try again."
            })
        }
    } else {

        res.status(401).send({
            
            "STATUS": "AUTH_UNAUTHORIZED_TOKEN",
            "MESSAGE": "User does not have token."
        })
    }
}

const tokenVerification = async ( token,next)=>{
    try {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
        return { ...decoded, expired: false}
    } catch (err) {
        if (err) {
            if (err.name == "TokenExpiredError") {
                const decoded = jwt.decode(token);
                if (decoded) {
                    return { ...decoded, expired: true }
                } else return false
            } else return false
        }
    }
}
// const tokenValidation = async (req, res, next) => {
//     const token = req.headers["x-access-token"]
//     if (token) {
//         req.token = token
//         try {
//             const decodedToken = verifyToken(req.token, next)
//             if (!decodedToken) {
//                 res.status(401).send({
//                     "STATUS": "AUTH_UNAUTHORIZED_TOKEN",
//                     "MESSAGE": "User does not have token."
//                 })
//             } else if (decodedToken.expired) {
//                 res.status(401).send({
//                     "STATUS": "AUTH_UNAUTHORIZED_TOKEN",
//                     "MESSAGE": "User token is expired please re-login."
//                 })
//             } else {
//                 let role = "";
//                 await db.transaction(async(t)=>{
//                     role = await db('user_roles').transacting(t).where('user_id','=',decodedToken.data.userId)
//                 })
//                 res.locals.level = role[0].type_id
//                 res.locals.id = decodedToken.data.userId;
//                 next();
//             }

//         } catch (err) {
//             res.status(401).send({
//                 "STATUS": "AUTH_UNAUTHORIZED_TOKEN",
//                 "MESSAGE": "User token is error, please re-try again."
//             })
//         }
//     } else {
//         res.status(401).send({
//             "STATUS": "AUTH_UNAUTHORIZED_TOKEN",
//             "MESSAGE": "User does not have token."
//         })
//     }
// }
module.exports = tokenValidation