import { useEffect, useRef, useState } from "react";
import dollar from "./assets/images/icon-dollar.svg";
import person from "./assets/images/icon-person.svg";

function TipComponent() {
  const [billInput, setBillInput] = useState("");
  const [tip, setTip] = useState("");
  const [peopleInput, setPeopleInput] = useState("");

  const [billTouched, setBillTouched] = useState(false);
  const [peopleTouched, setPeopleTouched] = useState(false);

  const validInputs =
    Number(billInput) > 0 && Number(tip) >= 0 && Number(peopleInput) > 0;

  const tipPerPerson = validInputs
    ? (Number(billInput) * Number(tip)) / 100 / Number(peopleInput)
    : 0;

  const totalPerPerson = validInputs
    ? Number(billInput) / Number(peopleInput) + tipPerPerson
    : 0;

  function handleBillChange(value) {
    setBillInput(Number(value));
  }
  function handleTipChange(value) {
    setTip(Number(value));
  }
  function handlePeopleChange(value) {
    setPeopleInput(Number(value));
  }

  function handleReset() {
    setBillInput(0);
    setTip(0);
    setPeopleInput(0);
    setBillTouched(false);
    setPeopleTouched(false);
  }

  return (
    <>
      <h1 className="title">
        SPLI
        <br />
        TTER
      </h1>
      <article className="tip-card">
        <div className="inputs-part">
          <div className="bill">
            <label htmlFor="bill" className="sub-title">
              Bill
            </label>
            <input
              type="number"
              id="bill"
              min={1}
              className="input"
              placeholder="0"
              onChange={(e) => handleBillChange(e.target.value)}
              onBlur={() => setBillTouched(true)}
            />
            {billTouched && billInput <= 0 && (
              <p className="error">Can't be zero</p>
            )}
            <img src={dollar} className="dollar abs" alt="dollar-icon" />
          </div>
          <div className="tip">
            <h3 className="sub-title">Select Tip %</h3>
            <ul className="tip-items">
              <li
                className={`tip-item ${tip === 5 ? "active" : ""}`}
                value={5}
                onClick={() => handleTipChange(5)}
              >
                5%
              </li>
              <li
                className={`tip-item ${tip === 10 ? "active" : ""}`}
                value={10}
                onClick={() => handleTipChange(10)}
              >
                10%
              </li>
              <li
                className={`tip-item ${tip === 15 ? "active" : ""}`}
                value={15}
                onClick={() => handleTipChange(15)}
              >
                15%
              </li>
              <li
                className={`tip-item ${tip === 25 ? "active" : ""}`}
                value={25}
                onClick={() => handleTipChange(25)}
              >
                25%
              </li>
              <li
                className={`tip-item ${tip === 50 ? "active" : ""}`}
                value={50}
                onClick={() => handleTipChange(50)}
              >
                50%
              </li>
              <li className="tip-item-custom">
                <input
                  type="number"
                  className="custom-tip input"
                  placeholder="custom"
                  onChange={(e) => handleTipChange(e.target.value)}
                />
              </li>
            </ul>
          </div>
          <div className="people">
            <label htmlFor="people-numbers" className="sub-title">
              Number of People
            </label>
            <input
              type="number"
              id="people-numbers"
              className="input"
              min={1}
              placeholder="0"
              onChange={(e) => handlePeopleChange(e.target.value)}
              onBlur={() => setPeopleTouched(true)}
            />
            {peopleTouched && billInput <= 0 && (
              <p className="error">Can't be zero</p>
            )}
            <img src={person} className="person abs" alt="person-icon" />
          </div>
        </div>
        <div className="result-part">
          <div className="descriptions">
            <div className="amount-box">
              <div>
                <h2 className="des-title">Tip Amount</h2>
                <p>/ person</p>
              </div>
              <p className="tip-amount amount">${tipPerPerson.toFixed(2)}</p>
            </div>
            <div className="amount-box">
              <div>
                <h2 className="des-title">Total</h2>
                <p>/ person</p>
              </div>
              <p className="total-amount amount">
                ${totalPerPerson.toFixed(2)}
              </p>
            </div>
          </div>
          <button className="btn-reset" onClick={handleReset}>
            Reset
          </button>
        </div>
      </article>
    </>
  );
}

export default TipComponent;
