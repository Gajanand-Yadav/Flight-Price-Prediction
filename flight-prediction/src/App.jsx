// src/FlightPricePredictor.jsx

import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function FlightPricePredictor() {
  const [formData, setFormData] = useState({
    airline: '',
    source_city: '',
    departure_time: '',
    stops: '',
    arrival_time: '',
    destination_city: '',
    class: '',
    departure_date: '',
  });

  const [prediction, setPrediction] = useState(null);
  
  // Create a reference for the result container
  const resultRef = useRef(null);

  // Watch for changes to the prediction state and scroll smoothly
  useEffect(() => {
    if (prediction !== null && resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [prediction]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:5000/predict', formData);
      setPrediction(response.data.prediction);
    } catch (error) {
      console.error('Error fetching prediction:', error);
    }
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Flight Price Prediction</h1>
      
      <form onSubmit={handleSubmit} className="form-container">
        
        {/* Airline Field */}
        <div className="form-group">
          <label className="form-label">Airline</label>
          <select
            name="airline"
            value={formData.airline}
            onChange={handleChange}
            className="form-input"
          >
            <option value="">Select Airline</option>
            <option value="SpiceJet">SpiceJet</option>
            <option value="AirAsia">AirAsia</option>
            <option value="Vistara">Vistara</option>
            <option value="GO_FIRST">GO_FIRST</option>
            <option value="Indigo">Indigo</option>
            <option value="Air_India">Air India</option>
          </select>
        </div>

        {/* Source City Field */}
        <div className="form-group">
          <label className="form-label">Source City</label>
          <select
            name="source_city"
            value={formData.source_city}
            onChange={handleChange}
            className="form-input"
          >
            <option value="">Select Source City</option>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Kolkata">Kolkata</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Chennai">Chennai</option>
          </select>
        </div>

        {/* Departure Time Field */}
        <div className="form-group">
          <label className="form-label">Departure Time</label>
          <select
            name="departure_time"
            value={formData.departure_time}
            onChange={handleChange}
            className="form-input"
          >
            <option value="">Select Departure Time</option>
            <option value="Evening">Evening</option>
            <option value="Early_Morning">Early Morning</option>
            <option value="Morning">Morning</option>
            <option value="Afternoon">Afternoon</option>
            <option value="Night">Night</option>
            <option value="Late_Night">Late Night</option>
          </select>
        </div>

        {/* Stops Field */}
        <div className="form-group">
          <label className="form-label">Stops</label>
          <select
            name="stops"
            value={formData.stops}
            onChange={handleChange}
            className="form-input"
          >
            <option value="">Select Stops</option>
            <option value="zero">Zero</option>
            <option value="one">One</option>
            <option value="two_or_more">Two or More</option>
          </select>
        </div>

        {/* Arrival Time Field */}
        <div className="form-group">
          <label className="form-label">Arrival Time</label>
          <select
            name="arrival_time"
            value={formData.arrival_time}
            onChange={handleChange}
            className="form-input"
          >
            <option value="">Select Arrival Time</option>
            <option value="Night">Night</option>
            <option value="Morning">Morning</option>
            <option value="Early_Morning">Early Morning</option>
            <option value="Afternoon">Afternoon</option>
            <option value="Evening">Evening</option>
            <option value="Late_Night">Late Night</option>
          </select>
        </div>

        {/* Destination City Field */}
        <div className="form-group">
          <label className="form-label">Destination City</label>
          <select
            name="destination_city"
            value={formData.destination_city}
            onChange={handleChange}
            className="form-input"
          >
            <option value="">Select Destination City</option>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Kolkata">Kolkata</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Chennai">Chennai</option>
          </select>
        </div>

        {/* Class Field */}
        <div className="form-group">
          <label className="form-label">Class</label>
          <select
            name="class"
            value={formData.class}
            onChange={handleChange}
            className="form-input"
          >
            <option value="">Select Class</option>
            <option value="Economy">Economy</option>
            <option value="Business">Business</option>
          </select>
        </div>

        {/* Departure Date Field */}
        <div className="form-group">
          <label className="form-label">Departure Date</label>
          <input
            type="date"
            name="departure_date"
            min={new Date().toISOString().split('T')[0]}
            value={formData.departure_date}
            onChange={handleChange}
            className="form-input"
          />
        </div>

        <button type="submit" className="submit-btn">
          Predict
        </button>
      </form>

      {/* Attached the ref to this container */}
      {prediction !== null && (
        <div ref={resultRef} className="prediction-result">
          <h2 className="prediction-text">Your Flight Price: ₹{prediction}</h2>
        </div>
      )}
    </div>
  );
}

export default FlightPricePredictor;