import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import units from "../../assets/data/dummy_data.json";
import { NotesHistoryComp } from "../../components/notes_history/Notes_History_Comp";

const unit = units[0];

export const ShowUnitPage = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="unit-num">Unit Number: {unit.unit}</h1>
          <h6 className="building">Building: {unit.building}</h6>
          <h6 className="managed">
            Managed:{" "}
            {unit.managed ? "This unit is managed" : "This unit is not managed"}
          </h6>
          <h6 className="rental">
            Rental:{" "}
            {unit.rental
              ? "This unit is a rental"
              : "This unit is not a rental"}
          </h6>
          <h6 className="in-house">
            In House:{" "}
            {unit.inHouse
              ? "This unit is in house"
              : "This unit is not in house"}
          </h6>
          <h6 className="robe-count">Robes: {unit.robeCount}</h6>
          <h6 className="inspected">
            Inspected:{" "}
            {unit.inspected
              ? "This unit is inspected"
              : "This unit is not inspected"}
          </h6>
          <h6 className="notes">Notes: {unit.notes}</h6>
        </Col>
          </Row>
          < hr />
          <h1> Notes History for {unit.building}{unit.unit}</h1>
      <Row>
        <Col>
          <NotesHistoryComp />
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
