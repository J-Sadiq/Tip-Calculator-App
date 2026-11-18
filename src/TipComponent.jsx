import dollar from "./assets/images/icon-dollar.svg";
import person from "./assets/images/icon-person.svg";

function TipComponent() {
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
            <input type="number" id="bill" className="input" placeholder="0" />
            <img src={dollar} className="dollar abs" alt="dollar-icon" />
          </div>
          <div className="tip">
            <h3 className="sub-title">Select Tip %</h3>
            <ul className="tip-items">
              <li className="tip-item">5%</li>
              <li className="tip-item">10%</li>
              <li className="tip-item">15%</li>
              <li className="tip-item">25%</li>
              <li className="tip-item">50%</li>
              <li className="tip-item-custom">
                <input type="number" className="custom-tip input" />
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
              placeholder="0"
            />

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
              <p className="tip-amount amount">$0.00</p>
            </div>
            <div className="amount-box">
              <div>
                <h2 className="des-title">Total</h2>
                <p>/ person</p>
              </div>
              <p className="total-amount amount">$0.00</p>
            </div>
          </div>
          <button className="btn-reset">Reset</button>
        </div>
      </article>
    </>
  );
}

export default TipComponent;
