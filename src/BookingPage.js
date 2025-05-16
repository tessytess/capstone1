/* global fetchAPI, submitAPI */
import React, { useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingForm from './BookingForm';
import BookingList from './BookingList';

// Initialize times
function initializeTimes() {
  return fetchAPI(new Date());
}
function timesReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return fetchAPI(new Date(action.date));
    default:
      return state;
  }
}

export default function BookingPage() {
  const navigate = useNavigate();
  const [availableTimes, dispatch] = useReducer(
    timesReducer, undefined, initializeTimes
  );


  const [bookingData, setBookingData] = useState([]);


  const submitForm = async formData => {
    if (await submitAPI(formData)) {

      setBookingData(prev => [...prev, formData]);
      navigate('/reservations/confirmed');
    } else {
      alert('Sorry, that time is no longer available.');
    }
  };

  return (
    <div
      style={{
        paddingTop: '100px',
        padding: '5rem',
        background: '#daf0d9',
        minHeight: '80vh'
      }}
    >
      <h1 style={{ color: 'darkgreen' }}>Reserve Your Table</h1>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        onSubmit={submitForm}
      />

    </div>
  );
}
