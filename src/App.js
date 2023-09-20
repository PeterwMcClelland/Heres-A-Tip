import React, { useState } from 'react';
import './App.scss';

function App() {
    const [bill, setBill] = useState('');
    const [tip, setTip] = useState(0);
    const [total, setTotal] = useState(0);

    const calculateTip = (percentage) => {
        let calculatedTip = (bill * (percentage / 100)).toFixed(2);
        let calculatedTotal = (parseFloat(bill) + parseFloat(calculatedTip)).toFixed(2);
        setTip(calculatedTip);
        setTotal(calculatedTotal);
    };

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
            <div className="results">
                <p><strong>Tip Amount:</strong> ${tip}</p>
                <p><strong>Total Amount:</strong> ${total}</p>
            </div>
        </div>
    );
}

export default App;


