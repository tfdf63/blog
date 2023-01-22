import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='auth'>
      <h1>Login</h1>
      <form>
        <input required type='test' placeholder='username'></input>
        <input required type='password' placeholder='password'></input>
        <button>Login</button>
        <p>Ошибки</p>
        <span>
          Нет аккаунта?<Link to='/register'>Зарегистрируйтесь</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
