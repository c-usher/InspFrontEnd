import React, { useState, useEffect } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import { SearchComp } from "../../components/search/Search_Comp";

export const ShowUnitsPage = () => {
    const [str, setStr] = useState("");
    useEffect(() => { }, [str]);

    
    const handleOnChange = (e) => {
      setStr(e.target.value)
  };
  return (
    <Container>
      <Row>
        <Col>
          <Button variant="info">Add New Unit</Button>
        </Col>
        <Col className="text-right">
          <SearchComp handleOnChange={handleOnChange} str={str} />
        </Col>
      </Row>
    </Container>
  );
};
