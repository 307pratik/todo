import "./todobox.css";

function Todo(props) {
  return (
    <div className="box" onClick={props.delete}>
      <div>
        <h1>{props.tittle}</h1>
        <p>{props.details}</p>
      </div>
    </div>
  );
}

export default Todo;
