import { useState, useEffect } from "react";
 
export default function AllToDos(): JSX.Element {
  return (
    <>
      <div className="all-to-dos-container">
        <h3>Previous To Do's</h3>
        <table className="table">
    <thead>
      <tr>
        <th>Description</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {/* <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr> */}
    </tbody>
  </table>
      </div>
    </>
  );
}
