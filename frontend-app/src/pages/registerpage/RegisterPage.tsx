import React, { ChangeEvent, FormEvent, useState } from 'react';
import logo1 from '../../Assets/logo1.png';
import logo from '../../Assets/logo.png';
import api from '../../services/api';
import './register-page.css';
import { useHistory } from 'react-router-dom';

interface Res { 
  success: string;
}

const RegisterPage = () => {
  
  const history = useHistory();

  const [FormData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
  });

  async function handleSubmit(event: FormEvent){
    try {
      event.preventDefault();

      const { name, email, username, password } = FormData;


      const data = {
        name,
        email,
        username,
        password
      }

      console.log(data);

      const res = await api.post<Res>('/register', data);
      console.log(res.data.success);

      switch(res.data.success){
        case("true"):
          alert("Email registered");
          history.push('/');
          break;
        case("false"):
          alert("Este email já está em uso, escolha um email válido");
          Error("Esse email já está em uso");
          break;
        case("error"):
          Error("internal server error");
          alert("Internal server error");
          break;
        default:
          break;
      }

    }catch(err) {
      console.log(err);

      alert(err);
    }

  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {

    const {name, value} = event.target;
  
    setFormData({...FormData, [name]: value });
  }

  return (
    <div className="registerpage">
      <header>
        <img src={logo1} alt="logo da Golden Gate Tecnologia" className='logo1'/>
      </header>

      <div className="align">
        <div className="card">

          <img src={logo} alt="logo da Golden Gate Tecnologia" className= 'logo2'/>

          <form onSubmit={handleSubmit}>

            
            <fieldset>
              <div className="camposindiv">
                <label htmlFor="name">Name</label>
                <input 
                type="text"
                name="name"
                id="name"
                onChange={handleInputChange}
                />
              </div>
            </fieldset>

            <fieldset>
              <div className="camposindiv">
                <label htmlFor="email">E-mail</label>
                <input 
                type="email"
                name="email"
                id="email"
                onChange={handleInputChange}
                />
              </div>
            </fieldset>

            <fieldset>
              <div className="camposindiv">
                <label htmlFor="username">Username</label>
                <input 
                type="text"
                name="username"
                id="username"
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
              Register
            </button>

          </form>

        </div>
        
      </div>
    </div>
  );
}

export default RegisterPage;