import React from 'react'
import Styles from '../style/Footer.module.css'
const Footer = () => {
  return (
    <div style={{height:"700px",border:"2px solid"}}>
      <div className={Styles.containTop}>
            <div>
                    <div style={{marginBottom:"30px"}}>
                        <h4 className={Styles.heading}>ONLINE SHOPPING</h4>
                        <div className={Styles.p}>
                            <p>Men</p>
                            <p>Women</p>
                            <p>Kids</p>
                            <p>Home & Living</p>
                            <p>Gift Cards</p>
                            <p>Myntra Insider</p>
                        </div>
                    </div>
                    <div>
                        <h4 className={Styles.heading}>USEFUL LINKS</h4>
                        <div className={Styles.p}>
                            <p>Blog</p>
                            <p>Careers</p>
                            <p>Site Map</p>
                            <p>Corporate Information</p>
                            <p>Whitehat</p>
                        </div>
                    </div>
            </div>
            <div>
                <h4 className={Styles.heading}>CUSTOMER POLICIES</h4>
                <div className={Styles.p}>
                            <p>Contact US</p>
                            <p>FAQ</p>
                            <p>T&C</p>
                            <p>Terms Of Use</p>
                            <p>Track Oders</p>
                            <p>Shipping</p>
                            <p>Cancellation</p>
                            <p>Returns</p>
                            <p>Privacy policy</p>
                            <p>Grievance Officer</p>
                        </div>
            </div>
            <div>
                <div>
                    <h4 className={Styles.heading}>EXPERIENCE MYNTRA APP ON MOBILE</h4>
                    <div className={Styles.playStore}>
                        <img className={Styles.playStoreimg} src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png" alt="" />
                        <img className={Styles.playStoreimg} src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png" alt="" />
                    </div>
                </div>
                <div style={{ marginTop:"20px"}}>
                   <h4 className={Styles.heading}>KEEP IN TOUCH</h4>
                   <div style={{display:"flex"}}>
                        <img className={Styles.social} src="https://constant.myntassets.com/web/assets/img/d2bec182-bef5-4fab-ade0-034d21ec82e31574604275433-fb.png" alt="facebook" />
                        <img className={Styles.social} src="https://constant.myntassets.com/web/assets/img/f10bc513-c5a4-490c-9a9c-eb7a3cc8252b1574604275383-twitter.png" alt="twitter" />
                        <img className={Styles.social} src="https://constant.myntassets.com/web/assets/img/a7e3c86e-566a-44a6-a733-179389dd87111574604275355-yt.png" alt="youtube" />
                        <img className={Styles.social} src="https://constant.myntassets.com/web/assets/img/b4fcca19-5fc1-4199-93ca-4cae3210ef7f1574604275408-insta.png" alt="insta" />
                   </div>
                </div>
            </div>
            <div style={{ marginTop:"20px" }}>
               <div className={Styles.playStore}>
                    <img className={Styles.icon} src="https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png" alt="" />
                    <label className={Styles.label}>
                        <b style={{color:"black"}}>100% ORIGINAL</b> guarantee for all products at myntra.com
                    </label>
               </div>
               <div className={Styles.playStores}>
                    <img className={Styles.icons} src="https://constant.myntassets.com/web/assets/img/ef05d6ec-950a-4d01-bbfa-e8e5af80ffe31574602902427-30days.png" alt="" />
                    <label className={Styles.label}>
                        <b style={{color:"black"}}>Return within 30days</b> of receiving your order
                    </label>
               </div>
            </div>
      </div>

      <div className={Styles.containMid}>
            <div className={Styles.playStore}>
                <h4 className={Styles.heading}>POPULAR SEARCHES</h4>
                <div className={Styles.line}></div>
            </div>
            <div>
                <p className={Styles.searches}>
                Makeup | Dresses For Girls | T-Shirts | Sandals | Headphones | Babydolls | Blazers For Men | Handbags | Ladies Watches | Bags | Sport Shoes | Reebok Shoes | Puma <br/> Shoes | Boxers | Wallets | Tops | Earrings | Fastrack Watches | Kurtis | Nike | Smart Watches | Titan Watches | Designer Blouse | Gowns | Rings | Cricket Shoes | Forever 21 | Eye Makeup | Photo Frames | Punjabi Suits | Bikini | Myntra Fashion Show | Lipstick | Saree | Watches | Dresses | Lehenga | Nike Shoes | Goggles | Bras | Suit | Chinos | Shoes | Adidas Shoes | Woodland Shoes | Jewellery | Designers Sarees
                </p>
            </div>
            <div className={Styles.serachmore} >
                <label>In case of any concer, <b style={{color:"blue"}}>Contact Us</b> </label>
                <label style={{color:"gray"}}>© 2022 www.myntra.com. All rights reserved.</label>
            </div>
      </div>

      <div className={Styles.containMid}>
         <div className={Styles.lines}></div>
      </div>
    </div>
  )
}

export default Footer;