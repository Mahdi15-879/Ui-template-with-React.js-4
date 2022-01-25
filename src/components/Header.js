import React from "react";
import { Typewriter } from "react-simple-typewriter";

import "../Styles/Header.css";

const Header = () => {
  return (
    <section className="Header" id="Header">
      <h3>Plastic is an award-winning international agency.</h3>
      <h1>We create remarkable</h1>
      <h1>
        <Typewriter
          loop
          typeSpeed={70}
          deleteSpeed={60}
          delaySpeed={2000}
          words={[
            "digital products.",
            "digital-first brands.",
            "digital experiences",
          ]}
        />
      </h1>
      <button>Our showreel</button>
    </section>
  );
};

export default Header;
