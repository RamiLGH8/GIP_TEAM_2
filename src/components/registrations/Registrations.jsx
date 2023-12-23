import React from "react";
import { useState } from 'react';
import './registrations.css';
export const Registrations = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        num: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
      
        try {
          let res = await fetch("http://localhost:5000/register", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ name: formData.name, email: formData.email, num: formData.num }),
          });
      
          if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
          }
        } catch (error) {
          console.error("Error during fetch:", error.message);
        }
      };
      
    
    return(
        <>
        <div id="registrations">
        <h1>Let's take a seat at the FlutterFest Celebration!</h1>

           {/* <div className="registrations"> */}

            <form onSubmit={handleSubmit}>
             <div className="form-element">
               <label htmlFor="name">Name</label>
                   <input
                       type="text"
                       id="name"
                       name="name"
                       value={formData.name}
                       onChange={handleChange}
                       />
            </div>
            <div className="form-element">
               <label htmlFor="email">Email</label>
                  <input
                     type="email"
                     id="email"
                     name="email"
                     value={formData.email}
                     onChange={handleChange}
                     />
            </div>
            <div className="form-element">
              <label htmlFor="num">Phone Number</label>
                 <input
                    type="tel"
                    id="num"
                    name="num"
                    value={formData.num}
                    onChange={handleChange}
                     />
            </div>
            <button className="submit-button" type="submit">Submit</button>
    </form>
    </div>
        {/* </div> */}
        </>
    );
}
export default Registrations;