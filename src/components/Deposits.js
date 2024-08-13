import React, { useState } from "react";
import "../style/Deposits.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Deposits() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const generateReport = () => {
    console.log("Generating report for dates:", startDate, endDate);
    toast.success("Report generated successfully!");
  };

  return (
    <div>
      <ToastContainer />
      <div className="containerd">
        <div className="row">
          <div className="collum">
            <h1>Banking Deposits</h1>
          </div>
        </div>
        <div className="buttono">
          <button className="account-button">ACCOUNT</button>
          <button>PROFILE</button>
          <button>LOGOUT</button>
        </div>

        <div className="buttons-container">
          <button className="withdraw-button">
            <i className="fa-solid fa-money-bill-transfer"></i>Withdraw
          </button>
          <button className="deposit-button">
            <i className="fa-regular fa-file-code"></i>Deposit
          </button>
          <button className="summary-button">
            <i className="fa-solid fa-list"></i>Summary
          </button>
        </div>
        <div className="containert">
          <p>Transaction History</p>

          <div className="input-group-st">
            <div>
              <label htmlFor="account-number">Account number:</label>
              <input type="text" id="account-number" value="*********2222" readOnly />
            </div>

            <div>
              <label htmlFor="start-date">Start date:</label>
              <input
                type="date"
                id="start-date"
                value={startDate}
                onChange={handleStartDateChange}
              />
            </div>

            <div>
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
      </div>
      <button className="generate-button" onClick={generateReport}>
        Generate Report
      </button>
    </div>
  );
}

export default Deposits;