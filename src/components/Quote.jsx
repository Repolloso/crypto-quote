import styled from "@emotion/styled"

const Text = styled.p`
    font-size: 15px;
    span {
        font-weight: 700;
    }
`

const Price = styled.span`
    font-size: 25px;
    span {
        font-weight: 700;
    }
`

const Image = styled.img`
    margin-right: 20px;
`

const Result = styled.div`
    color: #FFF;
    font-family: 'LATO', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Container = styled.div`
    display: flex;
    margin-top: 50px;
`

const Quote = ({ result }) => {

    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = result

    return (
        <>
        <Result>
            <Container>
                <Image src={`https://cryptocompare.com/${IMAGEURL}`} alt="crpto-logo" width={150} height={150} loading="lazy" />
                <div>
                    <Price>The price is: <span>{PRICE}</span></Price>
                    <Text>The highest price of the day is: <span>{HIGHDAY}</span></Text>
                    <Text>The lowest price of the day is: <span>{LOWDAY}</span></Text>
                    <Text>The change in the last 24 hours is: <span>{CHANGEPCT24HOUR}</span></Text>
                    <Text>The last update is: <span>{LASTUPDATE}</span></Text>
                </div>
            </Container>
        </Result>
        </>
    )
}

export default Quote