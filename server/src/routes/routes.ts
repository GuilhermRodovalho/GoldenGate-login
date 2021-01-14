import express from 'express';
import knex from '../database/connection';
const routes = express.Router();

import sessionsRouter from './session.routes';
import ensureAuthenticated from '../middleware/ensureAuthenticated';
//usar esse middleware pra verificar se o usuário está loggado

routes.use('/sessions', sessionsRouter);

routes.get('/users', async (request, response) => {
  const { username } = request.query;

  const usertest = await knex('user').where({username: username});

  
  console.log(usertest);

  return response.json({ success: "true" });
});

routes.post('/register', async (request, response) => {
  const {
    name,
    email,
    username,
    password
  } = request.body;

  const checkusersexist = await knex('user').where({username: username});

  if(checkusersexist.length) {
    console.log("usuário já existe");
    return response.json({ success: "false" });
  }

  try{
    const user = await knex('user').insert({
      name,
      email,
      username,
      password
    });
  
    const usertest = await knex('user').where({username: username});
  
    usertest[0].name
    console.log(usertest);

    return response.json({ success: "true" });

  }catch(err) {
    return response.json({ success: "error" });
  }
});

export default routes;