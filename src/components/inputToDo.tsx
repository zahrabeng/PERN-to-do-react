import { useState } from "react";

export default function InputToDo(): JSX.Element {
  const [description, setDescription] = useState("");

  const onSubmitForm = async (e:any) => {
    e.preventDefault()
    try {
    const body = {description}
    const response = await fetch('http://localhost:5000/todolist', {
        method: "POST",
        headers: {"Content-type":"application/json" },
        body: JSON.stringify(body)
    })
        console.log(response)
    } catch (err:any) {
        console.error(err.message)
    }
  }

  return (
    <>
      <h1 className="text-center m-4">PERN To Do List</h1>
      <div className="form">
        <form className="d-flex" onSubmit={onSubmitForm}>
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
