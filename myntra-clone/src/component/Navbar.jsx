import React from 'react'
import { Link } from 'react-router-dom';
import Styles from '../style/navbar.module.css';
import { BsHeart, BsPerson, BsHandbag } from 'react-icons/bs'
import { BiSearch } from 'react-icons/bi'
const Navbar = () => {
  return (
    <div className={Styles.contain}>
      <div className={Styles.divB}>
        <Link to='/'><img className={Styles.logo} src="https://images.indianexpress.com/2021/01/myntra.png" alt="logo" /></Link>
      </div>
      <div className={Styles.box}>
        <Link className={Styles.link} to='/mens'>MEN</Link>
        <Link className={Styles.link} to='/womens'>WOMEN</Link>
        <p>KIDS</p>
        <p>HOME & LIVING</p>
        <p>BEAUTY</p>
        <p>STUDIO</p>
      </div>
      <div className={Styles.divInpu}>
        <BiSearch/><input type="text" style={{border:"none",outline:"none",backgroundColor:"#f5f5f6"}} placeholder="Search for products,brands and more"/>
      </div>
      <div className={Styles.divprodu}>
        <Link className={Styles.link} to='/login'><BsPerson/><label className={Styles.label}>Profile</label></Link>
        <Link className={Styles.link} to='/wish'><BsHeart/><label className={Styles.label}>Wishlist</label></Link>
        <Link className={Styles.link} to='/bag'><BsHandbag/><label className={Styles.label}>Bag</label></Link>
      </div>
    </div>
  )
}

export default Navbar;