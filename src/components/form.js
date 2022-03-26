import { useState } from "react";
import "./form.css";

const Form = (props) => {
  const [tittle, settittle] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [designation, setDesignation] = useState("");

  const OnDataSubmitHandler = (e) => {
    if (tittle && email && phone && designation) {
      e.preventDefault();

      const entry = {
        tittle: tittle,
        email: email,
        phone: phone,
        designation: designation,
      };
      props.getData(entry);
      settittle("");
      setEmail("");
      setPhone("");
      setDesignation("");
    } else {
      e.preventDefault();

      alert("Plese enter valid details");
    }
  };

  const tittleChangeHandler = (e) => {
    settittle(e.target.value);
  };
  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const phoneChangeHandler = (e) => {
    setPhone(e.target.value);
  };
  const designationChangeHandler = (e) => {
    setDesignation(e.target.value);
  };

  return (
    <div className="form">
      <h1>Employee Details Form</h1>

      <form onSubmit={OnDataSubmitHandler}>
        <div>
          <label>Name:</label>
        </div>
        <div>
          <input
            type="text"
            onChange={tittleChangeHandler}
            value={tittle}
          ></input>
        </div>

        <div>
          <label>Email</label>
        </div>
        <div>
          <input
            type="text"
            onChange={emailChangeHandler}
            value={email}
          ></input>
        </div>
        <div>
          <label>Phone No</label>
        </div>
        <div>
          <input
            type="text"
            onChange={phoneChangeHandler}
            value={phone}
          ></input>
        </div>
        <div>
          <label>Designation</label>
        </div>
        <div>
          <input
            type="text"
            onChange={designationChangeHandler}
            value={designation}
          ></input>
        </div>

        <input className="button" type="submit" value="Submit"></input>
      </form>
    </div>
  );
};

export default Form;
