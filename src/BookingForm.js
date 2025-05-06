
import React, { useState } from 'react';

/* global submitAPI */
export default function BookingForm({ availableTimes, dispatch, onSubmit }) {
  const [date, setDate]       = useState('');
  const [time, setTime]       = useState('');
  const [guests, setGuests]   = useState(1);
  const [occasion, setOccasion] = useState('Birthday');

  const handleDateChange = e => {
    setDate(e.target.value);
    dispatch({ type:'UPDATE_TIMES', date:e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ date, time, guests, occasion });
  };

  return (
    <form onSubmit={handleSubmit} style={{ display:'grid', gap:'1rem', maxWidth:'300px' }}>
      <label>
        Choose date
        <input type="date" value={date} onChange={handleDateChange} required />
      </label>

      <label>
        Choose time
        <select value={time} onChange={e=>setTime(e.target.value)} required>
          <option value="">-- Select time --</option>
          {availableTimes.map(t=><option key={t} value={t}>{t}</option>)}
        </select>
      </label>

      <label>
        Number of guests
        <input
          type="number" min="1" max="10"
          value={guests} onChange={e=>setGuests(e.target.value)}
          required
        />
      </label>

      <label>
        Occasion
        <select value={occasion} onChange={e=>setOccasion(e.target.value)}>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
      </label>

      <button type="submit">Submit reservation</button>
    </form>
  );
}
