import React, { useEffect } from 'react'
import Styles from '../style/addres.module.css'
import { Input} from '@chakra-ui/react'
import { useContext } from 'react'
import { CartItem } from '../context/CartContext'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const Address = () => {
    const {cart} = useContext(CartItem)
    const [total,setTotal] = useState();
    
    useEffect(()=>{
        setTotal(cart.reduce((acc,curr)=>acc+Number(curr.price),0))
      },[cart])
  return (
    <div style={{height:"auto"}}>
        <div style={{display:"flex",textAlign:"center",width:"100%",justifyContent:"center"}}>
        <p>BAG --------------</p> <p style={{color:"#3d9970 "}}> <b> ADDRESS</b> </p> <p> -------------- PAYMENT</p>
      </div>

      <div className={Styles.line}></div>

      <div className={Styles.dis}>
          <div className={Styles.address}>
            <div className={Styles.info}>
                    <div>
                        <p className={Styles.infohead}><b>CONTACT DETAILS</b></p>
                        <Input placeholder='Name*' color='gray'/>
                        <Input placeholder='Mobile*' color='gray' marginTop='10px'/>
                    </div>

                    <div className={Styles.infopart2}>
                        <p className={Styles.infohead}><b>ADDRESS</b></p>
                        <Input placeholder='Pin Code*' color='gray'/>
                        <Input placeholder='Address (House No,Building , street , Area)*' color='gray' marginTop='10px'/>
                        <Input placeholder='Locality / Town*' color='gray' marginTop='10px'/>
                        <div style={{display:"flex",gap:"10px"}}>
                        <Input placeholder='City / District*' color='gray' marginTop='10px'/>
                        <Input placeholder='State*' color='gray' marginTop='10px'/>
                        </div>
                    </div>

                    <div className={Styles.infopart2}>
                        <p className={Styles.infohead}><b> SAVE ADDRESS AS</b></p>
                        <div style={{display:"flex",gap:"10px"}}>
                          <div className={Styles.place1}>Home</div>
                          <div className={Styles.place}>Work</div>
                        </div>
                    </div>

                        <div style={{display:"flex",gap:"10px"}}>
                            <input type="checkbox" />
                            <p>Make this my default address</p>
                        </div>
            </div> 
                         <button className={Styles.button}><Link to='/check'>ADD ADDRESS</Link></button>
          </div>
          <div className={Styles.part2}>
          <div style={{width:"50%",marginLeft:"20px"}}>
              <p className={Styles.lastHead}>PRICE DETAILS({cart.lenght}Items)</p>
                <div className={Styles.pricedis}>
                  <p>Total MRP</p>
                  <p>₹899</p>
                </div>

              <div className={Styles.pricedis}>
                  <p>Dicount MRP</p>
                  <p>-₹ 360</p>
              </div>
              <div className={Styles.pricedis}>
                  <p>Coupon Discount</p>
                  <p style={{color:"#ff3f6c"}}>Apply Coupon</p>
              </div>

              <div className={Styles.pricedis}>
                  <p>Convenience Fee</p>
                  <div style={{display:"flex",gap:"5px"}}>
                    <p className={Styles.text}>₹99</p>
                    <span>Free</span>
                  </div>
              </div>
              <div className={Styles.contain4}></div>
              <div className={Styles.pricedis}>
                  <p><b>Total Amount</b></p>
                  <p><b> ₹{total}</b></p>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Address