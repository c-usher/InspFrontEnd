import React from "react";
import { Table } from "react-bootstrap";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

export const UnitTable = ({ units }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Unit</th>
          <th>Managed</th>
          <th>Rental</th>
          <th>In House</th>
          <th>Robe Count</th>
          <th>Inspected</th>
        </tr>
      </thead>
      <tbody>
        {units.length ? (
          units.map((row) => (
            <tr key={row.id}>
              <Link to={`/unit/${row.id}`}>
                <td>
                  {row.building}
                  {row.unit}
                </td>
              </Link>
              <td>{row.managed ? "Managed" : "Not Managed"}</td>
              <td>{row.rental ? "Rental" : "Not a Rental"}</td>
              <td>{row.inHouse ? "In House" : "Not In House"}</td>
              <td>{row.rental ? row.robeCount : "Not a Rental"}</td>
              <td>{row.inspected ? "Inspected" : "Not Inspected"}</td>
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
  units: PropTypes.array.isRequired,
};
