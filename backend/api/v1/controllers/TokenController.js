const jwt = require('jsonwebtoken')
const TokenService = require('../services/TokenService');
class TokenController{
    async refreshToken (req,res){
        try{
            const refreshToken = req.cookies.refreshToken;
            if(!refreshToken) return res.sendStatus(401);
            const result = await TokenService.refreshToken(req.body.id,refreshToken)
            if (result == "403") res.sendStatus(403);
            res.status(201).send({
                'status': 'Token Refreshed',
                'token': result
              })
        }
        catch(e){
            console.log(e)
        }
    }
}

module.exports = new TokenController();