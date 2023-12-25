import React, { useState } from 'react';
import './registrations.css';

export const Registrations = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    num: '',
  });

  const [submissionStatus, setSubmissionStatus] = useState(null);

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
      let res = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          num: formData.num,
        }),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      // Debugging: Log form data before reset
      console.log('Before form data reset:', formData);

      // Reset the form data on successful submission
      setFormData({
        name: '',
        email: '',
        num: '',
      });

      // Debugging: Log form data after reset
      console.log('After form data reset:', formData);

      // Set submission status for displaying notification
      setSubmissionStatus('success');

      // Display a browser notification
      if ('Notification' in window) {
        Notification.requestPermission().then((permission) => {
          if (permission === 'granted') {
            new Notification('Submission Successful', {
              body: 'Your registration has been submitted successfully!',
            });
          }
        });
      }
    } catch (error) {
      console.error('Error during fetch:', error.message);
      // Set submission status for displaying notification
      setSubmissionStatus('error');
    }
  };

  return (
    <>
      <div id="registrations">
        <h1>Let's take a seat at the FlutterFest Celebration!</h1>

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
          <button className="submit-button" type="submit">
            Submit
          </button>
        </form>
        {submissionStatus === 'success' && (
          <p className="submission-message success" style={{color:'green'}}>Submission successful!</p>
        )}
        {submissionStatus === 'error' && (
          <p className="submission-message error" style={{color:'red'}}>Error submitting the form. Please try again.</p>
        )}
      </div>
    </>
  );
};

export default Registrations;
