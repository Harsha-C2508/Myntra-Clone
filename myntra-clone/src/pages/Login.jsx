import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext';
import {useNavigate} from "react-router-dom"
import Styles from '../style/login.module.css'


const Login = () => {
  const [creds,setCreds]=useState({});
  const navigate = useNavigate();
  const handleChange=(e)=>{
    const{name,value} = e.target

    setCreds({
      ...creds,
      [name]:value
    })
  }
  const {Login} = useContext(AuthContext)

  const handlesubmit=(e)=>{
    e.preventDefault();
    Login()
    navigate("/mens")
  }
  return (
    <div style={{marginBottom:"40px"}}>
      <div className={Styles.contain}>
        <img src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2022/7/21/06359e97-9076-4235-8a11-cff9e1d735101658407686030-Frame-92--1-.jpg" alt="" />

        <div>
        <form className={Styles.box}
        >
          <input
             className={Styles.input}
             name="email"
             type="email"
             placeholder='Enter Your Email*'
             onChange={handleChange}
              />
              <br />
          <input 
              className={Styles.input}
              name="email"
              type="password" 
              placeholder='Enter a strong Password'
              onChange={handleChange}
             />
             <br />
          <button type='submit' onClick={handlesubmit} className={Styles.btn}>Create a Acount</button>
        </form>
        </div>
      </div>
    </div>
  )
}

export default Login