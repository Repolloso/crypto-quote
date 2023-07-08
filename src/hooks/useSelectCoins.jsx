import styled from "@emotion/styled"
import { useState } from "react"

const Label = styled.label`
    color: #FFF;
    display: block;
    font-weight: 700;
    margin: 15px 0;
    font-size: 24px;
`
const Select = styled.select`
    width: 100%;
    display: block;
    padding: 14px;
    border-radius: 10px;
    border: none;
    font-size: 1rem;
    margin-top: 20px;
    -webkit-appearance: none;
`

// Custom Hook, es un hook que se crea para reutilizarlo en varios componentes, es una funcion que se crea y se puede reutilizar en varios componentes
// Retorna objetos, funciones, arrays, etc

// Cuando hago destructuring en el parametro de props le debo mandar esa variable desde el otro componente asi label: "Choose a currency", options: currencies porque sino no va a funcionar
const useSelectCoins = ({ label, options }) => {
    
    // State del custom hook, no le asignamos un nombre porque lo vamos a reutilizar en varios componentes
    const [state, setState] = useState("")

    const SelectForm = () => (
        <>
            <Label>{label}</Label>
            <Select
            // Para que el select tenga un valor por defecto, le asignamos el valor del state y le asignamos el valor del state con el onChange y el setState
                value={state}
                onChange={e => setState(e.target.value)}
            >
                <option value="">- Select -</option>
                {
                    options?.map(option => (
                        <option key={option.id} value={option.id}>{option.name}</option>
                    ))
                }
            </Select>
        </>
    )

    return [state, SelectForm]

}

export default useSelectCoins