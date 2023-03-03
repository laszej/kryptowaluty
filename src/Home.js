import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div className="jumbotron jumbotron-fluid" style={{padding: "5rem"}}>
      <h1 className="display-4">Kryptowaluty online</h1>
      <p className="lead" style={{marginTop:"3rem"}}>Na stronie znajdują się najważniejsze kryptowaluty świata wraz ze szczegółowymi o nich informacjami. </p>
      
      <p className="lead">Wszystkie informacje o kryptowalutach pobierane są w czasie rzeczywistym byś miał/a jak najbardziej aktualną wiedzę!</p>
      
      <p className="lead">Strona ma charakter wyłącznie informacyjny i nie może być traktowana jako wyznacznik do podejmowania decyzji inwestycyjnych.</p>
      
      <p className="lead">
      <Link to="/coins/" className="btn btn-primary btn-lg" role="button" style={{marginTop:"3rem"}}>Kryptowaluty</Link>
       </p>
      </div>
    </>
  )
}

export default Home