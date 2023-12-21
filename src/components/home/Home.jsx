import React from "react";
import './home.css';

export const Home = () => {
  return (
    <>
      <div id="home">
         <div className="home-content">
            <h1>Welcome to the Dash Spetial Event</h1>
            <div className="home-content-paragraph">
            Get ready for a fluttering good time as we invite you to the most exciting event of the year - the 🎉 FlutterFest Celebration!
             🚀 with Dash! Join us for a day filled with code, creativity, and community as Dash, the vibrant mascot of Flutter, takes center 
             stage to celebrate the power of open-source development.
            </div>
            <div className="home-content-buttons">
                 <button className="join-us">Join Us</button>
                 <button className="learn-more">Learn More</button>
            </div>
         </div>
      </div>  
    </>
  );
}
export default Home;