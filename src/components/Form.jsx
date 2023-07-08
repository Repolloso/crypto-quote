import { useEffect, useState } from "react"
import styled from "@emotion/styled"
import useSelectCoins from "../hooks/useSelectCoins"
import currencies from "../utils/currencies.js"
import Error from "./Error"

const InputSubmit = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #9497FF;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #fff;
    transition: background-color .3s ease;

    &:hover {
        background-color: #7a7dfe;
        cursor: pointer;
    }
`

const Form = ({setCurrencies}) => {

    const [cryptos, setCryptos] = useState([])

    // Desestructuramos el array que retorna el custom hook y le pasa el label que es el texto que se va a mostrar en el select
    // que del destructuring del array se ponga el mismo nombre no significa que sea el mismo valor que se esta pasando desde el custom hook, sino, que el destructuring lo toma por posicion del array.
    // currency es el valor del state y SelectCoins es el componente que se va a mostrar en el formulario
    const [currency, SelectCurrencies] = useSelectCoins({ label: "Choose a currency", options: currencies })
    const [crypto, SelectCrypto] = useSelectCoins({ label: "Choose a crypto", options: cryptos })
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            
            const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD"
            const res = await fetch(url)
            const data = await res.json()
            
            const arrayCrypto = data.Data.map(coin => {
                const objcoin = {
                    id: coin.CoinInfo.Name,
                    name: coin.CoinInfo.FullName,
                }
                return objcoin
            })

            setCryptos(arrayCrypto)
        }
        // cuando se carga el componente, se ejecuta el useEffect y se llama a la funcion fetchData 1 vez, no se pasa entre [] porque sino se ejecutaria infinitamente.
        fetchData()
    }, [])

    const handleSubmit = e => {
        e.preventDefault()
        
        if([currency, crypto].includes("")) {
            setError(true)
            return
        }

        setError(false)
        setCurrencies({currency, crypto})
    }

    return (
        <>
            {error && <Error>All fields are required</Error>}

            <form
                onSubmit={handleSubmit}
            >
                <SelectCurrencies />
                <SelectCrypto />
                <InputSubmit type="submit" value="Quote" />
            </form>
        </>
    )
}

export default Form