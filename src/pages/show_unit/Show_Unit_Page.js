import React, { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import units from "../../assets/data/dummy_data.json";
import { AddNoteComp } from "../../components/add_note/Add_Note_Comp";
import { NotesHistoryComp } from "../../components/notes_history/Notes_History_Comp";
import { useParams } from "react-router-dom";

// const unit = units[0];

export const ShowUnitPage = () => {
  const { uId } = useParams();
  const [newNote, setNewNote] = useState("");
  const [unit, setUnit] = useState("");

  useEffect(() => {
    for (let i = 0; i < units.length; i++) {
      if (units[i].id == uId) {
        setUnit(units[i]);
        continue;
      }
    }
  }, [newNote, uId]);

  const handleOnChange = (e) => {
    setNewNote(e.target.value);
    console.log(newNote);
  };

  const handleOnSubmit = (e) => {
    alert("submitted note!");
  };
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
          <h6 className="robe-count">
            Robes: {unit.rental ? unit.robeCount : "Not a Rental"}
          </h6>
          <h6 className="inspected">
            Inspected:
            {unit.inspected
              ? "This unit is inspected"
              : "This unit is not inspected"}
          </h6>
        </Col>
      </Row>
      <hr />
      <h1>
        Notes History for {unit.building}
        {unit.unit}
      </h1>
      <hr />
      <Row>
        <Col>
          <div className="notes">
            <NotesHistoryComp notes={unit.notes} />
          </div>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <div className="new-note-box">
            <AddNoteComp
              notes={newNote}
              handleOnChange={handleOnChange}
              handleOnSubmit={handleOnSubmit}
            />
          </div>
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
