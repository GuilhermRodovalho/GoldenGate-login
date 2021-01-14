import React from 'react';
import logo from '../../Assets/logo.png';
import LoggedPage from '../loggedpage/LoggedPage';
// import CSS from 'csstype';

import { Link } from 'react-router-dom';

import './initial-page.css';
// import '../../../node_modules/bootstrap/compiled/bootstrap.css';
// import '../../../node_modules/bootstrap/compiled/style.css';

// comentário para mudar o sha1

// const backStyle: CSS.Properties = {
//   padding: '1rem',
//   margin: '5rem',
//   width: '60%',
//   alignSelf: 'center'
// }

const InitialPage = () => {
  const myStorage = window.localStorage;

  if (myStorage.getItem('logged'))
    return <LoggedPage />;

  else {
    return (

      <div className="principal">
        <div className="container">
          <img className='logop' src={logo} alt="logo da Golden Gate" />

          <div className="botoes">
            <Link to='login'>
              <button className="botao">Log in</button>
            </Link>
            <Link to='register'>
              <button className="botao">sign up</button>
            </Link>
          </div>

        </div>
      </div>

    );
  }



}

export default InitialPage;