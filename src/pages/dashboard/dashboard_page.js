import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { UnitTable } from "../../components/units_table/Unit_Table_Comp";
import { Link } from "react-router-dom";
import { fetchAllUnits } from "../show_units/unitsAction";
import { useSelector, useDispatch } from "react-redux";
export const Dashboard = () => {
  const { units } = useSelector((state) => state.units);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!units.length) {
      dispatch(fetchAllUnits());
    }
  }, [units, dispatch]);

  const unitsLeft = units.filter((row) => row.inspectedStatus === false);

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
          <div> Units Left to Inspect: {unitsLeft.length} </div>
          <div>Total Units: {units.length}</div>
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
