import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Slider from "../components/Slider";

function Home(props) {
  return (
    <div className = "home">
      <Products data = {props.data}/>
    </div>
  );
}

export default Home;
