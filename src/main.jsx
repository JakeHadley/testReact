/* eslint-disable react-refresh/only-export-components */
// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import React from "react";
// import ReactDOM from "react-dom";

const HabitChart = (props) => {
  const [rangeStart, setRangeStart] = React.useState(0)
  const [rangeEnd, setRangeEnd] = React.useState(6)

  let numArray = []
  for (let i = rangeStart; i <= rangeEnd; i++) {
    numArray.push(i)
  }

  const onPrevClick = () => {
    setRangeEnd((prev) => prev -= 1)
    setRangeStart((prev) => prev -= 1)
  }

  const onNextClick = () => {
    setRangeEnd((prev) => prev += 1)
    setRangeStart((prev) => prev += 1)
  }

  return (
    <div>
      <table id="chart">
        <tbody>
          {Array(7).fill().map((row, i) => {
            return <tr>
                {Array(7).fill().map((col, j) => {
                  if (props.habitData[j + rangeStart] < 7-i) {
                    return <td></td>
                  }
                  return <td class='done'></td>
                })}
              </tr>
          })}
          {numArray.map((item) => {
            return <td>{item + 1}</td>
          })}
        </tbody>
      </table>
      <button onClick={onPrevClick} disabled={rangeStart === 0} id="navPrevBtn">Previous</button>
      <button onClick={onNextClick} disabled={rangeEnd === props.habitData.length - 1} id="navNextBtn">Next</button>
    </div>
  );
};

const style = `
td {
  border: 1px solid black;
  width: 20px;
  height: 20px;
}
.done {
  background-color: green;
}`;

const styleElement = document.createElement("style");
styleElement.textContent = style;
document.head.appendChild(styleElement);

document.body.innerHTML = "<div id='root'></div>";
const root = createRoot(document.getElementById("root"));
root.render(<HabitChart habitData={ [0, 3, 2, 5, 3, 2, 1, 7, 0, 5, 1, 6, 1, 6, 1]} />);