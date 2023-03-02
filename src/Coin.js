import React, {useState, useEffect} from 'react'
import { useHistory, useParams } from "react-router-dom";

const Coins = () => {

    const [coin, setCoin] = useState({})
    const { id } = useParams();

    useEffect(()=>{
        const fetchCoins = async ()=>{
        const data =  await fetch(`https://api.coinstats.app/public/v1/coins/${id}`)
        const coinsData = await data.json()
        console.log(coinsData)
        setCoin(coinsData.coin)
        console.log(coin)
        } 

        fetchCoins()

    }, [])

  return (
    <>
    

 
     <div key={coin.id} style={{display: "flex", flexDirection: "column", margin: "3rem", alignItems: "center"}}>
        <h3>{coin.name}</h3>
        <img src={coin.icon} width={100} height={100}/>
        <h6>Przybliżona cena: {parseInt(coin.price)}$</h6>
        <h6>Szczegóły</h6>
  
    
     </div>
    </>
  )
}

export default Coins