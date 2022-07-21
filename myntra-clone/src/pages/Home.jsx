import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { budgetBuy, catagory, crushOn, majorBrand, offerOntheWay, topOffer } from '../api/api';
import Styles from '../style/homeTop.module.css'
const Home = () => {
  const [data,setData] = useState([]);
  const [offers,setOffers] = useState([]);
  const [budget,setBudget] = useState([]);
  const [crushing,setCrushing] = useState([]);
  const[loading,setLoading] = useState(false);
  const[error,setError] = useState(false);
  const [major,setMajor] = useState([]);
  const [cate,setCate] = useState([]);
  useEffect(()=>{
      setLoading(true)
      setError(false)
      topOffer()
      .then((res)=>{
          setData(res.data)
          setLoading(false)
      })
      .catch((err)=>{
          setLoading(false)
          setError(true)
      })
  },[])
  useEffect(()=>{
    setLoading(true)
    setError(false)
    offerOntheWay()
    .then((res)=>{
        setOffers(res.data)
        setLoading(false)
    })
    .catch((err)=>{
      setLoading(false)
      setError(true)
    })
},[])
useEffect(()=>{
  setLoading(true)
    setError(false)
  budgetBuy()
  .then((res)=>{
     setBudget(res.data)
     setLoading(false)
  })
  .catch((err)=>{
    setLoading(false)
    setError(true)
  })
},[])

useEffect(()=>{
  setLoading(true)
    setError(false)
  crushOn()
  .then((res)=>{
     setCrushing(res.data)
     setLoading(false)
  })
  .catch((err)=>{
    setLoading(false)
    setError(true)
  })
},[])

useEffect(()=>{
  setLoading(true)
    setError(false)
  majorBrand()
  .then((res)=>{
     setMajor(res.data)
     setLoading(false)
  })
  .catch((err)=>{
    setLoading(false)
    setError(true)
  })
},[])
useEffect(()=>{
  setLoading(true)
    setError(false)
  catagory()
  .then((res)=>{
     setCate(res.data)
     setLoading(false)
  })
  .catch((err)=>{
    setLoading(false)
    setError(true)
  })
},[])
  return (
    <div style={{marginBottom:"10px" }}>
      {loading}
      {error}
      <div className={Styles.container}>
        {data.map((p)=>(
          <div key={p.id}>
            <img src={p.img} alt="top" className={Styles.img}/>
          </div>
        ))}
      </div>

      <div>
        <img className={Styles.heading} src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/13/9bf7f9f1-189e-4990-a830-e8eea8b855671657715178137-OMG--Offers-This-Way.jpg" alt="" />
      </div>
      <div className={Styles.offerContain}>
        {offers.map((offer)=>(
         <img className={Styles.Offerimg} src={offer.img} alt="offer" />
        ))}
      </div>

      <div>
        <img className={Styles.heading2} src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/13/b234ac64-8cf4-4231-ad62-db1bf5b958ed1657715178112-Budget-Buys.jpg" alt="" />
      </div>
      <div className={Styles.offerContain}>
        {budget.map((budget)=>(
            <img src={budget.img} alt="budget" className={Styles.budgetimg}/>
        ))}
      </div>

      <div>
        <img className={Styles.heading2} src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/13/575196ba-5c16-485c-a04d-0295ca71c63c1657715178103-Brands-Everyone_s-Crushing-On-.jpg" alt="" />
      </div>
      <div className={Styles.crushContainer}>
        {crushing.map((crush)=>(
          <img src={crush.img} alt="crushImg" className={Styles.crushimg}/>
        ))}
      </div>

      <div>
        <img className={Styles.heading2} src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/13/4fe15f44-7e23-47ad-86fa-a941660e86a81657715178128-Oh-So-Major-Brands.jpg" alt="" />
      </div>
      <div className={Styles.major}>
        {major.map((majorBrand)=>(
          <img src={majorBrand.img} alt="" />
        ))}
      </div>

      <div>
        <img className={Styles.heading2} src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/13/1b103462-6bff-46e7-89e7-ca0f2c6006d21657715178154-Shop-By-Category.jpg" alt="" />
      </div>
      <div className={Styles.category}>
        {cate.map((catego)=>(
          <img className={Styles.cateimg} src={catego.img} alt="" />
        ))}
      </div>
    </div>
  )
}

export default Home;