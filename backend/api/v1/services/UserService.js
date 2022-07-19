const db = require('../db/db');
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

require('dotenv').config()

class UserService {
    async createUser(userData) {
        try {
            // //let email = req.body.email; Kalo mau ngeparse body kaya di bawah aja
            const { email, password,name, phone_number} = userData;
            const hash = await bcryptjs.hash(password, 10);
            await db.transaction(async (t) => {
                const id = await db('users').transacting(t).insert({
                    email: email,
                    password: hash
                });

                await db('user_profiles').transacting(t).insert({
                    user_id: id,
                    name: name,
                    phone_number: phone_number
                });
                // await db('user_profiles').transacting(t).insert({
                //     user_id: id,
                //     first_name: firstName,
                //     last_name: lastName,
                //     phone_number: phoneNum
                // });
            })
            return "USER_CREATE_SUCCESSFULL"
        } catch (err) {
            console.log(err);
            throw err;
        }
    }

    async userLogin(email, password) {
        try {
            const user = await db('users').where('email', email)

            // if user exist
            if (user[0] != null) {
                const isSame = await bcryptjs.compare(password, user[0].password);
                if(!isSame) return "WRONG_PASSWORD";
                const accessToken = jwt.sign({
                                        userId: user[0].id,
                                        email: user[0].email
                                }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });
                                
                const refreshToken = jwt.sign({
                        userId: user[0].id,
                        email: user[0].email
                }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '1d' });  
                
                await db('users').where({id: user[0].id}).update({refresh_token: refreshToken});
                
                var data = {
                    accessToken: accessToken,
                    refreshToken: refreshToken,
                    userId: user[0].id
                }
                return data
              

            } else {
                return "USER_NOT_EXISTS";
            }

        }
        catch (e) {
            console.log(e);
            throw e;
        }
    }
    
    async userLogout(id,refreshToken){
        try{
            const user = await db('users').where({id:id}).where({refresh_token: refreshToken})
            if(!user[0]) return "204"
            await db('users').where({id:id}).where({refresh_token: refreshToken}).update({refresh_token: null})
            return "LOGOUT SUCCESS"
        }
        catch(e){

        }
    }

    async editUser(userData) {
        try {
            const { user_id, firstName, lastName, phoneNum } = userData;

            // // let user = await db('users').where('email',email)
            await db.transaction(async (t) => {
                const changeUser = await db('user_profiles').transacting(t).where('user_id', '=', user_id).update({
                    first_name: firstName,
                    last_name: lastName,
                    phone_number: phoneNum
                })
            })
            return "EDIT_SUCCESS";
        } catch (err) {
            throw err;
        }
    }

    async getOwnUser(userId){
        try{
            let result = ""
            await db.transaction(async(t)=>{
                const user = await db('users').transacting(t).where({id: userId})
                const userDetails = await db('user_profiles').transacting(t).where({user_id:userId})
                result = {...userDetails[0], email: user[0].email}
            })
            return result;
        }catch(err){
            throw (err)
        }
    }
}

module.exports = new UserService();