import { useEffect, useState } from "react";


function useCurrency (currency) {
   const [data,setData] = useState({})
   useEffect(()=>{
         fetch(`https://v6.exchangerate-api.com/v6/20983fbc32324c1c1d64cf46/latest/${currency}`)
         .then((res) => res.json())
         .then((res) => {
            // console.log(res.conversion_rates);
            setData(res.conversion_rates);
         })
         .catch((error) => console.error('Error fetching data:', error));
         // console.log(data);
      },[currency])
    return data
}

export default useCurrency;