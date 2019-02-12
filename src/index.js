import React, { useState } from "react";
import ReactDOM from "react-dom";
import data from "./api";
import "./styles.css";

function App(props) {
  const [filterData, setData] = useState(props.data);

  function searchFilter({ target: { value } }) {
    if (!value.length) return setData(props.data);
    const inputText = value.toLowerCase();
    const filteredList = props.data.filter(data => {
      const _title = data.title.toLowerCase();
      return _title.includes(inputText);
    });
    setData(filteredList);
  }
  return (
    <div className="App">
      <input type="text" placeholder="search" onChange={searchFilter} />
      {filterData.map(data => (
        <p key={data.id}>{data.title}</p>
      ))}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App data={data} />, rootElement);
