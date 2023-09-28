import React, { useState } from "react";
import "./App.scss";

function App() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState(0);
  const [total, setTotal] = useState(0);
  const [splitCount, setSplitCount] = useState(1);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedTip, setSelectedTip] = useState(null);
  const [customTip, setCustomTip] = useState("");

  const calculateTip = (percentage) => {
    setSelectedTip(percentage);
    let calculatedTip = (bill * (percentage / 100)).toFixed(2);
    let calculatedTotal = (
      parseFloat(bill) + parseFloat(calculatedTip)
    ).toFixed(2);
    setTip(calculatedTip);
    setTotal(calculatedTotal);
  };

  const perPersonAmount = (total / splitCount).toFixed(2);

  return (
    <div className="app">
      <h1>Here's A Tip</h1>
      <div className="input-group">
        <label>Bill Amount:</label>

        <input
          type="number"
          value={bill}
          onChange={(e) => setBill(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Select Tip Percentage:</label>
        <div className="tip-selection">
          <div className="percentage-buttons">
            <input
              id="custom-tip-input"
              value={customTip}
              onChange={(e) => {
                setCustomTip(e.target.value);
                calculateTip(parseFloat(e.target.value));
              }}
              placeholder="Custom"
              className="custom-tip-input"
            />

            <button
              className={selectedTip === 10 ? "active" : ""}
              onClick={() => calculateTip(10)}
            >
              10%
            </button>
            <button
              className={selectedTip === 15 ? "active" : ""}
              onClick={() => calculateTip(15)}
            >
              15%
            </button>
            <button
              className={selectedTip === 20 ? "active" : ""}
              onClick={() => calculateTip(20)}
            >
              20%
            </button>
          </div>
        </div>
        <div
          id="splitbill"
          className={`input-group ${showDropdown ? "showDropdown" : ""}`}
        >
          <div onClick={() => setShowDropdown(!showDropdown)}>Split Bill:</div>
          <select
            className="num-people"
            value={splitCount}
            onChange={(e) => setSplitCount(e.target.value)}
          >
            {Array.from({ length: 10 }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>
        <div className="results">
          <p>
            <strong>Tip Amount:</strong> ${tip}
          </p>
          <p>
            <strong>Total Amount:</strong> ${total}
          </p>
          {showDropdown && (
            <p>
              <strong>Per Person:</strong> ${perPersonAmount}
            </p>
          )}
          <div className="news-ticker">
            <div className="news-ticker-content">
              <span className="news-h1">Tipping News: </span> JFK was known for
              not tipping and look what happend to him.{" "}
              <span className="news-h1"> Tipping News: </span> The nation's best
              tippers dine in New Orleans, leaving an average gratuity of 19.7%.{" "}
              <span className="news-h1">Tipping News: </span> Tom Hanks tipped
              $900 for fresh egg rolls.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
