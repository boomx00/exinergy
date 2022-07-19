require('dotenv').config()

const UserService = require('../services/UserService');

class UserController {
  //  Handle local register
  async createUser(req, res, next) {
    try {
   
      const result = await UserService.createUser(req.body);
      console.log(result);
      if (result == "USER_CREATE_SUCCESSFULL") {
        res.status(201).send({
          'status': 'REGISTER_SUCCESS',
          'msg': 'Successfully register a new account.'
        })
      }
    }
    catch (err) {
      if (err.code == "ER_DUP_ENTRY") {
        res.status(500).send({
          'status': 'REGISTER_FAILED',
          'msg': 'Failed to register a new account, account already exists',
          'err': err
        })
      } else {
        res.status(500).send({
          'status': 'REGISTER_FAILED',
          'msg': 'Failed to register a new account.',
          'err': err
        })
      }
    }
  }

  // Handle local login
  async userLogin(req, res, next) {
    try {

      const result = await UserService.userLogin(req.body.email, req.body.password);
      if (result == "WRONG_PASSWORD") {
        res.status(401).send({
          'status': 'LOGIN_FAILED',
          'msg': 'Failed to login, password is incorrect please try again.'
        })
      } else if (result == "USER_NOT_EXISTS") {
        res.status(401).send({
          'status': 'LOGIN_FAILED',
          'msg': 'Failed to login, email is not exists please try again.'
        })
      } else {
        res.cookie('refreshToken', result.refreshToken,{
          httpOnly: true,
          maxAge:24 * 60 * 60 * 1000
        })
        res.status(201).send({
          'status': 'LOGIN_SUCCESS',
          'msg': 'Successfully login, token provided.',
          'token': 'barrier ' + result.accessToken,
          'user_id': result.userId
        })
      }
    } catch (err) {
      res.status(500).send({
        'status': 'LOGIN_FAILED',
        'msg': 'Login failed, server error.',
        'err': err
      })
    }
  }

  async userLogout(req,res){
    const refreshToken = req.cookies.refreshToken
    if(!refreshToken) return res.sendStatus(204)
    const result = await UserService.userLogout(req.body.id, refreshToken)
    if(result == "LOGOUT SUCCESS"){
      res.clearCookies('refreshToken')
      res.status(200).send({
        'status': 'LOGOUT_SUCCESS',
        'msg': 'Successfully LOGOUT.',
      })
    }
  }

  // Handle user edit profile
  async editUser(req, res, next) {
    try {
      const result = await UserService.editUser(req.body);
      if (result == "EDIT_SUCCESS") {
        res.status(201).send({
          'status': 'EDIT_SUCCESS',
          'msg': 'Successfully edit the account.'
        })
      }
    }
    catch (e) {
      console.log(e)
      res.status(500).send({
        'status': 'EDIT_FAILED',
        'msg': 'Edit failed, server error.',
      })
    }
  }

  async getOwnUser(req,res,next){
    try{
      const userId = res.locals.id
      const result = await UserService.getOwnUser(userId);
      res.status(201).send({
        'status':'USER_GET',
        'message': result
      })
    }catch(err){
      throw(err)
    }
  }
}

module.exports = new UserController();