import React, { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import { CustomCursor } from "./components/CustomCursor";
import Body from "./components/Body";
import View from "./components/View";
import Footer from "./components/Footer";

import "./App.css";

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

function App() {
  const [navOnView, setNavOnView] = useState(false);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      } else {
        entry.target.classList.remove("active");
      }
    });
  });

  const viewObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setNavOnView(true);
      } else {
        setNavOnView(false);
      }
    });
  });

  useEffect(() => {
    document
      .querySelectorAll(".App section")
      .forEach((section) => observer.observe(section));
    viewObserver.observe(document.getElementById("View"));
    console.log(navOnView);
  });

  return (
    <div className="App">
      <CustomCursor />
      <Navbar onView={navOnView} />
      <Header />
      {images.map((image) => (
        <Body
          key={image.id}
          imgUrl={image.imgUrl}
          bodyTitle_1={image.bodyTitle_1}
          bodyTitle_2={image.bodyTitle_2}
          bodyDes={image.bodyDes}
          bgColor={image.bgColor}
          id={image.id}
        />
      ))}
      <View />
      <Footer />
    </div>
  );
}

export default App;
