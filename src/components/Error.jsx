import styled from "@emotion/styled"

const Text = styled.div`
    color: #FFF;
    background-color: #b7322c;
    padding: 1rem;
    text-align: center;
    margin-bottom: 2rem;
    border-radius: 5px;
    text-transform: uppercase;
    font-size: 18px;
`

const Error = ({children}) => {
    return (
        <>
            <Text>{children}</Text>
        </>
    )
}

export default Error