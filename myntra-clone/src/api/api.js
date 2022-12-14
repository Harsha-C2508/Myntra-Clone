import axios from 'axios'
 export function topOffer(){
    return axios.get("https://bookapi-b62i.onrender.com/homeTop")
 }
  export function offerOntheWay(){
    return axios.get("https://bookapi-b62i.onrender.com/homeoffers")
  }

  export function budgetBuy(){
    return axios.get("https://bookapi-b62i.onrender.com/budgetbuy")
  }

  export function crushOn(){
    return axios.get("https://bookapi-b62i.onrender.com/crushingOn")
  }

  export function majorBrand(){
    return axios.get("https://bookapi-b62i.onrender.com/majorBrand")
  }

  export function catagory(){
    return axios.get("https://bookapi-b62i.onrender.com/shopByCat")
  }