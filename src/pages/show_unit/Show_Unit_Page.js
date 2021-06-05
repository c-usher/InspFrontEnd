import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import units from "../../assets/data/dummy_data.json";

const unit = units[0];

export const ShowUnitPage = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div className="unit-num">UNIT NUMBER GOES HERE</div>
          <div className="building">BUILDING GOES HERE</div>
          <div className="managed">MANAGED GOES HERE</div>
          <div className="rental">RENTAL GOES HERE</div>
          <div className="in-house">IN HOUSE GOES HERE</div>
          <div className="robe-count">ROBE COUNT GOES HERE</div>
          <div className="inspected">INSPECTED GOES HERE</div>
          <div className="notes">NOTES GOES HERE</div>
        </Col>
      </Row>
    </Container>
  );
};

/*        <th>Unit Number</th>
          <th>Building</th>
          <th>Managed</th>
          <th>Rental</th>
          <th>In House</th>
          <th>Robe Count</th>
          <th>Inspected</th>
          <th>Notes</th> 
*/
