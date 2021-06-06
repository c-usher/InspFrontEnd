import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { UnitTable } from "../../components/units_table/Unit_Table_Comp";
import units from "../../assets/data/dummy_data.json";
import { Link } from "react-router-dom";
export const Dashboard = () => {
  return (
    <Container>
      <Row>
        <Col className="text-center mt-5 mb-2">
          <Link to="/add-unit">
            <Button variant="info">Add New Unit</Button>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col className="text-center  mb-2">
          <div>Total Units: 100</div>
          <div> Pending Units: 50 </div>
        </Col>
      </Row>
      <Row>
        <Col className="mt-2">Recently finished units</Col>
      </Row>
      <hr />
      <Row>
        <Col className="units-table">
          <UnitTable units={units} />
        </Col>
      </Row>
    </Container>
  );
};
