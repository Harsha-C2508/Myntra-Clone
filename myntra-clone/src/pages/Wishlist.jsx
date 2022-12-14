import React from 'react'
import { useContext } from 'react'
import { CartItem } from '../context/CartContext'
import { WishedItem } from '../context/WishContext'
import Styles from '../style/wish.module.css'
import { GrFormClose } from 'react-icons/gr'
const Wishlist = () => {
  const {wish} = useContext(WishedItem)
  const {cart,setCart} = useContext(CartItem)
  return (
    <div style={{width:"90%",margin:"auto",height:"800px"}}>
      <p style={{ textAlign:"left" }}> <b>My Wishlist </b>{wish.length} item</p>
         
        <div className={Styles.contain}>
             {wish.map((p)=>(
              
               <div style={{ marginTop:"30px",border:".1px solid gray" }}>
                    <div className={Styles.cross} onClick={()=>setCart(wish.filter((c)=> c.id !== p.id))}><GrFormClose/></div>
                    <img src={p.img} alt="" />
                    <p style={{ marginTop:"10px"}}>{p.dis}</p>
                    <div className={Styles.price}>
                      <b style={{marginLeft:"20px"}}>Rs.{p.price}</b>
                      <p className={Styles.strick}>Rs.{p.strickprice}</p>
                      <p className={Styles.offer}>({p.offer}% OFFER)</p>
                    </div>
                    <div style={{width:"100%",border:'.1px solid gray'}}></div>
                    <div style={{height:"40px"}}>
                      <button className={Styles.btn} onClick={()=>{setCart([...cart,p])}}>MOVE TO BAG</button>
                    </div>
               </div>
             ))}
        </div>
    </div>
  )
}

export default Wishlist