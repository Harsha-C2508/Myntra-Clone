import axios from 'axios'

export function menDeals(){
    return axios.get("https://api-myntra.herokuapp.com/mensDeal")
}

export function cateToBag(){
    return axios.get("https://api-myntra.herokuapp.com/cateToBag")
}

export function brands(){
    return axios.get("https://api-myntra.herokuapp.com/exploreTop")
}

export function luxeBrand(){
    return axios.get("https://api-myntra.herokuapp.com/luxe")
}

export function trendings(){
    return axios.get("https://api-myntra.herokuapp.com/trending")
}

export function sport(){
    return axios.get("https://api-myntra.herokuapp.com/sportWear")
}

export function footwear(){
    return axios.get("https://api-myntra.herokuapp.com/footwear")
}

export function accessories(){
    return axios.get("https://api-myntra.herokuapp.com/accesssories")
}