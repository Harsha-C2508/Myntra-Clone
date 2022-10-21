import axios from 'axios'

export function productDetals(){
    return axios.get(`https://api-myntra.herokuapp.com/singleDeatils?_page=1&_limit=25`)
}