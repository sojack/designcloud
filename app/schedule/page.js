'use client'
import React, { useState, useEffect } from 'react';

import scheduleData from './schedule.json';
import overwritesData from './overwrites.json';
import holidaysData from './holiday.json';
import './schedule.css'


const WeeklyPractices = () => {
  const [weekSchedule, setWeekSchedule] = useState([]);

  useEffect(() => {
      const getMonday = (d) => {
          const date = new Date(d);
          const day = date.getDay(),
              diff = date.getDate() - day + (day === 0 ? -6 : 1); // adjust when day is Sunday
          return new Date(date.setDate(diff));
      };

      const formatDateAsUTC = (date) => {
          return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
      };

      const monday = getMonday(new Date());

      const weekSchedule = Array.from({ length: 7 }).map((_, i) => {
          const day = new Date(monday);
          day.setDate(monday.getDate() + i);
          const dateString = day.toISOString().split('T')[0];
          const holiday = holidaysData.find(holiday => holiday.date === dateString);

          if (holiday) {
              return { day: dateString, isHoliday: true, holidayTitle: holiday.title };
          }

          const dayOfWeek = day.toLocaleDateString('en-US', { weekday: 'long' });
          const dailySchedule = scheduleData[dayOfWeek];
          const overwrites = overwritesData.filter(overwrite => formatDateAsUTC(new Date(overwrite.date)).getTime() === formatDateAsUTC(day).getTime());

          return {
              day: day.toISOString().split('T')[0], // Ensuring the date string is in YYYY-MM-DD format
              isHoliday: false,
              practices: dailySchedule,
              overwrites: overwrites
          };
      });

      setWeekSchedule(weekSchedule);
  }, []);

  return (
      <div>
          {weekSchedule.map(({ day, isHoliday, holidayTitle, practices, overwrites }, index) => (
              <div key={index}>
                  <h1>{new Date(day).toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'long' })}</h1>
                  {isHoliday ? (
                      <p className="holidayTitle">{holidayTitle}</p>
                  ) : (
                      <table>
                          <tbody>
                              {practices && practices.map((practice, i) => {
                                  const overwrite = overwrites.find(o => o.startTime === practice.startTime && !o.cancellation);
                                  if (overwrite) {
                                      return (
                                          <tr className="change" key={i}>
                                              <td>{overwrite.change.startTime} - {overwrite.change.endTime}</td>
                                              <td>{practice.group}</td>
                                              <td>{overwrite.change.location}</td>
                                          </tr>
                                      );
                                  }

                                  return (
                                      <tr className="default" key={i}>
                                          <td>{practice.startTime} - {practice.endTime}</td>
                                          <td>{practice.group}</td>
                                          <td>{practice.location}</td>
                                      </tr>
                                  );
                              })}
                          </tbody>
                      </table>
                  )}
              </div>
          ))}
      </div>
  );
};

export default WeeklyPractices;