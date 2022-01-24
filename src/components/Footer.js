import React from "react";

import "../Styles/Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer__row">
        <div className="Footer__col-left">
          <h6>&copy; 2019 Plastic.</h6>
        </div>

        <div className="Footer__col-right">
          <h6>Privacy Policy</h6>
          <h6>Cookies Policy</h6>
          <h6>Terms and conditions</h6>
        </div>
      </div>
    </div>
  );
};

export default Footer;
