import React from "react";

import "../Styles/Body.css";

const Body = ({ imgUrl, bodyTitle_1, bodyTitle_2, bodyDes, bgColor, id }) => {
  return (
    <section className="Body" id={id}>
      <div className="Body__row">
        <div
          className="Body__col-left"
          style={{ background: `${bgColor}` }}
        >
          <figure>
            <img src={require(`../images/${imgUrl}`)} alt="Banner" />
          </figure>
        </div>

        <div className="Body__col-right">
          <h4>
            {bodyTitle_1}
            <span>-</span>
            {bodyTitle_2}
          </h4>

          <h1>{bodyDes}</h1>
        </div>
      </div>
    </section>
  );
};

export default Body;
