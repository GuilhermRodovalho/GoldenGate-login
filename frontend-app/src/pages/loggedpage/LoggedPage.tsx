import React from 'react';
import logo from '../../Assets/logo.png';
import { useHistory } from 'react-router-dom';

import './logged-page.css';


// const HandleClickButton = () => {

//   window.localStorage.removeItem('logged');
//   history.goBack();
// }

const LoggedPage = () => {
  const history = useHistory();
  
  return (
    <div className="principal">
      <div className="card">
        <h1 className="header">Welcome</h1>
        <img className="logo" src={logo} alt="logo da Golden Gate"/>
        <button className="botao" onClick={() => {
          window.localStorage.removeItem('logged');
          history.push('/');
        }}>Log Out</button>
        
      </div>
    </div>
    
  );
}

export default LoggedPage;