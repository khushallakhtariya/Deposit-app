import React, { useState } from "react";
import "../style/Payments.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Payments() {
  const [cardHolderName, setCardHolderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [saveDetails, setSaveDetails] = useState(false);

  const handleCardHolderNameChange = (event) => {
    setCardHolderName(event.target.value);
  };

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };

  const handleExpiryDateChange = (event) => {
    setExpiryDate(event.target.value);
  };

  const handleCvvChange = (event) => {
    setCvv(event.target.value);
  };

  const handleSaveDetailsChange = (event) => {
    setSaveDetails(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle payment submission logic here
    console.log("Card holder name:", cardHolderName);
    console.log("Card number:", cardNumber);
    console.log("Expiry date:", expiryDate);
    console.log("CVV:", cvv);
    console.log("Save details:", saveDetails);
    toast.success("Payment Successful");
  };

  return (
    <div className="pcontainer">
      <ToastContainer />
      <h2>Payment</h2>
      <h3>Choose Payment Method</h3>
      <div className="payment-methods">
        <div className="payment-method">
          <i class="fa-brands fa-cc-visa"></i>
          {/* <img
            src="https://www.visa.com/dam/VCOM/regional/emea/images/visa-logo.svg"
            alt="Visa"
          /> */}
          <p>Pay With Visa Card</p>
        </div>
        <div className="payment-method">
          {/* <img
            src="https://www.paypal.com/en_US/i/logo/paypal_logo.gif"
            alt="PayPal"
          /> */}
          <i class="fa-brands fa-cc-paypal"></i>
          <p>Pay With Paypal</p>
        </div>
        <div className="payment-method">
          {/* <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_Pay_logo.svg/1200px-Amazon_Pay_logo.svg.png"
            alt="Amazon"
          /> */}
          <i class="fa-brands fa-cc-amazon-pay"></i>
          <p>Pay With Amazon</p>
        </div>
        <div className="payment-method">
          {/* <img
            src="https://www.paypal.com/en_US/i/logo/paypal_logo.gif"
            alt="PayPal"
          /> */}
          <i class="fa-brands fa-paypal"></i>
          <p>Pay With Paypal</p>
        </div>
      </div>
      <div className="credit-card-info">
        <h3>Credit Card Information</h3>
        <form onSubmit={handleSubmit}>
          <div className="pform-group">
            <label htmlFor="cardHolderName">Card Holder Name:</label>
            <input
              type="text"
              id="cardHolderName"
              value={cardHolderName}
              onChange={handleCardHolderNameChange}
              required
            />
          </div>
          <div className="pform-group">
            <label htmlFor="cardNumber">Card No:</label>
            <input
              type="text"
              id="cardNumber"
              value={cardNumber}
              onChange={handleCardNumberChange}
              required
            />
          </div>
          <div className="p-group">
            <div className="pform-group">
              <label htmlFor="expiryDate">Expiry Date:</label>
              <input
                type="text"
                id="expiryDate"
                value={expiryDate}
                onChange={handleExpiryDateChange}
                required
              />
            </div>
            <div className="pform-group">
              <label htmlFor="cvv">CVV:</label>
              <input
                type="text"
                id="cvv"
                value={cvv}
                onChange={handleCvvChange}
                required
              />
            </div>
          </div>
          <div className="pform-group">
            <input
              type="checkbox"
              id="saveDetails"
              checked={saveDetails}
              onChange={handleSaveDetailsChange}
            />
            <label htmlFor="saveDetails" className="saveDetails">
              Save My Details For Future Purchases
            </label>
          </div>
          <button type="submit" onClick={handleSubmit}>
            Confirm Payment
          </button>
        </form>
      </div>
    </div>
  );
}

export default Payments;
