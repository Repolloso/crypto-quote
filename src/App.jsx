import styled from "@emotion/styled"
import ImagenCrypto from "./assets/img/imagen-criptos.png"
import Spinner from "./components/Spinner"
import { useState, useEffect } from "react"
import Formulario from "./components/Form"
import Quote from "./components/Quote"

// Styled Components --> esto es un componente de React que nos permite crear componentes con estilos de CSS, esto se crea por cada componente que se quiera crear y esto evita que se tenga que crear un archivo CSS por cada componente que se cree lo cual lo hace mas escalable y facil de mantener porque si no es usa mas el componente se puede eliminar el componente y se borra todo con el
const Heading = styled.h1`
  color: #fff;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after {
    content: "";
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
    margin: 10px auto;
  }
`
const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`
const Imagen = styled.img`
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`

function App() {

  const [currencies, setCurrencies] = useState([])
  const [result, setResult] = useState({})
  const [showResult, setShowResult] = useState(false)
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
      if(Object.keys(currencies).length > 0) {
          const quoteCrypto = async () => {
              setLoading(true)
              setResult({})
              const { currency, crypto } = currencies
              const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${currency}`
              const response = await fetch(url)
              const result = await response.json()
              setResult(result.DISPLAY[crypto][currency])
              setShowResult(true)
              setLoading(false)
          }
          quoteCrypto()
      }
  }, [currencies])
  
  return (
    <>
      <Contenedor>
        <Imagen src={ImagenCrypto} alt="Imagen-Cripto" width={400} height={400} loading="lazy"/>
        <div>
          <Heading>Cotiza Cryptomonedas al instante</Heading>

          <Formulario 
            setCurrencies={setCurrencies}
          />

          {loading && <Spinner />}
          {showResult && <Quote result={result} />}
        </div>
      </Contenedor>
    </>
  )
}

export default App
