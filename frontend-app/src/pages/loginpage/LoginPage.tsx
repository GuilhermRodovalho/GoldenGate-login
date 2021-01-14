import React, { ChangeEvent, FormEvent, useState } from 'react';

import logo1 from '../../Assets/logo1.png';
import logo from '../../Assets/logo.png';

import { useHistory } from 'react-router-dom';

import './login-page.css';
import api from '../../services/api';

const LoginPage = () => {

  const [FormData, setFormData] = useState({
    email: "",
    password: ""
  });

  const history = useHistory();

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {

    const {name, value} = event.target;

    setFormData({...FormData, [name]: value });
  }

  async function handleSubmit(event: FormEvent){
    try {
      event.preventDefault();

      const { email, password } = FormData;


      const data = {
        username: email,
        password
      }

      // console.log(data);

      const res = await api.post('/sessions', data);

      console.log(res);
      
      window.localStorage.setItem('logged', 'true');

      history.push('/');

      // alert("Login deu bom");
    

    }catch(err) {
      console.log(err);

      alert(err);
    }

  }

  return (
    <div className="loginpage">
      <header>
        <img src={logo1} alt="logo da Golden Gate Tecnologia" className='logo1'/>
      </header>

      <div className="align">
        <div className="container">

          <img src={logo} alt="logo da Golden Gate Tecnologia" className= 'logo2'/>

          <form onSubmit={handleSubmit}>

            <fieldset>
              <div className="camposindiv">
                <label htmlFor="email">Username</label>
                <input 
                type="emil"
                name="email"
                id="email"
                onChange={handleInputChange}
                />
              </div>
            </fieldset>

            <fieldset>
              <div className="camposindiv">
                <label htmlFor="password">Password</label>
                <input 
                type="password"
                name="password"
                id="password"
                onChange={handleInputChange}
                />
              </div>
            </fieldset>
            
            <button type="submit" className="botao">
              Log In
            </button>

            <p className="question">Not registered? <a href="/register">Register</a></p>

          </form>

        </div>
        
      </div>
      
    </div>
  );
}

export default LoginPage;