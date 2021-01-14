import React from 'react';
import { Route, BrowserRouter} from 'react-router-dom';

import InitialPage from './pages/initialpage/InitialPage';
import LoginPage from './pages/loginpage/LoginPage';
import RegisterPage from './pages/registerpage/RegisterPage';

const Routes = () => {
  return(
  <BrowserRouter>
    {/* <Route component={LoggedPage} path='/' exact/> */}
    <Route component={InitialPage} path='/' exact/>
    <Route component={LoginPage} path='/login'/>
    <Route component={RegisterPage} path='/register'/>
  </BrowserRouter>
);
  
}

export default Routes;