import React, { useState } from "react";
import ReactDOM from "react-dom";
import data from "./api";

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
      <input
        type="text"
        placeholder="type your search here"
        onChange={searchFilter}
        style={{
          marginLeft: "40%",
          border: "1px gray solid",
          borderRadius: 10,
          padding: 10,
          width: 190,
          height: 30,
          fontSize: 20
        }}
      />
      <div
        style={{
          backgroundColor: "salmon"
        }}
      >
        <ul>
          {filterData.map(data => (
            <li
              key={data.id}
              style={{
                color: "black",
                margin: 20,
                listStyle: "none"
              }}
            >
              <input
                type="checkbox"
                checked={data.completed}
                name={data.id}
                value={data.title}
              />{" "}
              <span
                style={{
                  textDecorationLine: data.completed && "line-through"
                }}
              >
                {data.title}
              </span>
              <br />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App data={data} />, rootElement);
