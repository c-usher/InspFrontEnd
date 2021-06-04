import React, { useState, useEffect } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import { SearchComp } from "../../components/search/Search_Comp";
import { UnitTable } from "../../components/units_table/Unit_Table_Comp";
import data from "../../assets/data/dummy_data.json";

export const ShowUnitsPage = () => {
  const [str, setStr] = useState("");
  const [dispUnit, setDispUnit] = useState([]);
  useEffect(() => {
    setDispUnit(data);
  }, [str, dispUnit]);

  const handleOnChange = (e) => {
    const { value } = e.target;
    console.log(value);
    setStr(value);
    searchUnit(value);
  };

  const searchUnit = (sttr) => {
    const displayUnits = data.filter((row) =>
      row.status.toLowerCase().includes(sttr.toLowerCase())
    );
    console.log(displayUnits);
    setDispUnit(displayUnits);
  
  };
  return (
    <Container>
      <Row className="mt-4">
        <Col>
          <Button variant="info">Add New Unit</Button>
        </Col>
        <Col className="text-right">
          <SearchComp handleOnChange={handleOnChange} str={str} />
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <UnitTable data={dispUnit} />
        </Col>
      </Row>
    </Container>
  );
};
