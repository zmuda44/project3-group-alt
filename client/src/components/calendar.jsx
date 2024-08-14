import React, { useState } from 'react';
// import './Calendar.css'; // Optional: for adding styles

function Calendar () {
  const [selectedDate, setSelectedDate] = useState(null);

  const daysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  console.log(currentYear)

  const days = [];
  for (let i = 1; i <= daysInMonth(currentMonth, currentYear); i++) {
    days.push(i);
  }

  const handleClick = (day) => {
    setSelectedDate(day);
    alert(`You clicked on ${day}/${currentMonth + 1}/${currentYear}`);
  };

  return (
    <div className="calendar">
      <div className="calendar-header">
        <h2>{new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' })} {currentYear}</h2>
      </div>
      <div className="calendar-grid">
        {days.map((day) => (
          <div
            key={day}
            className={`calendar-day ${selectedDate === day ? 'selected' : ''}`}
            onClick={() => handleClick(day)}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;

// function Calendar() {
//   return (
//     <div>
//       <h1>Calendar</h1>
//     </div>
//   );
// }

// export default Calendar;
