import React from "react";
import PropTypes from "prop-types";

export const NotesHistoryComp = ({ note }) => {
  return (
    <div className="note-history">
      <div className="unit-note">
        <div className="added-by">ADDED BY</div>
        <div className="date">DATE</div>
      </div>
      <div className="note">NOTE</div>
    </div>
  );
};

NotesHistoryComp.propTypes = {
  note: PropTypes.object.isRequired,
};
