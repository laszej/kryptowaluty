import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'


const Coins = () => {

    const [coins, setCoins] = useState([])

    useEffect(()=>{
        const fetchCoins = async ()=>{
        const data =  await fetch("https://api.coinstats.app/public/v1/coins?skip=0")
        const coinsData = await data.json()
        setCoins(coinsData.coins)
        console.log(coins)
        } 

        fetchCoins()

    }, [])

  return (
    <>
    <div style={{display: "flex", justifyContent: "center",  flexWrap: "wrap"}}>  

    {coins.map((coin)=>(
     <Link to={`/coin/${coin.id}`} key={coin.id} style={{display: "flex", flexDirection: "column", margin: "3rem", alignItems: "center"}}>
        <h3>{coin.name}</h3>
        <img src={coin.icon} width={100} height={100} alt={coin.name}/>
        <h6>Przybliżona cena: {parseInt(coin.price)} $</h6>
        <h6>Szczegóły</h6>
     </Link>) 
     )}
     </div>
    </>
  )
}

export default Coins