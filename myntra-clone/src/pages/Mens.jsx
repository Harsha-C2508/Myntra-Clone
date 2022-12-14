import React, { useEffect,useState } from 'react'
import { accessories, brands, cateToBag, footwear, luxeBrand, menDeals, sport, trendings, unbelivedeal } from '../api/mensApi';
import Styles from '../style/mens.module.css'
import { Link } from 'react-router-dom';
import { Spinner } from '@chakra-ui/react'
const Mens = () => {
  const [deals,setDeals] = useState([]);
  const[loading,setLoading] = useState(false);
  const[error,setError] = useState(false);
  const [bag,setBag] = useState([]);
  const [brand,setBrand] = useState([])
  const [luxe,setLuke] = useState([])
  const [trending,setTrending] = useState([])
  const [sportwear,setSportwear] = useState([]);
  const [foot,setFoot] = useState([]);
  const [acce,setAcce] = useState([])
  const [unbelivedeals,setUnbelivedeals] = useState([]);
  useEffect(()=>{
    setLoading(true)
    setError(false)
    menDeals()
    .then((res)=>{
      setDeals(res.data)
      setLoading(false)
    })
    .catch((err)=>{
     setLoading(false)
     setError(true)
    })
  },[])

  useEffect(()=>{
    cateToBag()
    .then((res)=>{
      setBag(res.data)
    })
    .catch((err)=>{
     setError(true)
    })
  },[])

  useEffect(()=>{
     brands()
    .then((res)=>{
      setBrand(res.data)
    })
    .catch((err)=>{
     setError(true)
    })
  },[])

  useEffect(()=>{
     luxeBrand()
    .then((res)=>{
     setLuke(res.data)
    })
    .catch((err)=>{
     setError(true)
    })
  },[])

  useEffect(()=>{
    trendings()
    .then((res)=>{
     setTrending(res.data)
    })
    .catch((err)=>{
     setError(true)
    })
  },[])

  useEffect(()=>{
    sport()
    .then((res)=>{
    setSportwear(res.data)
    })
    .catch((err)=>{
     setError(true)
    })
  },[])

  useEffect(()=>{
    footwear()
    .then((res)=>{
      setFoot(res.data)
    })
    .catch((err)=>{
     setError(true)
    })
  },[])

  useEffect(()=>{
    setLoading(true)
    setError(false)
    accessories()
    .then((res)=>{
     setAcce(res.data)
      setLoading(false)
    })
    .catch((err)=>{
     setLoading(false)
     setError(true)
    })
  },[])

  useEffect(()=>{
    unbelivedeal()
    .then((res)=>{
      setUnbelivedeals(res.data)
    })
    .catch((err)=>{
     setError(true)
    })
  },[])

  return (
   <div style={{ textAlign:"left" }}>
      <div className={Styles.slider}>
        <figure>
            <img src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/17/a53b7f7e-37ab-4319-a1b4-5d9c0cca68601650180659343-Lancer_Desk.jpg" alt="" />
            <img src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/17/abd2b07f-954c-43ad-ba39-bfa50527d0641650180659364-Backpacks---Luggage_Desk.jpg" alt="" />
            <img src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/17/eb6408d8-b413-49f7-8525-317fddba53821650180659351-Casual---Sports-Shoes_Desk.jpg" alt="" />
            <img src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/e384cb32-690c-4ccf-a6cb-61df36960bb21651599573972-Workwear_Desk.jpg" alt="" />
            <img src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/b54399f0-6ed5-44b3-84b0-e9d5c1657aaa1651599573991-CR7_Desk_Baner.jpg" alt="" />
            <img src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/846beb79-ada7-48c3-a6c6-4448f276c2111651599573979-Sports-Shoes_Desk.jpg" alt="" />
            <img src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/17/a53b7f7e-37ab-4319-a1b4-5d9c0cca68601650180659343-Lancer_Desk.jpg" alt="" />
        </figure>
      </div>

      <div>
        <img className={Styles.heading2} src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/13/1b103462-6bff-46e7-89e7-ca0f2c6006d21657715178154-Shop-By-Category.jpg" alt="" />
      </div>
      <div>
            {loading && <div> <Spinner /></div>}
            {error}
      </div>
       <div className={Styles.unbelive}>
         {unbelivedeals.map((p)=>(
          <Link to={`/mens/${p.id}`}><img className={Styles.unbeliveimg} src={p.img} alt="" /></Link>
         ))}
       </div>
      <div style={{marginTop:"40px"}}>
         <b className={Styles.heading}>BIGGEST DEALS ON TOP BRANDS</b>
      </div>
      <div className={Styles.contain}>
        <div className={Styles.dealsContain}>
            {deals.map((topdeal)=>(
            <div style={{backgroundColor:"#f5f5f7"}}>
               <img className={Styles.img} src={topdeal.img} alt="" />
            </div>
            ))}
        </div>
      </div>

     <div style={{marginTop:"40px"}}>
        <b className={Styles.heading}>CATEGORIES TO BAG</b>
     </div>
      <div className={Styles.contain}>
        <div className={Styles.bag}>
            {bag.map((topdeal)=>(
            <div style={{backgroundColor:"#f5f5f7"}}>
               <Link to={`/mens/${topdeal.id}`}><img className={Styles.bagimg} src={topdeal.img} alt="" /></Link>
            </div>
            ))}
        </div>
      </div>

      <div style={{marginTop:"40px"}}>
        <b className={Styles.heading}>EXPLORE TOP BRANDS</b>
      </div>
      <div className={Styles.contain}>
        <div className={Styles.brandbag}>
            {brand.map((topdeal)=>(
            <div style={{backgroundColor:"#f5f5f7"}}>
               <img className={Styles.brandimg} src={topdeal.img} alt="" />
            </div>
            ))}
        </div>
      </div>

      <div style={{marginTop:"40px"}}>
        <b className={Styles.heading}>MYNTRA LUXE</b>
      </div>
      <div className={Styles.contain}>
        <div className={Styles.bag}>
            {luxe.map((topdeal)=>(
            <div style={{backgroundColor:"#f5f5f7"}}>
               <img className={Styles.luxeimg} src={topdeal.img} alt="" />
            </div>
            ))}
        </div>
      </div>

      <div style={{marginTop:"40px"}}>
        <b className={Styles.heading}>TRENDING IN INDIAN WEAR</b>
      </div>
      <div className={Styles.contain}>
        <div className={Styles.brandbag}>
            {trending.map((topdeal)=>(
            <div style={{backgroundColor:"#f5f5f7"}}>
               <img className={Styles.trendimg} src={topdeal.img} alt="" />
            </div>
            ))}
        </div>
      </div>

      <div style={{marginTop:"40px"}}>
        <b className={Styles.heading}>TRENDING IN SPORTS WEAR</b>
      </div>
      <div className={Styles.contain}>
        <div className={Styles.brandbag}>
            {sportwear.map((topdeal)=>(
            <div style={{backgroundColor:"#f5f5f7"}}>
               <img className={Styles.trendimg} src={topdeal.img} alt="" />
            </div>
            ))}
        </div>
      </div>

      <div style={{marginTop:"40px"}}>
        <b className={Styles.heading}>TRENDING IN FOOTWEAR</b>
      </div>
      <div className={Styles.contain}>
        <div className={Styles.brandbag}>
            {foot.map((topdeal)=>(
            <div style={{backgroundColor:"#f5f5f7"}}>
               <img className={Styles.trendimg} src={topdeal.img} alt="" />
            </div>
            ))}
        </div>
      </div>

      <div style={{marginTop:"40px"}}>
        <b className={Styles.heading}>TRENDING IN ACCESSORIES</b>
      </div>
      <div className={Styles.contain} style={{ marginBottom:"20px" }}>
        <div className={Styles.brandbag}>
            {acce.map((topdeal)=>(
            <div style={{backgroundColor:"#f5f5f7"}}>
               <img className={Styles.trendimg} src={topdeal.img} alt="" />
            </div>
            ))}
        </div>
      </div>

   </div>
  )
}

export default Mens;