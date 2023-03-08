import React from "react";
import Products from "../components/Products";

function Home(props) {
  return (
    <div className = "home">
      <Products data = {props.data}/>
    </div>
  );
}

export default Home;
