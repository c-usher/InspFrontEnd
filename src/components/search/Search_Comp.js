import React from 'react'
import { Form, Row, Col } from 'react-bootstrap';

export const SearchComp = () => {
    return (
        <div>
            <Form>
                <Form.Group as={Row}>
                    <Form.Label column ms="2">Search: </Form.Label>
                    <Col ms="9">
                        <Form.Control
                            name="searchInp"
                            placeholder="Search ..."
                         />   
                    </Col>
                </Form.Group>
            </Form>
        </div>
    )
}
