import React from "react";
import PropTypes from "prop-types";
import "./notes_history_style.css";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { noteStatusUpdate } from "../../pages/show_units/unitsAction";

export const NotesHistoryComp = ({ notes }) => {
  const dispatch = useDispatch();
  if (!notes) return null;

  return notes.map((row, i) => (
    <div className="note-history mt-3" key={i}>
      {row.noteStatus && <div className="noteStatus" />}
      <div className="unit-note">
        <div className="note-by">{row.noteAddedBy}</div>
        <div className="date">
          {row.noteAddedAt && new Date(row.noteAddedAt).toLocaleString()}
        </div>
      </div>

      <div className="note">{row.note}</div>

      {!row.noteStatus && (
        <Button
          variant="outline-info"
          onClick={() => dispatch(noteStatusUpdate(row._id))}
        >
          Update Status
        </Button>
      )}

      <Button variant="outline-warning">Delete Note</Button>
    </div>
  ));
};

NotesHistoryComp.propTypes = {
  notes: PropTypes.array.isRequired,
};
