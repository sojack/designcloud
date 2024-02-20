'use client'
import React, { useState, useEffect } from 'react';

import scheduleData from './schedule.json';
import overwritesData from './overwrites.json';
import holidaysData from './holiday.json';
import './schedule.css'


// Helper functions
const formatDate = (date) => {
  // Adjusted to directly use the local date components
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // JavaScript months are 0-indexed
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const formatTime = (startTime, endTime) => {
  const start = new Date(`2024-01-01T${startTime}`).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const end = new Date(`2024-01-01T${endTime}`).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  return `${start} - ${end}`;
};

const compareTimes = (a, b) => {
  return a.startTime.localeCompare(b.startTime);
};

const Practice = ({ startTime, endTime, group, location, isChange }) => (
  <tr className={isChange ? 'change' : 'default'}>
    <td>{formatTime(startTime, endTime)}</td>
    <td>{group}</td>
    <td>{location}</td>
  </tr>
);

const WeeklyPractices = () => {
  const [weekOffset, setWeekOffset] = useState(0);
  const [currentWeek, setCurrentWeek] = useState([]);

  useEffect(() => {
    const today = new Date();
    const firstDayOfWeek = today.getDate() - today.getDay() + 1 + weekOffset * 7; // Adjust to start the week on Monday
    const monday = new Date(today.setDate(firstDayOfWeek));

    const week = Array.from({ length: 7 }, (_, i) => {
      const day = new Date(monday);
      day.setDate(monday.getDate() + i);
      return day;
    });

    setCurrentWeek(week);
  }, [weekOffset]);

  const navigateWeek = (direction) => {
    setWeekOffset(weekOffset + direction);
  };

  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => navigateWeek(-1)}>Previous Week</button>
        <button onClick={() => navigateWeek(1)} style={{ marginLeft: '10px' }}>Next Week</button>
      </div>
      {currentWeek.map((date, index) => {
        const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
        const dateString = formatDate(date);
        const isHoliday = holidaysData.find(holiday => {
          // Adjust parsing to handle noon to avoid timezone issues
          const holidayDate = new Date(holiday.date + 'T12:00:00');
          return formatDate(holidayDate) === dateString;
        });
        let daySchedules = scheduleData.filter(schedule => schedule.day === dayName);
        const overwrites = overwritesData.filter(overwrite => formatDate(new Date(overwrite.date + 'T12:00:00')) === dateString);

        // Sort practices by start time
        daySchedules = daySchedules.sort(compareTimes);

        return (
          <div key={index}>
            <h1>{dayName}</h1>
            <h2>{dateString}</h2>
            <table>
              <tbody>
                {isHoliday && !overwrites.length ? (
                  <tr className="holidayTitle">
                    <td colSpan="3">{isHoliday.title}</td>
                  </tr>
                ) : (
                  daySchedules.map((schedule, idx) => {
                    const overwrite = overwrites.find(o => o.group === schedule.group && o.startTime === schedule.startTime);
                    if (overwrite && overwrite.cancellation) {
                      return null;
                    } else if (overwrite && overwrite.change) {
                      return (
                        <Practice
                          key={idx}
                          startTime={overwrite.change.startTime}
                          endTime={overwrite.change.endTime}
                          group={schedule.group}
                          location={overwrite.change.location}
                          isChange={true}
                        />
                      );
                    }
                    return (
                      <Practice
                        key={idx}
                        {...schedule}
                        isChange={false}
                      />
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
};

export default WeeklyPractices;