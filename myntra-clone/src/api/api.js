import axios from 'axios'
 export function topOffer(){
    return axios.get("https://api-myntra.herokuapp.com/homeTop")
 }
  export function offerOntheWay(){
    return axios.get("https://api-myntra.herokuapp.com/homeoffers")
  }

  export function budgetBuy(){
    return axios.get("https://api-myntra.herokuapp.com/budgetbuy")
  }

  export function crushOn(){
    return axios.get("https://api-myntra.herokuapp.com/crushingOn")
  }

  export function majorBrand(){
    return axios.get("https://api-myntra.herokuapp.com/majorBrand")
  }

  export function catagory(){
    return axios.get("https://api-myntra.herokuapp.com/shopByCat")
  }