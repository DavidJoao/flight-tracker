import { Container, Form, Button } from 'react-bootstrap'
import { useState } from 'react'

function FlightForm(){



    const [input, setInput ] = useState('');

    const handleChange = (e) => {
        console.log(e.target.value)
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('https://api.aviationstack.com/v1/flights?access_key=1d992a362590126e9f73cba6df6006f8&flight_icao=AM783')
        .then((res) => res.json())
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
    }


    return(
        <div>
            <Container style={{border:'1px solid #b8b7b6', borderRadius:'10px'}}>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Enter flight code</Form.Label>
                        <Form.Control placeholder="Ex. AM 740" onChange={handleChange}></Form.Control>
                        <Button onClick={handleSubmit}>Search flight</Button>
                    </Form.Group>
                </Form>
            </Container>
        </div>
    )
}

export default FlightForm