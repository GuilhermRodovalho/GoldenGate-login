import { response } from 'express';
// import Knex from 'knex';
import knex from '../database/connection';
import { sign } from 'jsonwebtoken';
import authConfig from '../config/auth';

interface Request {
  username: String;
  password: String;
}

interface Res {
  user: object;
  token: string;
}

class AuthenticateUserService {
  public async execute({ username, password }: Request): Promise<Res>{
    
    const rawuser = await knex('user').where({ username: username });
    if(rawuser.length === 0){
      throw new Error('incorrect email/password combination.');
    }

    const user = rawuser[0];

    const passwordMatched = password === user.password; 

    if(!passwordMatched){
      throw new Error('incorrect email/password combination.');
    }

    delete user.password;

    const token = sign({}, authConfig.jwt.secret, {
      subject: user.username,
      expiresIn: authConfig.jwt.expiresIn
    });

    return{
      user,
      token,
    }
  }
}

export default AuthenticateUserService;
