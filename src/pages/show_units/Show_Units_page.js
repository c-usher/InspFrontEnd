import React from 'react'
import {Row, Col, Container, Button} from 'react-bootstrap'
import { SearchComp } from '../../components/search/Search_Comp'

export const ShowUnitsPage = () => {
    return (
      <Container>
        <Row>
          <Col>
            <Button variant="info">Add New Unit</Button>
                </Col>
                <Col className="text-right"><SearchComp /></Col>
        </Row>
      </Container>
    );
}
