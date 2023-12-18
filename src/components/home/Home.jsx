import React from "react";
import './home.css';
import Navigationbar from "../navbar/Navbar";

export const Home = () => {
  return (
    <>
    <Navigationbar />
    <div className="home">
      <h1>Home</h1>
    </div>
    </>
  );
}
export default Home;