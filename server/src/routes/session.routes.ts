import { Router } from 'express';
import knex from '../database/connection';

import AuthenticateUserService from '../services/AuthenticateUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  try{
    const { username, password } = request.body;

    console.log(username, password);

    const authenticateUser = new AuthenticateUserService();

    const { user, token } = await authenticateUser.execute({username, password});

    return response.json({user, token});

  }catch(err) {
    return response.status(500).json({ error: err.message });
  }
});

export default sessionsRouter;