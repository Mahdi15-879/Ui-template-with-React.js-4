import React from "react";

import "../Styles/Body.css";

const images = [
  {
    id: "1",
    imgUrl: "lobelia-home-img_1440_2x.png",
    bodyTitle_1: "Web design",
    bodyTitle_2: "Worldwide",
    bodyDes: "Lobelia Earth website.",
    bgColor: "#000",
  },
  {
    id: "2",
    imgUrl: "strabe-home-img_1440_2x.png",
    bodyTitle_1: "Product and branding design",
    bodyTitle_2: "Worldwide",
    bodyDes: "Sträbe retail community",
    bgColor: "#080452",
  },
  {
    id: "3",
    imgUrl: "hitachi-website_1441_1x.png",
    bodyTitle_1: "Global Website",
    bodyTitle_2: "Worldwide",
    bodyDes: "Hitachi Cooling & Heating",
    bgColor: "#de103c",
  },
  {
    id: "4",
    imgUrl: "iota_1440_2x.png",
    bodyTitle_1: "Web design and branding",
    bodyTitle_2: "Germany",
    bodyDes: "IOTA Foundation.",
    bgColor: "#5711ba",
  },
  {
    id: "5",
    imgUrl: "desigual_1441_1x.png",
    bodyTitle_1: "iPad application",
    bodyTitle_2: "Worldwide",
    bodyDes: "Desigual Look Book.",
    bgColor: "#ebc138",
  },
];

const Body = () => {
  return (
    <div className="Body">
      {images.map((image) => (
        <div className="Body__row" key={image.id}>
          <div
            className="Body__col-left"
            style={{ backgroundColor: `${image.bgColor}` }}
          >
            <figure>
              <img src={require(`../images/${image.imgUrl}`)} alt="Banner" />
            </figure>
          </div>

          <div className="Body__col-right">
            <h4>
              {image.bodyTitle_1}
              <span>-</span>
              {image.bodyTitle_2}
            </h4>

            <h1>{image.bodyDes}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Body;
