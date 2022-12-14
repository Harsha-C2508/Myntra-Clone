import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { HiStar } from 'react-icons/hi'
import { BsHandbagFill, BsHeart, BsTruck,BsTag } from 'react-icons/bs'
import Styles from '../style/single.module.css'
import { Tooltip } from '@chakra-ui/react'
import { useContext } from 'react';
import { CartItem } from '../context/CartContext';
import { WishedItem } from '../context/WishContext';

const SingleProd = () => {
  const [item,setItem] = useState({});
  const {cart,setCart} = useContext(CartItem)
  const {wish,setWish} = useContext(WishedItem)
  let {id} = useParams()
  useEffect(()=>{
    if(id){
      axios.get(`https://bookapi-b62i.onrender.com/singleDeatils/${id}`)
    .then((res)=>setItem(res.data))
    .catch((err)=>{
      console.log(err)
    })
    }
  },[id])

  return (
   <div>
    <div style={{ textAlign:"left",width:"97%",margin:"auto" }}>Home/Men Clothing/ <b> Tshirts </b>{`>`} More By <b> {item.name}</b></div>
     <div key={item.id} className={Styles.contain}>
       {/* left part start*/}
          <div className={Styles.left}>
            <img className={Styles.leftimg} src={item.img} alt="" />
            <img className={Styles.leftimg} src={item.logo} alt="" />
            <img className={Styles.leftimg} src={item.left} alt="" />
            <img className={Styles.leftimg} src={item.back} alt="" />
            <img className={Styles.leftimg} src={item.video} alt="" />
          </div>
          {/* left part end*/}

          {/* rigth part start*/}
          <div className={Styles.right}>
              <p className={Styles.name}>{item.name}</p>
              <p className={Styles.dis}>{item.dis}</p>

              <div className={Styles.rate}>
                <p style={{marginLeft:"5px",display:"flex"}}> <b style={{color:"black"}}>{item.star}</b> <HiStar className={Styles.star}/> | </p>
                <p style={{marginLeft:"5px"}}> {item.count}  Ratings</p>
              </div>
              <div className={Styles.line}></div>

              <div style={{display:"flex",gap:"10px",marginTop:"20px"}}>
                <p className={Styles.price}>Rs.{item.price}</p>
                <p className={Styles.strick}>Rs.{item.strickprice}</p>
                <p className={Styles.offer}>({item.offer}% OFF)</p>
              </div>
              <p style={{ fontSize:"14px",color:"#3d9970",marginTop:"5px"}}>inclusive of all taxes</p>
              <div style={{display:"flex",marginTop:"10px"}}>
                <p style={{ fontWeight:"700" }}>SELECT SIZE</p>
                <p style={{ marginLeft:"20px",marginTop:"3px",color:"#ff3f6c",fontSize:"13px" }}>SIZE CHART {`>`} </p>
              </div>
              <div style={{display:"flex",marginTop:"15px",justifyContent:"space-evenly"}}>

                <Tooltip label={
                  <div style={{color:"gray",fontSize:"10px"}}>
                    <p>Garment Measurement:Chest - 37.5in</p>
                    <p>Regular Fit</p>
                    <p>Size worn by the model: M</p>
                    <p>Chest: 38"</p>
                    <p>Height: 5'11"</p>
                  </div>
                } aria-label='A tooltip' bgColor="white" color="black">
                <div  className={Styles.size}>
                  <p style={{marginTop:"5px"}}>S</p>
                </div>
                </Tooltip>

                <Tooltip label={
                  <div style={{color:"gray",fontSize:"10px"}}>
                    <p>Garment Measurement:Chest - 39.5in</p>
                    <p>Regular Fit</p>
                    <p>Size worn by the model: M</p>
                    <p>Chest: 38"</p>
                    <p>Height: 5'11"</p>
                  </div>
                } aria-label='A tooltip' bgColor="white">
                <div  className={Styles.size}>
                  <p style={{marginTop:"5px"}}>M</p>
                </div>
                </Tooltip>

                <Tooltip label={
                  <div style={{color:"gray",fontSize:"10px"}}>
                    <p>Garment Measurement:Chest - 41.5in</p>
                    <p>Regular Fit</p>
                    <p>Size worn by the model: M</p>
                    <p>Chest: 38"</p>
                    <p>Height: 5'11"</p>
                  </div>
                } aria-label='A tooltip' bgColor="white">
                <div  className={Styles.size}>
                  <p style={{marginTop:"5px"}}>L</p>
                </div>
                </Tooltip>

                <Tooltip label={
                  <div style={{color:"gray",fontSize:"10px"}}>
                    <p>Garment Measurement:Chest - 43.5in</p>
                    <p>Regular Fit</p>
                    <p>Size worn by the model: M</p>
                    <p>Chest: 38"</p>
                    <p>Height: 5'11"</p>
                  </div>
                } aria-label='A tooltip' bgColor="white">
                <div  className={Styles.size}>
                  <p style={{marginTop:"5px"}}>XL</p>
                </div>
                </Tooltip>

                <Tooltip label={
                  <div style={{color:"gray",fontSize:"10px"}}>
                    <p>Garment Measurement:Chest - 45.5in</p>
                    <p>Regular Fit</p>
                    <p>Size worn by the model: M</p>
                    <p>Chest: 38"</p>
                    <p>Height: 5'11"</p>
                  </div>
                } aria-label='A tooltip' bgColor="white">
                <div  className={Styles.size}>
                  <p style={{marginTop:"5px"}}>XXL</p>
                </div>
                </Tooltip>
              </div>

              <div className={Styles.btndiv}>
                <button className={Styles.btn1} onClick={()=>{setCart([...cart,item])}}> <BsHandbagFill style={{marginTop:"10px"}}/> <span style={{ fontWeight:"bold",marginTop:"8px" }}>ADD TO CART</span></button>
                <button className={Styles.btn2} onClick={()=>{setWish([...wish,item])}}> <BsHeart style={{marginTop:"10px"}}/> <span style={{ marginTop:"6px",fontWeight:"bold" }}>WISHLIST</span> </button>
              </div>

              <div className={Styles.deli} style={{marginBottom:"20px"}}>
                <h5> <b>DELIVERY OPTIONS</b> </h5>
                <BsTruck style={{marginTop:"5px"}}/>
              </div>
              <div className={Styles.deli} style={{border:"2px solid",marginBottom:"5px",width:"60%",borderRadius:"5px",cursor:"pointer"}}>
                <input style={{padding:"5px",width:"60%",border:"none",outline:"none"}} type="Number" placeholder='Enter pincode'/>
                <p style={{color:"#ff3f6c",textAlign:"right",marginTop:"5px",width:"80px"}}><b>Check</b></p>
              </div>
              <p style={{ fontSize:"13px" }}>Please enter PIN code to check delivery time & Pay on Delivery Availability</p>

              <div style={{ marginTop:"30px" }}>
                <p  style={{ marginTop:"5px" }}>100% Original Products</p>
                <p  style={{ marginTop:"5px" }}>Pay on delivery might be available</p>
                <p  style={{ marginTop:"5px" }}>Easy 30 days returns and exchanges</p>
                <p  style={{ marginTop:"5px" }}>Try & Buy might be available</p>
              </div>

              <div  className={Styles.deli} style={{ marginTop:"30px"}}>
                <p><b>BEST OFFERS </b></p>
                <BsTag style={{ marginTop:"4px"}}/>
              </div>

              <div style={{ marginTop:"10px"}}>
                <p>Best Price: <span style={{color:"orange"}}>Rs. 332</span></p>

                <ul style={{ marginLeft:"30px"}}>
                  <li style={{ fontSize:"15px"}}>Applicable on: Orders above Rs. 599 (only on first purchase)</li>
                  <li>Coupon code: <b>MYNTRA200</b></li>
                  <li style={{ fontSize:"15px"}}>Coupon Discount: Rs. 167 off (check cart for final savings)</li>
                </ul>

                <h3 style={{ marginLeft:"30px",marginTop:"10px",color:"#ff3f6c"}}>View Eligible Products</h3>
              </div>

              <div  className={Styles.deli} style={{ marginTop:"30px"}}>
                <p><b>EMI option available</b></p>
              </div>

              <div style={{ marginTop:"10px"}}>
                <ul style={{ marginLeft:"30px"}}>
                  <li style={{ fontSize:"15px"}}>EMI starting from Rs.24/month</li>
                </ul>
                <h3 style={{ marginLeft:"30px",marginTop:"10px",color:"#ff3f6c"}}>View Plan</h3>
              </div>

              <div className={Styles.line}></div>
          </div>
          {/* rigth part end*/}
        </div>
   </div>
  )
}

export default SingleProd