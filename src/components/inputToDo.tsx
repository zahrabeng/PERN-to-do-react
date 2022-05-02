import { useState } from "react";

export default function InputToDo(): JSX.Element {
  const [description, setDescription] = useState("");

  return (
    <>
      <h1 className="text-center m-4">PERN To Do List</h1>
      <div className="form">
        <form className="d-flex">
          <input
            type="text"
            className="form-control"
            value={description}
            placeholder="Input your To Do here..."
            onChange={e => setDescription(e.target.value)}
          ></input>
          <button className="btn btn-success">Add</button>
        </form>
      </div>
    </>
  );
}
