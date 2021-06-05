import React from "react";
import { Table } from "react-bootstrap";
import { PropTypes } from "prop-types";

export const UnitTable = ({ data }) => {
 
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Unit Number</th>
          <th>Building</th>
          <th>Managed</th>
          <th>Rental</th>
          <th>In House</th>
          <th>Robe Count</th>
          <th>Inspected</th>
          <th>Notes</th>
          
        </tr>
      </thead>
      <tbody>
        {data.length ? (
          data.map((row) => (
            <tr key={row.id}>
              <td>{row.unit}</td>
              <td>{row.building}</td>
              <td>{row.managed}</td>
              <td>{row.rental}</td>
              <td>{row.inHouse}</td>
              <td>{row.robeCount}</td>
              <td>{row.inspected}</td>
              <td>{row.notes}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4" className="text-center">
              No Units to show
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

UnitTable.propTypes = {
  data: PropTypes.array.isRequired,
};
