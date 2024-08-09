import React from "react";
import "../style/Deposits.css";

function Deposits() {
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
      </div>
    </div>
  );
}

export default Deposits;
