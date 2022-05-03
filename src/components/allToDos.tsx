import { useState, useEffect } from "react";
import toDos from "./ToDosInt";
 
export default function AllToDos(): JSX.Element {
  const[toDos, setToDos] = useState<toDos[]>([])

  useEffect(() => {
  const getToDos = async () => {
    try {
      const response = await fetch("http://localhost:5000/todolist")
      const jsonData = await response.json()
 
      setToDos(jsonData.data)
    } catch (err:any) {
      console.error(err.message)
    }
  }
    getToDos();
 }, [])


  return (
    <>
    { console.log(toDos)}
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
      {toDos.map(toDo => (
        <tr key={toDo.id}>
          <td>{toDo.description}</td>
          <td>Edit</td>
          <td>Delete</td>
        </tr>
      ))}
    </tbody>
  </table>
      </div>
    </>
  );
}
