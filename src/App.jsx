import { useState } from 'react'
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "antd";
import InputCompo from "./inputComponent.jsx";

function App() {
  const [initial, setinitial] = useState();
  const [getData, setgetData] = useState([]);

  const btnFunc = (e) => {
    const data = [...initial, getData];
  };
  const inputFunc = (i) => {
    return setinitial(i.target.value);
  };

  return (
    <>
      <div className="container">
        <div className="topTextHreder">
          <div className="textHeader">
            <h1>toDo List</h1>
          </div>
        </div>
        <div className="topInput">
          <div className="input">
            <InputCompo onClick={inputFunc} />
            {/* <Space direction="vertical" size="middle">
              <Input placeholder="print ToDo List" />
            </Space> */}
            {/* <input type="text"  /> */}
            <Button type="primary " onClick={btnFunc}>
              submit
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
{
}
