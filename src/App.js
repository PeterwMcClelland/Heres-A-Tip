import React, { useState } from 'react';
import './App.scss';

function App() {
    const [bill, setBill] = useState('');
    const [tip, setTip] = useState(0);
    const [total, setTotal] = useState(0);
    const [splitCount, setSplitCount] = useState(1);

    const calculateTip = (percentage) => {
        let calculatedTip = (bill * (percentage / 100)).toFixed(2);
        let calculatedTotal = (parseFloat(bill) + parseFloat(calculatedTip)).toFixed(2);
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
                <div className="percentage-buttons">
                    <button onClick={() => calculateTip(10)}>10%</button>
                    <button onClick={() => calculateTip(15)}>15%</button>
                    <button onClick={() => calculateTip(20)}>20%</button>
                </div>
            </div>
            <div className="input-group">
                <label>Split Bill:</label>
                <select value={splitCount} onChange={(e) => setSplitCount(e.target.value)}>
                    {Array.from({length: 10}, (_, i) => (
                        <option key={i+1} value={i+1}>{i+1}</option>
                    ))}
                </select>
            </div>
            <div className="results">
                <p><strong>Tip Amount:</strong> ${tip}</p>
                <p><strong>Total Amount:</strong> ${total}</p>
                <p><strong>Per Person:</strong> ${perPersonAmount}</p>
            </div>
        </div>
    );
}

export default App;
