import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

const originalWarn = console.warn;
console.warn = (message, ...args) => {
  if (typeof message === 'string' && message.includes('Support for defaultProps will be removed from memo components')) {
    return;
  }
  originalWarn(message, ...args);
};

const CalendarComponent = () => (
  <FullCalendar
    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
    initialView="dayGridMonth"
    events={[
      { title: 'Event 1', date: '2024-06-01' },
      { title: 'Event 2', date: '2024-06-02' },
    ]}
  />
);

export default CalendarComponent;
