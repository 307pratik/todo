import { useState } from "react";
import "./form.css";

const Form = (props) => {
  const [tittle, settittle] = useState("");
  const [detail, setdetails] = useState("");

  const OnDataSubmitHandler = (e) => {
    e.preventDefault();

    const entry = {
      tittle: tittle,
      detail: detail,
    };
    props.getData(entry);
    settittle("");
    setdetails("");
  };

  const tittleChangeHandler = (e) => {
    settittle(e.target.value);
  };
  const detailChangeHandler = (e) => {
    setdetails(e.target.value);
  };
  return (
    <div className="form">
      <h1> TO DO APP</h1>

      <form onSubmit={OnDataSubmitHandler}>
        <div>
          <label>Tittle:</label>

          <input
            type="text"
            onChange={tittleChangeHandler}
            value={tittle}
          ></input>
        </div>
        <div>
          <label>Details:</label>
          <input
            type="text"
            onChange={detailChangeHandler}
            value={detail}
          ></input>
        </div>

        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
};

export default Form;
