import React from "react";

function Table() {
  const activeDeposits = [
    {
      property: "771 Lost Round",
      moveInDate: "25 February 2020",
      rent: "$3000",
      deposit: "$9000",
      status: " Processing",
      active: false,
    },
    {
      property: "1491 Jagged Arbor",
      moveInDate: "12 March 2020",
      rent: "$2300",
      deposit: "$4600",
      status: "Payment failed",
      active: true,
    },
  ];
  return (
    <div>
      <div className="table-container">
        <div className="active">
          <p className="active-deposits">Active Deposits</p>
          <span className="add-deposit-span">
            <span>2</span>
          </span>
          <a href="/add-deposit">
            <i class="fa-solid fa-plus"></i>
          </a>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Property</th>
              <th>Move In date</th>
              <th>Rent</th>
              <th>Deposit</th>
              <th>Status</th>

              <th className="line">&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            {activeDeposits.map((deposit, index) => (
              <tr key={index}>
                <td>{deposit.property}</td>
                <td>{deposit.moveInDate}</td>
                <td>{deposit.rent}</td>
                <td>{deposit.deposit}</td>
                <td>{deposit.status}</td>
                <td>
                  <span
                    className={`status-indicator ${
                      deposit.active ? "active" : "inactive"
                    }`}
                  ></span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="button">ALL ACTIVE DEPOSITS</button>
      </div>
      <div className="dtable-container">
        <div className="dactive">
          <p className="dactive-deposits">Deactive Deposits</p>
          <span className="add-deposit2">8</span>
        </div>
        <table className="dtable">
          <thead>
            <tr>
              <th>Property</th>
              <th>Move In date</th>
              <th>Rent</th>
              <th>Deposit</th>
              <th>Status</th>

              <th className="dline">&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            {activeDeposits.map((deposit, index) => (
              <tr key={index}>
                <td>{deposit.property}</td>
                <td>{deposit.moveInDate}</td>
                <td>{deposit.rent}</td>
                <td>{deposit.deposit}</td>
                <td>{deposit.status}</td>
                <td>
                  <span
                    className={`status-indicator ${
                      deposit.active ? "active" : "inactive"
                    }`}
                  ></span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="button2">ALL CLOSED DEPOSITS</button>
      </div>
    </div>
  );
}

export default Table;
