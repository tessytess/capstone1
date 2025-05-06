import React from 'react';

export default function BookingList({ data }) {
  if (!data.length) {
    return <p>No reservations yet.</p>;
  }
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
      <thead>
        <tr>
          {['Date','Time','Guests','Occasion'].map(h => (
            <th key={h} style={{ border: '1px solid #ccc', padding: '8px' }}>{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((b,i) => (
          <tr key={i}>
            <td style={{ border: '1px solid #ccc', padding: '8px' }}>{b.date}</td>
            <td style={{ border: '1px solid #ccc', padding: '8px' }}>{b.time}</td>
            <td style={{ border: '1px solid #ccc', padding: '8px' }}>{b.guests}</td>
            <td style={{ border: '1px solid #ccc', padding: '8px' }}>{b.occasion}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
