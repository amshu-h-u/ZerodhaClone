import React from "react";
function Team() {
  return (
    <div className="container mb-5">
      <div className="text-center border-top mt-3 p-5">
        <h1>People</h1>
      </div>
      <div className="row">
        <div className="col-6 p-5 text-center">
          <img
            src="Media/Images/nithinKamath.jpg"
            alt="ceo"
            style={{ borderRadius: "100%", width: "50%" }}
          ></img>
          <h5 className=" text-muted mt-3">Nithin Kamath</h5>
          <h6 className="text-muted">Founder,CEO</h6>
        </div>
        <div className="col-6 p-4 mt-5 text-muted fs-5">
          <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the
          hurdles he faced during his decade long stint as a trader.Today,
          Zerodha has changed the landscape of the Indian broking industry.  </p>
          <p>He
          is a member of the SEBI Secondary Market Advisory Committee (SMAC) and
          the Market Data Advisory Committee (MDAC).  </p>
          <p >Playing basketball is his zen.</p><p> Connect on <a href="#">Homepage</a> / <a href="#">TradingQnA</a> / <a href="#">Twitter</a></p>
        </div>
      </div>
    </div>
  );
}

export default Team;
