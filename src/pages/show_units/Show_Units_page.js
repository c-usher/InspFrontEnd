import React, { useState, useEffect } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import { SearchComp } from "../../components/search/Search_Comp";
import { UnitTable } from "../../components/units_table/Unit_Table_Comp";
import units from "../../assets/data/dummy_data.json";
import { Link } from "react-router-dom";

export const ShowUnitsPage = () => {
  const [str, setStr] = useState("");
  const [dispUnit, setDispUnit] = useState(units);
  useEffect(() => {}, [str, dispUnit]);

  const handleOnChange = (e) => {
    const { value } = e.target;
    setStr(value);
    searchUnit(value);
  };

  //Search by building
  const searchUnit = (input) => {
    const displayUnits = units.filter((row) =>
      row.building.toLowerCase().includes(input.toLowerCase())
    );
    setDispUnit(displayUnits);
  };
  return (
    <Container>
      <Row className="mt-4">
        <Col>
          <Link to="/add-unit">
            <Button variant="info">Add New Unit</Button>
          </Link>
        </Col>
        <Col className="text-right">
          <SearchComp handleOnChange={handleOnChange} str={str} />
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <UnitTable units={dispUnit} />
        </Col>
      </Row>
    </Container>
  );
};
