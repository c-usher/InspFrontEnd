import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAllUnits } from "./unitsAction";
import { Row, Col, Container, Button } from "react-bootstrap";
import { SearchComp } from "../../components/search/Search_Comp";
import { UnitTable } from "../../components/units_table/Unit_Table_Comp";
import { Link } from "react-router-dom";

export const ShowUnitsPage = () => {
  const dispatch = useDispatch();
  const [str, setStr] = useState("");
  useEffect(() => {
    dispatch(fetchAllUnits());
  }, [str, dispatch]);

  return (
    <Container>
      <Row className="mt-4">
        <Col>
          <Link to="/add-unit">
            <Button variant="info">Add New Unit</Button>
          </Link>
        </Col>
        <Col className="text-right">
          <SearchComp />
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <UnitTable />
        </Col>
      </Row>
    </Container>
  );
};
