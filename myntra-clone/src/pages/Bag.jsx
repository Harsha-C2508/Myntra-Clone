import React, { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { CartItem } from '../context/CartContext'
import { Link } from 'react-router-dom'
import {AiOutlineDown} from 'react-icons/ai'
import Styles from '../style/bag.module.css'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button
} from '@chakra-ui/react'
import { WishedItem } from '../context/WishContext'
import { TbBadge } from 'react-icons/tb'
import { GoTag } from 'react-icons/go'
const Bag = () => {
  const {cart,setCart} = useContext(CartItem)
  const [total,setTotal] = useState();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const {wish,setWish} = useContext(WishedItem)
  useEffect(()=>{
    setTotal(cart.reduce((acc,curr)=>acc+Number(curr.price),0))
  },[cart])
  
  return (
    <div className={Styles.top}>
      <div style={{display:"flex",textAlign:"center",width:"100%",justifyContent:"center"}}>
        <p style={{color:"#3d9970 "}}> <b>BAG</b> </p> <p>-------------- ADDRESS -------------- PAYMENT</p>
      </div>
      <div className={Styles.contain}>
          <div className={Styles.contain1}>

             <div style={{width:"90%",margin:"auto"}}>
                    <div className={Styles.box1}>
                      <p style={{ marginLeft:"20px",marginTop:"10px" }} > <b>Check delivery time & survices</b> </p>
                      <button className={Styles.btn} style={{border:".1px solid #ff3f6c"}}>ENTER PIN CODE</button>
                    </div>
             </div>

             <div style={{width:"90%",margin:"auto"}}>
                    <div className={Styles.box12}>
                      <p style={{ marginLeft:"20px",marginTop:"10px" }} > <b>Available offer</b> </p>
                      <p style={{ marginLeft:"20px",marginTop:"5px"}}>5% Unlimited  Cashback on Flipkart Axis Bank Credit card TCA</p>
                      <button style={{ marginLeft:"20px",marginTop:"5px",display:"flex" }} className={Styles.btn}>Show more <AiOutlineDown style={{marginTop:"7px"}}/></button>
                    </div>
             </div>

             <div style={{width:"90%",margin:"auto"}}>
                    <div className={Styles.box1}>
                      <div  style={{display:"flex"}}>
                          <img src="https://constant.myntassets.com/checkout/assets/img/ship-charge.png" alt="" />
                          <p style={{ marginLeft:"5px",marginTop:"10px",fontSize:"12px" }} >Login to <b>avoid convenience fee</b> on your first order</p>
                      </div>
                     <Link to='/profile'> <button className={Styles.btn}>LOGIN NOW</button></Link>
                    </div>
             </div>

              <div style={{display:"flex",width:"90%",margin:"auto",marginTop:"20px",gap:"10px",justifyContent:"space-between"}}>
                 <div style={{display:"flex"}}>
                    <input type="checkbox" style={{ backgroundColor:"#ff3f6c" }} checked/>
                    <p  style={{marginTop:"5px"}}><b>{cart.length}/{cart.length} ITEM SELETED</b></p>
                 </div>
                  <div style={{display:"flex"}}>
                  <div>
                     <Button onClick={onOpen} bg="white" marginTop='-5px' fontSize='10px'>Remove</Button>
                     {cart.map((p)=>(
                      <Modal isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent>
                          <ModalHeader>Remove {cart.length} items</ModalHeader>
                          <ModalCloseButton />
                          <ModalBody>
                            Are you sure you want to remove {cart.length} items from bag
                          </ModalBody>
    
                          <ModalFooter>
                              <Button bg='white'variant='ghost' mr={3} onClick={()=>setCart(cart.filter((c)=> c.id !== p.id))}>
                              Remove
                             </Button>
                            <Button variant='ghost'bg='white' onClick={()=>{setWish([...wish,p])}}>Move to Wishlist</Button>
                          </ModalFooter>
                        </ModalContent>
                      </Modal>
                       ))}
                     </div> |
                     <div>
                     <Button onClick={onOpen} bg="white" marginTop='-5px' fontSize='10px'>MOVE TO WISHLIST</Button>
                     {cart.map((p)=>(
                      <Modal isOpen={isOpen} onClose={onClose} >
                        <ModalOverlay />
                        <ModalContent>
                          <ModalHeader>Remove {cart.length} items</ModalHeader>
                          <ModalCloseButton />
                          <ModalBody>
                            Are you sure you want to move {cart.length} items from bag
                          </ModalBody>
    
                          <ModalFooter>
                              <Button bg='white'variant='ghost' mr={3} onClick={onClose}>
                              CANCEL
                             </Button>
                            <Button variant='ghost'bg='white' onClick={()=>{setWish([...wish,p])}} >Move to Wishlist</Button>
                          </ModalFooter>
                        </ModalContent>
                      </Modal>
                       ))}
                     </div>
                  </div>
              </div>

              <div>
                {cart.map((p)=>(
                  <div style={{display:"flex",gap:"10px",width:"90%",margin:"auto",border:"1px solid gray"}}>
                        <div style={{marginTop:"10px",marginBottom:"10px",marginLeft:"10px"}}>
                        <img className={Styles.img} src={p.img} alt="" />
                      </div>
                      <div style={{ textAlign:"left" }}>
                        <div style={{display:"flex",marginTop:"10px"}}>
                          <b>{p.name}</b> 
                          <div style={{marginLeft:"250px",cursor:"pointer"}} onClick={()=>setCart(cart.filter((c)=> c.id !== p.id))}>X</div>
                        </div>
                        <p>{p.dis}</p>
                        <p style={{ fontSize:"10px",color:"gray" }}>Sold by:Supercom Net</p>
                        <div style={{display:"flex",justifyContent:"space-between",width:"50%"}}> 
                          <div>
                            Size:
                            <select>
                              <option value="s">S</option>
                              <option value="m">M</option>
                              <option value="l">L</option>
                              <option value="xl">XL</option>
                              <option value="xxl">XXL</option>
                            </select>
                          </div>
                          <div>
                            Qty:
                            <select>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                              <option value="6">6</option>
                              <option value="7">7</option>
                              <option value="8">8</option>
                              <option value="9">9</option>
                              <option value="10">10</option>
                            </select>
                          </div>
                        </div>
                        <div className={Styles.price}>
                          <b style={{marginLeft:"20px"}}>₹ {p.price}</b>
                          <p className={Styles.strick}>₹ {p.strickprice}</p>
                          <p className={Styles.offer}>{p.offer}% OFFER</p>
                        </div>
                      </div>
                  </div>
                ))}
                <div style={{display:"flex",border:".1px solid gray",height:"30px",width:"90%",margin:"auto",justifyContent:"space-between"}}>
                  <div style={{display:"flex"}}>
                    <TbBadge style={{marginTop:"5px"}}/>
                    <a href="/wish">Add more from wishlist</a>
                  </div>
                  <div style={{marginRight:"5px"}}>{`>`}</div>
                </div>
              </div>
          </div>
          <div className={Styles.contain3}></div>
          <div className={Styles.contain2}>
            <p style={{fontSize:"13px",marginTop:"20px",marginLeft:"20px",fontWeight:"bold"}}>DONATE FOR COVID-19 RELIEF</p>

            <div className={Styles.contain2sec}>
              <input type="checkbox" />
              <span>Help India fight COVID-19</span>
            </div>

            <div className={Styles.contain2sec}>
               <div className={Styles.money}> ₹10</div>
               <div  className={Styles.money}> ₹50</div>
               <div  className={Styles.money}> ₹100</div>
               <div  className={Styles.money}> other</div>
            </div>
            <p style={{width:'90%',margin:"auto", marginTop:"20px",marginBottom:"10px"}}>Coupons</p>
            <div  className={Styles.contain2sec} style={{ justifyContent:"space-between",width:"80%"}}>
              <div style={{display:"flex"}}>
                <GoTag style={{ marginTop:"10px" }}/>
                <p>Apply Coupons</p>
              </div>
              <div>
                <button className={Styles.btn} style={{border:".1px solid #ff3f6c"}}>Apply Now</button>
              </div>
            </div>
            <div className={Styles.contain4}></div>
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
              <button className={Styles.orderbtn}><Link to='/address'>PLACE ORDER</Link></button>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Bag