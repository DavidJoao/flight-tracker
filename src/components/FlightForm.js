import { Container, Form } from 'react-bootstrap'
import { useState } from 'react'

function FlightForm(){
    return(
        <div>
            <Container>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Enter flight code</Form.Label>
                        <Form.Control placeholder="Ex. AM 740"></Form.Control>
                    </Form.Group>
                </Form>
            </Container>
        </div>
    )
}

export default FlightForm