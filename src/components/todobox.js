import "./todobox.css";

function Todo(props) {
  return (
    <div className="box">
      <h1>{props.tittle}</h1>
      <p>{props.email}</p>
      <p>{props.phone}</p>
      <p>{props.designation}</p>
      <button onClick={props.delete}>Delete</button>
    </div>
  );
}

export default Todo;
