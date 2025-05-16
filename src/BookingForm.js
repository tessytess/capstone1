/* global submitAPI */
import React, { useState, useRef, useEffect } from 'react';

export default function BookingForm({ availableTimes, dispatch, onSubmit }) {
  const formRef = useRef(null);

  const [date, setDate]         = useState('');
  const [time, setTime]         = useState('');
  const [guests, setGuests]     = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  const [isFormValid, setIsFormValid] = useState(false);

  // Set the min attribute on date to today
  const today = new Date().toISOString().split('T')[0];

  // Whenever any field changes, re-validate the form
  useEffect(() => {
    if (formRef.current) {
      setIsFormValid(formRef.current.checkValidity());
    }
  }, [date, time, guests, occasion]);

  const handleDateChange = e => {
    const newDate = e.target.value;
    setDate(newDate);
    dispatch({ type: 'UPDATE_TIMES', date: newDate });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ date, time, guests, occasion });
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      style={{ display: 'grid', gap: '1rem', maxWidth: '300px' }}
    >
      <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          value={date}
          onChange={handleDateChange}
          required
          min={today}
        />

      <label htmlFor="res-time">Choose time</label>
        <select
          value={time}
          onChange={e => setTime(e.target.value)}
          required
        >
          <option value="">-- Select time --</option>
          {availableTimes.map(t => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>


      <label>
        Number of guests
        <input
          type="number"
          min="1" max="10"
          value={guests}
          onChange={e => setGuests(e.target.value)}
          required
        />
      </label>

      <label>
        Occasion
        <select
          value={occasion}
          onChange={e => setOccasion(e.target.value)}
          required
        >
          <option value="">-- Select occasion --</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
      </label>

      <button type="submit" disabled={!isFormValid}>
        Submit reservation
      </button>
    </form>
  );
}
