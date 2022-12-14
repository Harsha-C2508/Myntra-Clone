import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import Styles from '../style/navbar.module.css';
import { BsHeart, BsPerson, BsHandbag } from 'react-icons/bs'
import { BiSearch } from 'react-icons/bi'
import { CartItem } from '../context/CartContext';
const Navbar = () => {
  const {cart} = useContext(CartItem)
  return (
    <div className={Styles.contain}>
        <div style={{display: "flex",justifyContent: "space-between",width: "100%"}}>
              <div className={Styles.divB}>
              <Link to='/'><img className={Styles.logo} src="https://images.indianexpress.com/2021/01/myntra.png" alt="logo" /></Link>
            </div>
            <div className={Styles.box}>
              <Link className={Styles.link} to='/mens'>MEN</Link>
              <Link className={Styles.link} to='/mens'>WOMEN</Link>
              <p>KIDS</p>
              <p>HOME & LIVING</p>
              <p>BEAUTY</p>
              <p>STUDIO</p>
            </div>
            <div className={Styles.divInpu}>
            <BiSearch className={Styles.icon}/><input className={Styles.input} type="text" />
            </div>
      
            <div className={Styles.divprodu}>
              <Link className={Styles.link} to='/login'><BsPerson/><label className={Styles.label}>Profile</label></Link>
              <Link className={Styles.link} to='/wish'><BsHeart/><label className={Styles.label}>Wishlist</label></Link>
              <Link className={Styles.link} to='/bag'><p className={Styles.cartLength}><BsHandbag/><p className={Styles.cart}><p style={{marginTop:"-3px"}}>{cart.length}</p></p></p><label className={Styles.label} style={{marginLeft:"-10px"}}>Bag</label></Link>
            </div>
     </div>
    </div>
  )
}

export default Navbar;