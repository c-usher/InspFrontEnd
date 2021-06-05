import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import units from "../../assets/data/dummy_data.json";

const unit = units[3];

export const ShowUnitPage = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="unit-num">Unit Number: {unit.unit}</h1>
          <h2 className="building">Building: {unit.building}</h2>
          <h2 className="managed">
            Managed:{" "}
            {unit.managed ? "This unit is managed" : "This unit is not managed"}
          </h2>
          <h2 className="rental">
            Rental:{" "}
            {unit.rental
              ? "This unit is a rental"
              : "This unit is not a rental"}
          </h2>
          <h2 className="in-house">
            In House:{" "}
            {unit.inHouse
              ? "This unit is in house"
              : "This unit is not in house"}
          </h2>
          <h2 className="robe-count">Robes: {unit.robeCount}</h2>
          <h2 className="inspected">
            Inspected:{" "}
            {unit.inspected
              ? "This unit is inspected"
              : "This unit is not inspected"}
          </h2>
          <h2 className="notes">Notes: {unit.notes}</h2>
          {/*  ! remove this \/ */}
          <hr />
          <br />
          <br />
          <h1>{JSON.stringify(unit)}</h1>
          {/* ! remove this /\ */}
        </Col>
      </Row>
    </Container>
  );
};

//        ! REMOVE THIS \/
/*        <th>Unit Number</th>
          <th>Building</th>
          <th>Managed</th>
          <th>Rental</th>
          <th>In House</th>
          <th>Robe Count</th>
          <th>Inspected</th>
          <th>Notes</th> 
*/
