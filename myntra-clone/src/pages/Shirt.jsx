import React, { useEffect, useState } from 'react'
import Styles from '../style/shirt.module.css'
import { BsSearch } from 'react-icons/bs'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react'
import { productDetals } from '../api/singleProdAPI'


const Shirt = () => {
  const [details,setDetails] = useState([])
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState(false)

  useEffect(()=>{
    setLoading(true)
    setError(false)
    productDetals()
    .then((res)=>{
      setDetails(res.data)
      setLoading(false)
    })
    .catch((err)=>{
      setLoading(false)
      setError(true)
    })
  },[]);
  return (
    <div>
      <div>
        {loading}
        {error}
      </div>
         <div className={Styles.toppart}>
            <p>Home / Clothing / Men Clothing / <b> Apparel</b></p>
            <p className={Styles.dis}><b style={{color:"black"}}>Apparel</b> - 5511 items</p>
         </div>
         <div className={Styles.contain} >
               {/* left part with filters */}
            <div className={Styles.left}>
                <div className={Styles.leftheading}>
                  <p className={Styles.leftTop1}>FILTERS</p>
                  <p className={Styles.leftTop2}>CLEAR ALL</p>
                </div>
                <div>

                    <div className={ Styles.cate }>
                      <div className={Styles.leftheading}>
                        <p className={Styles.filhead}>CATEGORIES</p>
                        <p className={ Styles.iconbor }><BsSearch className={Styles.icon}/></p>
                      </div>
                      <div>
                        <p style={{ display:"flex",width:"90%",margin:"auto",marginBottom:"7px",marginTop:"5px"}}>
                          <input type="checkbox" />
                          <p style={{ marginLeft:"5px",fontSize:"14px"}}>Tshirts <span style={{ color:"grey" }}>(2283)</span></p>
                        </p>

                        <p style={{ display:"flex",width:"90%",margin:"auto",marginBottom:"7px"}}>
                          <input type="checkbox" />
                          <p style={{ marginLeft:"5px",fontSize:"14px"}}>Shirts <span style={{ color:"grey" }}>(1280)</span></p>
                        </p>

                        <p style={{ display:"flex",width:"90%",margin:"auto",marginBottom:"7px"}}>
                          <input type="checkbox" />
                          <p style={{ marginLeft:"5px",fontSize:"14px"}}>Jeans <span style={{ color:"grey" }}>(615)</span></p>
                        </p>

                        <p style={{ display:"flex",width:"90%",margin:"auto",marginBottom:"7px"}}>
                          <input type="checkbox" />
                          <p style={{ marginLeft:"5px",fontSize:"14px"}}>Jackets <span style={{ color:"grey" }}>(331)</span></p>
                        </p>

                        <p style={{ display:"flex",width:"90%",margin:"auto",marginBottom:"7px"}}>
                          <input type="checkbox" />
                          <p style={{ marginLeft:"5px",fontSize:"14px"}}>Sweatshirts <span style={{ color:"grey" }}>(328)</span></p>
                        </p>

                        <p style={{ display:"flex",width:"90%",margin:"auto",marginBottom:"7px"}}>
                          <input type="checkbox" />
                          <p style={{ marginLeft:"5px",fontSize:"14px"}}>Track Pants <span style={{ color:"grey" }}>(247)</span></p>
                        </p>

                        <p style={{ display:"flex",width:"90%",margin:"auto",marginBottom:"7px"}}>
                          <input type="checkbox" />
                          <p style={{ marginLeft:"5px",fontSize:"14px"}}>Shorts <span style={{ color:"grey" }}>(214)</span></p>
                        </p>

                        <p style={{ display:"flex",width:"90%",margin:"auto",marginBottom:"7px"}}>
                          <input type="checkbox" />
                          <p style={{ marginLeft:"5px",fontSize:"14px"}}>Trousers <span style={{ color:"grey" }}>(134)</span></p>
                        </p>

                        <p style={{ marginLeft:"-60px",fontSize:"14px",marginBottom:"10px",color:"#ff3f6c" }}>+ 2 more</p>
                      </div>
                    </div>

                    <div className={ Styles.cate } style={{marginTop:"0px"}}>
                      <div className={Styles.leftheading}>
                        <p className={Styles.filhead}>BRAND</p>
                        <p className={ Styles.iconbor }><BsSearch className={Styles.icon}/></p>
                      </div>

                      <div>

                        <p style={{ display:"flex",width:"90%",margin:"auto",marginBottom:"7px"}}>
                          <input type="checkbox" />
                          <p style={{ marginLeft:"5px",fontSize:"14px"}}>Roadster <span style={{ color:"grey" }}>(8754)</span></p>
                        </p>

                        <p style={{ display:"flex",width:"90%",margin:"auto",marginBottom:"7px"}}>
                          <input type="checkbox" />
                          <p style={{ marginLeft:"5px",fontSize:"14px"}}>Allen Solly <span style={{ color:"grey" }}>(5283)</span></p>
                        </p>

                        <p style={{ display:"flex",width:"90%",margin:"auto",marginBottom:"7px"}}>
                          <input type="checkbox" />
                          <p style={{ marginLeft:"5px",fontSize:"14px"}}>SOJANYA <span style={{ color:"grey" }}>(4912)</span></p>
                        </p>

                        <p style={{ display:"flex",width:"90%",margin:"auto",marginBottom:"7px"}}>
                          <input type="checkbox" />
                          <p style={{ marginLeft:"5px",fontSize:"14px"}}>Flying Machine <span style={{ color:"grey" }}>(4587)</span></p>
                        </p>

                        <p style={{ display:"flex",width:"90%",margin:"auto",marginBottom:"7px"}}>
                          <input type="checkbox" />
                          <p style={{ marginLeft:"5px",fontSize:"14px"}}>DEYANN <span style={{ color:"grey" }}>(4375)</span></p>
                        </p>

                        <p style={{ display:"flex",width:"90%",margin:"auto",marginBottom:"7px"}}>
                          <input type="checkbox" />
                          <p style={{ marginLeft:"5px",fontSize:"14px"}}>Louis Philippe <span style={{ color:"grey" }}>(4359)</span></p>
                        </p>

                        <p style={{ display:"flex",width:"90%",margin:"auto",marginBottom:"7px"}}>
                          <input type="checkbox" />
                          <p style={{ marginLeft:"5px",fontSize:"14px"}}>Mast & Harbour <span style={{ color:"grey" }}>(4280)</span></p>
                        </p>

                        <p style={{ display:"flex",width:"90%",margin:"auto",marginBottom:"7px"}}>
                          <input type="checkbox" />
                          <p style={{ marginLeft:"5px",fontSize:"14px"}}>WROGN <span style={{ color:"grey" }}>(4181)</span></p>
                        </p>

                        <p style={{ marginLeft:"-60px",fontSize:"14px",marginBottom:"10px",color:"#ff3f6c" }}>+ 970 more</p>

                      </div>
                    </div>

                    <div className={ Styles.cate } style={{marginTop:"0px"}}>
                      <div className={Styles.leftheading}>
                        <p className={Styles.filhead}>PRICE</p>
                        <p className={ Styles.iconbor }><BsSearch className={Styles.icon}/></p>
                      </div>

                      <div>

                        <p style={{ display:"flex",width:"90%",margin:"auto",marginBottom:"7px"}}>
                          <input type="checkbox" />
                          <p style={{ marginLeft:"5px",fontSize:"14px"}}>Rs. 314 to Rs. 851 <span style={{ color:"grey" }}>(749)</span></p>
                        </p>

                        <p style={{ display:"flex",width:"90%",margin:"auto",marginBottom:"7px"}}>
                          <input type="checkbox" />
                          <p style={{ marginLeft:"5px",fontSize:"14px"}}>Rs. 851 to Rs. 1388 <span style={{ color:"grey" }}>(502)</span></p>
                        </p>

                        <p style={{ display:"flex",width:"90%",margin:"auto",marginBottom:"7px"}}>
                          <input type="checkbox" />
                          <p style={{ marginLeft:"5px",fontSize:"14px"}}>Rs. 1388 to Rs. 1925 <span style={{ color:"grey" }}>(59)</span></p>
                        </p>

                        <p style={{ display:"flex",width:"90%",margin:"auto",marginBottom:"7px"}}>
                          <input type="checkbox" />
                          <p style={{ marginLeft:"5px",fontSize:"14px"}}>Rs. 1925 to Rs. 2462 <span style={{ color:"grey" }}>(22)</span></p>
                        </p>
                      </div>
                    </div>

                    <div className={ Styles.cate } style={{marginTop:"0px"}}>
                      <div className={Styles.leftheading}>
                        <p className={Styles.filhead}>COLOR</p>
                        <p className={ Styles.iconbor }><BsSearch className={Styles.icon}/></p>
                      </div> 
                      <div>

                        <p style={{ display:"flex",width:"90%",margin:"auto",marginBottom:"7px"}}>
                          <input type="checkbox" />
                          <p style={{backgroundColor:"navy",height:"10px",width:"10px",borderRadius:"50%",padding:"6px",marginTop:"4px",marginLeft:"5px"}}></p>
                          <p style={{ marginLeft:"5px",fontSize:"14px"}}>Navy Blue <span style={{ color:"grey" }}>(256)</span></p>
                        </p>

                        <p style={{ display:"flex",width:"90%",margin:"auto",marginBottom:"7px"}}>
                          <input type="checkbox" />
                          <p style={{backgroundColor:"Black",height:"10px",width:"10px",borderRadius:"50%",padding:"6px",marginTop:"4px",marginLeft:"5px"}}></p>
                          <p style={{ marginLeft:"5px",fontSize:"14px"}}>Black <span style={{ color:"grey" }}>(246)</span></p>
                        </p>

                        <p style={{ display:"flex",width:"90%",margin:"auto",marginBottom:"7px"}}>
                          <input type="checkbox" />
                          <p style={{backgroundColor:"blue",height:"10px",width:"10px",borderRadius:"50%",padding:"6px",marginTop:"4px",marginLeft:"5px"}}></p>
                          <p style={{ marginLeft:"5px",fontSize:"14px"}}>Blue <span style={{ color:"grey" }}>(201)</span></p>
                        </p>

                        <p style={{ display:"flex",width:"90%",margin:"auto",marginBottom:"7px"}}>
                          <input type="checkbox" />
                          <p style={{border:".5px solid ",backgroundColor:"whitesmoke",height:"10px",width:"10px",borderRadius:"50%",padding:"6px",marginTop:"4px",marginLeft:"5px"}}></p>
                          <p style={{ marginLeft:"5px",fontSize:"14px"}}>White <span style={{ color:"grey" }}>(139)</span></p>
                        </p>

                        <p style={{ display:"flex",width:"90%",margin:"auto",marginBottom:"7px"}}>
                          <input type="checkbox" />
                          <p style={{backgroundColor:"grey",height:"10px",width:"10px",borderRadius:"50%",padding:"6px",marginTop:"4px",marginLeft:"5px"}}></p>
                          <p style={{ marginLeft:"5px",fontSize:"14px"}}>Grey <span style={{ color:"grey" }}>(58)</span></p>
                        </p>

                        <p style={{ display:"flex",width:"90%",margin:"auto",marginBottom:"7px"}}>
                          <input type="checkbox" />
                          <p style={{backgroundColor:"oliva",height:"10px",width:"10px",borderRadius:"50%",padding:"6px",marginTop:"4px",marginLeft:"5px"}}></p>
                          <p style={{ marginLeft:"5px",fontSize:"14px"}}>Oliva <span style={{ color:"grey" }}>(54)</span></p>
                        </p>

                        <p style={{ display:"flex",width:"90%",margin:"auto",marginBottom:"7px"}}>
                          <input type="checkbox" />
                          <p style={{backgroundColor:"red",height:"10px",width:"10px",borderRadius:"50%",padding:"6px",marginTop:"4px",marginLeft:"5px"}}></p>
                          <p style={{ marginLeft:"5px",fontSize:"14px"}}>Red <span style={{ color:"grey" }}>(51)</span></p>
                        </p>

                        <p style={{ marginLeft:"-60px",fontSize:"14px",marginBottom:"10px",color:"#ff3f6c" }}>+ 24 more</p>
                      </div>
                    </div>

                    <div className={ Styles.cate } style={{marginTop:"0px"}}>
                      <div className={Styles.leftheading}>
                        <p className={Styles.filhead}>DISCOUNT RANGE</p>
                      </div>

                      <div>
                        <p style={{ display:"flex",width:"90%",margin:"auto",marginBottom:"7px"}}>
                          <input type="radio" />
                          <p style={{ marginLeft:"5px",fontSize:"14px"}}>20% and above </p>
                        </p>

                        <p style={{ display:"flex",width:"90%",margin:"auto",marginBottom:"7px"}}>
                          <input type="radio" />
                          <p style={{ marginLeft:"5px",fontSize:"14px"}}>30% and above </p>
                        </p>

                        <p style={{ display:"flex",width:"90%",margin:"auto",marginBottom:"7px"}}>
                          <input type="radio" />
                          <p style={{ marginLeft:"5px",fontSize:"14px"}}>40% and above </p>
                        </p>

                        <p style={{ display:"flex",width:"90%",margin:"auto",marginBottom:"7px"}}>
                          <input type="radio" />
                          <p style={{ marginLeft:"5px",fontSize:"14px"}}>50% and above </p>
                        </p>

                        <p style={{ display:"flex",width:"90%",margin:"auto",marginBottom:"7px"}}>
                          <input type="radio" color='blue' />
                          <p style={{ marginLeft:"5px",fontSize:"14px"}}>60% and above </p>
                        </p>
                      </div>

                    </div>
                </div>
            </div>
            {/* right part with filters */}
              <div className={Styles.right}>
                 {/* right toppart */}
                      <div style={{ display:"flex",justifyContent:"space-between", width:'95%', margin:"auto" }}> 
                          {/* filter part1 of right */}
                            <div>
                              <div style={{ display:"flex" }}>
                                  <div>
                                  <Accordion allowToggle>
                                    <AccordionItem>
                                      <h2>
                                        <AccordionButton border="none" borderRadius='15px' width='170px'>
                                          <Box flex='1' textAlign='left' border="none" borderRadius='15px'>
                                            Bundles
                                          </Box>
                                          <AccordionIcon />
                                        </AccordionButton>
                                      </h2>
                                      <AccordionPanel pb={2}>
                                      <p style={{ display:"flex",width:"90%",margin:"auto",marginBottom:"7px"}}>
                                        <input type="checkbox" />
                                        <p style={{ marginLeft:"5px",fontSize:"14px"}}> Single Style</p>
                                      </p>
                                      </AccordionPanel>
                                    </AccordionItem>
                                  </Accordion>

                                  </div>

                                  <div>
                                  <Accordion allowToggle>
                                    <AccordionItem>
                                      <h2>
                                        <AccordionButton border="none" borderRadius='15px' width='250px'>
                                          <Box flex='1' textAlign='left'>
                                            Country Of Origin
                                          </Box>
                                          <AccordionIcon />
                                        </AccordionButton>
                                      </h2>
                                      <AccordionPanel pb={2} display='flex'>
                                      <p style={{ display:"flex",width:"90%",margin:"auto",marginBottom:"7px"}}>
                                        <input type="checkbox" />
                                        <p style={{ marginLeft:"5px",fontSize:"14px"}}> All Countries </p>
                                      </p>
                                      <p style={{ display:"flex",width:"90%",margin:"auto",marginBottom:"7px"}}>
                                        <input type="checkbox" />
                                        <p style={{ marginLeft:"5px",fontSize:"14px"}}> India </p>
                                      </p>
                                      </AccordionPanel>
                                    </AccordionItem>
                                  </Accordion>
                                  </div>

                                  <div>
                                  <Accordion allowToggle>
                                    <AccordionItem>
                                      <h2>
                                        <AccordionButton border="none" borderRadius='15px'>
                                          <Box flex='1' textAlign='left'>
                                            Size
                                          </Box>
                                          <AccordionIcon />
                                        </AccordionButton>
                                      </h2>
                                      <AccordionPanel pb={2}>
                                        <div style={{display:"flex"}}>
                                          <p style={{ display:"flex",width:"90%",margin:"auto",marginBottom:"7px", marginRight:"10px"}}>
                                            <input type="checkbox" />
                                            <p style={{ marginLeft:"5px",fontSize:"14px"}}> 28 </p>
                                          </p>

                                          <p style={{ display:"flex",width:"90%",margin:"auto",marginBottom:"7px", marginRight:"10px"}}>
                                            <input type="checkbox" />
                                            <p style={{ marginLeft:"5px",fontSize:"14px"}}> 30 </p>
                                          </p>

                                          <p style={{ display:"flex",width:"90%",margin:"auto",marginBottom:"7px", marginRight:"10px"}}>
                                            <input type="checkbox" />
                                            <p style={{ marginLeft:"5px",fontSize:"14px"}}> 32 </p>
                                          </p>

                                          <p style={{ display:"flex",width:"90%",margin:"auto",marginBottom:"7px", marginRight:"10px"}}>
                                            <input type="checkbox" />
                                            <p style={{ marginLeft:"5px",fontSize:"14px"}}> 34 </p>
                                          </p>

                                          <p style={{ display:"flex",width:"90%",margin:"auto",marginBottom:"7px", marginRight:"10px"}}>
                                            <input type="checkbox" />
                                            <p style={{ marginLeft:"5px",fontSize:"14px"}}> 36 </p>
                                          </p>

                                        </div>

                                        <div style={{display:"flex"}}>
                                          <p style={{ display:"flex",width:"90%",margin:"auto",marginBottom:"7px", marginRight:"10px"}}>
                                            <input type="checkbox" />
                                            <p style={{ marginLeft:"5px",fontSize:"14px"}}> 38 </p>
                                          </p>

                                          <p style={{ display:"flex",width:"90%",margin:"auto",marginBottom:"7px" , marginRight:"10px"}}>
                                            <input type="checkbox" />
                                            <p style={{ marginLeft:"5px",fontSize:"14px"}}> 39 </p>
                                          </p>
                                          <p style={{ display:"flex",width:"90%",margin:"auto",marginBottom:"7px", marginRight:"10px"}}>
                                            <input type="checkbox" />
                                            <p style={{ marginLeft:"5px",fontSize:"14px"}}> 40 </p>
                                          </p>

                                          <p style={{ display:"flex",width:"90%",margin:"auto",marginBottom:"7px", marginRight:"10px"}}>
                                            <input type="checkbox" />
                                            <p style={{ marginLeft:"5px",fontSize:"14px"}}> 42 </p>
                                          </p>

                                          <p style={{ display:"flex",width:"90%",margin:"auto",marginBottom:"7px", marginRight:"10px"}}>
                                            <input type="checkbox" />
                                            <p style={{ marginLeft:"5px",fontSize:"14px"}}> 44 </p>
                                          </p>
                                        </div>

                                        <div style={{display:"flex"}}>

                                        <p style={{ display:"flex",width:"90%",margin:"auto",marginBottom:"7px", marginRight:"10px"}}>
                                            <input type="checkbox" />
                                            <p style={{ marginLeft:"5px",fontSize:"14px"}}> 46 </p>
                                          </p>

                                          <p style={{ display:"flex",width:"90%",margin:"auto",marginBottom:"7px", marginRight:"10px"}}>
                                            <input type="checkbox" />
                                            <p style={{ marginLeft:"5px",fontSize:"14px"}}> L </p>
                                          </p>
                                        <p style={{ display:"flex",width:"90%",margin:"auto",marginBottom:"7px", marginRight:"10px"}}>
                                            <input type="checkbox" />
                                            <p style={{ marginLeft:"5px",fontSize:"14px"}}> M </p>
                                          </p>

                                          <p style={{ display:"flex",width:"90%",margin:"auto",marginBottom:"7px" , marginRight:"10px"}}>
                                            <input type="checkbox" />
                                            <p style={{ marginLeft:"5px",fontSize:"14px"}}> S </p>
                                          </p>

                                          <p style={{ display:"flex",width:"90%",margin:"auto",marginBottom:"7px", marginRight:"10px"}}>
                                            <input type="checkbox" />
                                            <p style={{ marginLeft:"5px",fontSize:"14px"}}> XL </p>
                                          </p>

                                          <p style={{ display:"flex",width:"90%",margin:"auto",marginBottom:"7px", marginRight:"10px"}}>
                                            <input type="checkbox" />
                                            <p style={{ marginLeft:"5px",fontSize:"14px"}}> XXL </p>
                                          </p>
                                          </div>
                                      </AccordionPanel>
                                    </AccordionItem>
                                  </Accordion>
                                  </div>
                              </div>
                              <div style={{display:"flex",marginTop:"10px"}}>
                                <p style={{ border:".5px solid", borderRadius:"10px",marginRight:"10px",padding:"5px"}}>SINGLE X</p>
                                <p style={{ border:".5px solid", borderRadius:"10px",padding:"5px"}}>WROGN ACTIVE X</p>
                              </div>
                            </div>

                            {/* filter part2 of right */}
                            <div>
                            <div>
                                  <Accordion allowToggle>
                                    <AccordionItem>
                                      <h2>
                                        <AccordionButton border=".5px solid black" width='200px'>
                                          <Box flex='1' textAlign='left'>
                                            Sort by: <span style={{ fontSize:"12px" }}> <b>Recommended</b> </span>
                                          </Box>
                                          <AccordionIcon />
                                        </AccordionButton>
                                      </h2>
                                      <AccordionPanel pb={2}>
                                      <p style={{ display:"flex",width:"90%",margin:"auto",marginBottom:"7px"}}>
                                        <p style={{ marginLeft:"5px",fontSize:"14px"}}> Whats New </p>
                                      </p>
                                      <p style={{ display:"flex",width:"90%",margin:"auto",marginBottom:"7px"}}>
                                        <p style={{ marginLeft:"5px",fontSize:"14px"}}> Popularity </p>
                                      </p>
                                      <p style={{ display:"flex",width:"90%",margin:"auto",marginBottom:"7px"}}>
                                        <p style={{ marginLeft:"5px",fontSize:"14px"}}> Better Discount </p>
                                      </p>
                                      <p style={{ display:"flex",width:"90%",margin:"auto",marginBottom:"7px"}}>
                                        <p style={{ marginLeft:"5px",fontSize:"14px"}}> Price: High to Low </p>
                                      </p>
                                      <p style={{ display:"flex",width:"90%",margin:"auto",marginBottom:"7px"}}>
                                        <p style={{ marginLeft:"5px",fontSize:"14px"}}> Price: Low to High </p>
                                      </p>
                                      <p style={{ display:"flex",width:"90%",margin:"auto",marginBottom:"7px"}}>
                                        <p style={{ marginLeft:"5px",fontSize:"14px"}}> Customer Rating </p>
                                      </p>
                                      </AccordionPanel>
                                    </AccordionItem>
                                  </Accordion>
                                  </div>
                            </div>
                      </div>
                 {/* right top part end */}

                 {/* right part img start*/}

                 <div style={{ marginLeft:"20px",marginTop:"20px" }}>
                    {/* grid */}
                      <div className={Styles.grid}>
                        {details.map((p)=>(
                          <div>
                            <img className={Styles.prodimg} src={p.img} alt="" />
                            <b>{p.name}</b>
                            <p className={Styles.dis} >{p.dis}</p>
                            <div style={{display:"flex"}}>
                              <p>Rs.{p.price} <span className={Styles.strick} > Rs .{p.strickprice}</span>
                              <span style={{color:"#ff3f6c",marginLeft:"5px"}}>({p.offer}% off)</span>
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    
                 </div>
                 {/* right part img end*/}

              </div>
              {/* right part end */}
         </div>

    </div>
  )
}

export default Shirt