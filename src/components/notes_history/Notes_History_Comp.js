import React from "react";
import PropTypes from "prop-types";

export const NotesHistoryComp = ({ note }) => {
  return (
    <div className="note-history">
      <div className="unit-note">
        <div className="added-by"></div>
        <div className="date"></div>
      </div>
      <div className="note"></div>
    </div>
  );
};

NotesHistoryComp.propTypes = {
  note: PropTypes.object.isRequired,
};
