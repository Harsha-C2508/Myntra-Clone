import axios from 'axios'

export function unbelivedeal(){
    return axios.get("https://bookapi-b62i.onrender.com/mensUnbelive")
}
export function menDeals(){
    return axios.get("https://bookapi-b62i.onrender.com/mensDeal")
}

export function cateToBag(){
    return axios.get("https://bookapi-b62i.onrender.com/cateToBag")
}

export function brands(){
    return axios.get("https://bookapi-b62i.onrender.com/exploreTop")
}

export function luxeBrand(){
    return axios.get("https://bookapi-b62i.onrender.com/luxe")
}

export function trendings(){
    return axios.get("https://bookapi-b62i.onrender.com/trending")
}

export function sport(){
    return axios.get("https://bookapi-b62i.onrender.com/sportWear")
}

export function footwear(){
    return axios.get("https://bookapi-b62i.onrender.com/footwear")
}

export function accessories(){
    return axios.get("https://bookapi-b62i.onrender.com/accesssories")
}