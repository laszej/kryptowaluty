import React, {useState, useEffect} from 'react'
import { useParams, Link } from "react-router-dom";


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
        <img src={coin.icon} width={100} height={100} style={{marginBottom: "1rem"}}/>
        <h6>Cena: {coin.price} $</h6>

        <h6>Zmiana w ciągu godziny: {coin.priceChange1h} $</h6>

        <h6>Zmiana ceny od wczoraj: {coin.priceChange1d} $</h6>

        <h6>Zmiana w ciągu tygodnia: {coin.priceChange1w} $</h6>

        <a href={coin.websiteUrl} target="_blank">Strona kryptowaluty</a>

        <Link to="/coins" style={{marginTop: "1rem"}}>powrót</Link>
  
    
     </div>
    </>
  )
}

export default Coins