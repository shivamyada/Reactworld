import { useEffect } from "react"
import { useState} from "react"


function usecurrencyinfo(currency){
 const [data ,setData]=useState({})
    useEffect(()=>{

    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
      .then((res)=> res.json())
      .then((res)=> setdData(res[currency]))
    },[currency])
     return data
}

export default usecurrencyinfo;