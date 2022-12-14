import { createContext, useState } from "react";


export const WishedItem = createContext();
const WishContext = ({children})=>{
    const [wish,setWish] = useState([]);
    return(
        <WishedItem.Provider value={{wish,setWish}}>{children}</WishedItem.Provider>
    )
}
export default WishContext;