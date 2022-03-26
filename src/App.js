import { useState } from "react";
import Todobox from "./components/todobox";
import Form from "./components/form";
import "./App.css";

function App() {
  //States
  const [arryData, setarryData] = useState([]);
  const [error, setError] = useState(null);

  //const [items, setItems] = useState([]);

  // Fetch data from firebase

  const fetchEmployee = () => {
    fetch("https://employee-cf97d-default-rtdb.firebaseio.com/employee.json")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);

        const loadedEmployee = [];

        for (const key in result) {
          loadedEmployee.push({
            id: key,
            tittle: result[key].tittle,
            email: result[key].email,
            phone: result[key].phone,
            designation: result[key].designation,
          });
        }

        setarryData(loadedEmployee);
      });
  };

  //Insert data to the database
  const submitData = (entry) => {
    const y = {
      id: Math.random().toString(),
      tittle: entry.tittle,
      email: entry.email,
      phone: entry.phone,
      designation: entry.designation,
    };
    fetch("https://employee-cf97d-default-rtdb.firebaseio.com/employee.json", {
      method: "post",

      body: JSON.stringify(y),
    });
    fetchEmployee();
  };

  /*
    const data = [
      {
        ...entry,
        id: Math.random().toString(),
      },
    ];
    const x = arryData.concat(data);
    setarryData(x);
  };
*/
  //Delete the entry
  const onDeleteHandler = (id) => {
    //const xyz = arryData;
    const updatedList = arryData.filter((item) => item.id !== id);
    console.log(updatedList);
    setarryData(updatedList);
  };

  let finallist = arryData.map((eachentry) => (
    <Todobox
      key={eachentry.id}
      tittle={eachentry.tittle}
      email={eachentry.email}
      phone={eachentry.phone}
      designation={eachentry.designation}
      delete={onDeleteHandler}
    ></Todobox>
  ));

  return (
    <div>
      <Form getData={submitData}></Form>

      <button onClick={fetchEmployee}>Fetch employee </button>
      {finallist}
    </div>
  );
}
export default App;
