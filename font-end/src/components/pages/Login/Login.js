import React, { useRef, useState } from "react"
import { Link, useNavigate } from 'react-router-dom';
import classes from "./Login.module.css"

const dummyAccount = {
  email: 'admin@gmail.com',
  password: 'admin'
}
const Login = () =>{
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const submitHandler = (event) => {
        event.preventDefault();
        console.log(emailInputRef.current.value, passwordInputRef.current.value);
        if(passwordInputRef.current.value === dummyAccount.password && emailInputRef.current.value === dummyAccount.email){
          navigate('/home')
        } else {
          setError('Tài khoản không chính xác!');
        }
    }

    return (
      <div className={classes.container}>
        <div className={classes.background_image}></div>
        <section className={classes.auth}>
          <h1 className={classes.title}>Login</h1>
          <form onSubmit={submitHandler}>
            <div className={classes.control}>
              <label htmlFor='email'>Email</label>
              <input 
                type='email' 
                id='email' 
                required 
                ref={emailInputRef} 
              />
            </div>
            <div className={classes.control}>
              <label htmlFor='password'>Mật khẩu</label>
              <input 
                type='password' 
                id='password' 
                required 
                ref={passwordInputRef} 
              />
            </div>
            <p className={classes.error}>{error ? `Lỗi: ${error}` : ''}</p>
            <div className={classes.actions}>
              <Link
                className={classes.button_regis}
                to="/register"
              >
                Đăng ký
              </Link>
              <button
                type='submit'
                className={classes.button}
              >
                Đăng nhập
              </button>
            </div>
          </form>
        </section>
      </div>
    );
}
export default Login;