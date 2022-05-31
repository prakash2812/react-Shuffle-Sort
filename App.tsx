import * as React from 'react';
import './style.css';

export default function App() {
  const [data, setData] = React.useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  const handleShuffle = (data) => {
    let temp;
    let newdata = data.slice();
    let length = newdata.length;
    while (0 != length) {
      let randomIndex = Math.floor(Math.random() * length);
      length -= 1;
      temp = newdata[length];
      newdata[length] = newdata[randomIndex];
      newdata[randomIndex] = temp;
    }
    setData(newdata);
  };

  const handleSort = () => {
    const sortArr = data.sort((a, b) => a - b);
    setData([...sortArr]);
  };

  return (
    <div>
      <span className="header">Shuffle and Sort</span>
      <div className="main-container">
        <ul className="block-container">
          {data.map((item, index) => (
            <li
              key={index}
              className="blocks"
              style={{ display: 'flex', alignItems: 'center' }}
            >
              {item}
            </li>
          ))}
          <span>Shuffle and Sort by (Omprakash)</span>
        </ul>
        <div className="button-container">
          <button className="button-group" onClick={() => handleShuffle(data)}>
            Shuffle
          </button>
          <button className="button-group sort-btn" onClick={handleSort}>
            Sort
          </button>
        </div>
      </div>
    </div>
  );
}
