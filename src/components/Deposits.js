import React, { useState } from "react";
import "../style/Deposits.css";

function Deposits() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [reportGenerated, setReportGenerated] = useState(false);

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const generateReport = () => {
    console.log("Generating report for dates:", startDate, endDate);
    setReportGenerated(true);
  };

  return (
    <div>
      <div className="containerd">
        <div className="row">
          <div className="collum">
            <h1>banking deposits</h1>
          </div>
        </div>
        <div className="buttono">
          <button className="account-button">ACCOUNT</button>
          <button>PROFILE</button>
          <button>LOGOUT</button>
        </div>

        <div className="buttons-container">
          <button className="withdraw-button">Withdraw</button>
          <button className="deposit-button">Deposit</button>
          <button className="summary-button">Summary</button>
        </div>
        <div className="containert">
          <h1>Transaction History</h1>
          <div className="input-group-account">
            <div className="input-group">
              <label htmlFor="account-number">Account number:</label>
              <input
                type="text"
                id="account-number"
                value="*********2222"
                readOnly
              />
            </div>
            <div className="input-group-date">
              <div className="input-group">
                <label htmlFor="start-date">Start date:</label>
                <input
                  type="date"
                  id="start-date"
                  value={startDate}
                  onChange={handleStartDateChange}
                />
              </div>

              <div className="input-group">
                <label htmlFor="end-date">End date:</label>
                <input
                  type="date"
                  id="end-date"
                  value={endDate}
                  onChange={handleEndDateChange}
                />
              </div>
            </div>
          </div>
          <button className="generate-button" onClick={generateReport}>
            Generate Report
          </button>
          {reportGenerated && (
            <p className="report-message">Report generated successfully!</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Deposits;
