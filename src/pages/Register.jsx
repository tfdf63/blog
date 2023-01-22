import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className='auth'>
      <h1>Register</h1>
      <form>
        <input required type='test' placeholder='username'></input>
        <input required type='email' placeholder='email'></input>
        <input required type='password' placeholder='password'></input>
        <button>Register</button>
        <p>Ошибки</p>
        <span>
          Есть аккаунт? <Link to='/login'>Войдите</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
