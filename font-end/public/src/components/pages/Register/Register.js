import React, { useRef, useState } from "react"
import { Link, useNavigate } from 'react-router-dom';
import classes from "./Register.module.css"

const Register = () =>{
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const confirmPasswordInputRef = useRef();
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const submitHandler = (event) => {
        event.preventDefault();
        console.log(emailInputRef.current.value, passwordInputRef.current.value);
        if(passwordInputRef.current.value !== confirmPasswordInputRef.current.value){
          setError('Mật khẩu xác thực không khớp!');
        } else {
          navigate('/')
        }
    }

    return (
      <div className={classes.container}>
        <div className={classes.background_image}></div>
        <section className={classes.auth}>
          <h1 className={classes.title}>Register</h1>
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
            <div className={classes.control}>
              <label htmlFor='confirmPassword'>Xác nhận mật khẩu</label>
              <input 
                type='password' 
                id='confirmPassword' 
                required 
                ref={confirmPasswordInputRef} 
              />
            </div>
            <p className={classes.error}>{error ? `Lỗi: ${error}` : ''}</p>
            <div className={classes.actions}>
              <button
                type='submit'
                className={classes.button}
              >
                Xác nhận đăng ký
              </button>
              <Link
                className={classes.button_login}
                to="/"
              >
                Quay về
              </Link>
            </div>
          </form>
        </section>
      </div>
    );
}
export default Register;