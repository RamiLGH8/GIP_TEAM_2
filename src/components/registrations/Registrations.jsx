import React from "react";
import { useState } from 'react';
import './registrations.css';
export const Registrations = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
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
              <label htmlFor="phoneNumber">Phone Number</label>
                 <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
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