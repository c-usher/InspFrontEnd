import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import { PropTypes } from "prop-types";

export const SearchComp = ({handleOnChange, str}) => {
    console.log(str);
  return (
    <div>
      <Form>
        <Form.Group as={Row}>
          <Form.Label column ms="2">
            Search:{" "}
          </Form.Label>
          <Col ms="9">
            <Form.Control
              name="searchInp"
              onChange={handleOnChange}
              value={str}
              placeholder="Search ..."
            />
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};

SearchComp.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  str: PropTypes.string.isRequired,
};
