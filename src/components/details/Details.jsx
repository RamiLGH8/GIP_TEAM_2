import React from "react";
import './details.css';
export const  Details = () =>{
    return(
       <> 
        <div className="details">
            <div className="details-content">
                <h1>Welcome to the Dash Spetial Event</h1>
                <div className="details-content-paragraph">
                <div className="date">
                    <p>📅 Date: [Event Date]</p>
                    <p>🕒 Time: [Event Time]</p>
                    <p>📍 Location: [Event Venue]</p>
                </div>
                <p>Highlights:</p>
                <p>🎨 Code & Create Workshops: Engage in hands-on workshops led by Flutter experts. From beginner to advanced levels, these sessions will empower you to master Flutter development and unleash your creativity.</p>
                <p>🎤 Lightning Talks: Hear from industry leaders and Flutter enthusiasts as they share their experiences, tips, and tricks in a series of quick and impactful lightning talks.</p>
                <p>🏆 Flutter Hackathon: Compete in the FlutterFest Hackathon for a chance to showcase your skills, win exciting prizes, and gain recognition from the Flutter community.</p>
                </div>
            </div>
        </div>
       </> 
    );

}
export default Details;