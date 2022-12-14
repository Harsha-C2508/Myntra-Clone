import React from 'react'
import {Routes, Route,} from "react-router-dom";
import RequireAuth from '../context/RequireAuth';
import Address from './Address';
import Bag from './Bag';
import Checkout from './Checkout';
import Home from './Home';
import Login from './Login';
import Mens from './Mens';
import Shirt from './Shirt';
import SingleProd from './SingleProd';
import Wishlist from './Wishlist';
import Women from './Women';
const AllRoutes = () => {
  return (
    <div>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/mens' element={<Mens/>}/>
        <Route path='/mens' element={<Women/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/wish' element={<RequireAuth><Wishlist/></RequireAuth>}/>
        <Route path='/bag' element={<Bag/>}/>
        <Route path='/mens/:id' element={<Shirt/>}/>
        <Route path='/Shirt/:id' element={<SingleProd/>}/>
        <Route path='/address' element={<Address/>}/>
        <Route path='/check' element={<Checkout/>}/>
     </Routes>
    </div>
  )
}

export default AllRoutes;