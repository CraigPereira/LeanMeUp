import React from "react";
import { Link } from "react-router-dom";

const CalsInfo = () => {
  return (
    <div className="cals-info-wrap">
      <h1>Calories & Macros</h1>
      <p>
        Be it losing that weight or building those guns, calculating your macros
        and calories makes the entire process a lot simpler and easier. We get
        you those values in a few simple clicks.
      </p>
      <Link to="/calsinput" className="button-styles">
        Let's Go
      </Link>
    </div>
  );
};

export default CalsInfo;
