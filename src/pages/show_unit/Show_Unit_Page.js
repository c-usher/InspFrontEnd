import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Col, Row, Spinner, Alert } from "react-bootstrap";
import { AddNoteComp } from "../../components/add_note/Add_Note_Comp";
import { NotesHistoryComp } from "../../components/notes_history/Notes_History_Comp";
import { useParams } from "react-router-dom";
import { fetchUnit } from "../show_units/unitsAction";

export const ShowUnitPage = () => {
  const { uId } = useParams();
  const [newNote, setNewNote] = useState("");
  const dispatch = useDispatch();
  const { isLoading, error, selectedUnit } = useSelector(
    (state) => state.units
  );

  useEffect(() => {
    dispatch(fetchUnit(uId));
  }, [newNote, uId, dispatch]);

  return (
    <Container>
      <Row>
        <Col>
          {isLoading && <Spinner variant="primary" animation="border" />}
          {error && <Alert variant="danger">{error}</Alert>}
        </Col>
      </Row>
      <Row>
        <Col>
          <hr />
          <h1 className="unit-num"> {selectedUnit.unitNum}</h1>
          <hr />
          <h6 className="managed">
            Managed:
            {selectedUnit.managedStatus
              ? " This unit is managed"
              : " This unit is not managed"}
          </h6>
          <h6 className="rental">
            Rental:
            {selectedUnit.rentalStatus
              ? " This unit is a rental"
              : " This unit is not a rental"}
          </h6>
          <h6 className="in-house">
            In House:{" "}
            {selectedUnit.inHouseStatus
              ? " This unit is in house"
              : " This unit is not in house"}
          </h6>
          <h6 className="robe-count">
            Robes:{" "}
            {selectedUnit.rental ? selectedUnit.robeCount : " Not a Rental"}
          </h6>
          <h6 className="inspected">
            Inspected:
            {selectedUnit.inspected
              ? " This unit is inspected"
              : " This unit is not inspected"}
          </h6>
          <h6 className="cleaned">
            Cleaned:
            {selectedUnit.cleanStatus
              ? " This unit is clean"
              : " This unit is not clean"}
          </h6>
        </Col>
      </Row>
      <br />
      <hr />
      <h1>Notes:</h1>
      <hr />
      <Row>
        <Col>
          {selectedUnit.notes && (
            <NotesHistoryComp notes={selectedUnit.notes} />
          )}
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <div className="new-note-box">
            <AddNoteComp _id={uId} />
          </div>
        </Col>
      </Row>
      <br />
      <hr />
      <h1>Owner Preferences:</h1>
      <hr />
      <Row>
        <Col>
          {selectedUnit.ownerPrefs && (
            <NotesHistoryComp notes={selectedUnit.ownerPrefs} />
          )}
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <div className="new-prefs-box">
            <AddNoteComp />
          </div>
        </Col>
      </Row>
      <br />
    </Container>
  );
};

/* 

cleanStatus(pin):true < DONE
inHouseStatus(pin):true < DONE
managedStatus(pin):true < DONE
rentalStatus(pin):true < DONE
unitNum(pin):"A901" < DONE
ownerPrefs: [] 
notes: []

*/
