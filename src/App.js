import { useState } from "react";
import Todobox from "./components/todobox";
import Form from "./components/form";
import "./App.css";

function App() {
  const [arryData, setarryData] = useState([]);

  const OngetData = (entry) => {
    const data = [
      {
        ...entry,
        id: Math.random().toString(),
      },
    ];
    const x = arryData.concat(data);
    setarryData(x);
  };

  const onDeleteHandler = (key) => {
    //const xyz = arryData;
    const updatedList = arryData.filter((item) => item.id !== key);
    console.log(updatedList);
    setarryData(updatedList);
  };

  const finallist = arryData.map((eachentry) => (
    <Todobox
      key={eachentry.id}
      tittle={eachentry.tittle}
      details={eachentry.detail}
      delete={onDeleteHandler}
    ></Todobox>
  ));
  return (
    <div>
      <Form getData={OngetData}></Form>
      {finallist}
    </div>
  );
}

export default App;
