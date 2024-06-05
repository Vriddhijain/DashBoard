import React from 'react';
import styled from 'styled-components';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const CalendarContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const Calendar = () => {
    const events = [
        {
          title: 'Meeting',
          start: new Date('2024-06-10T10:00:00'),
          end: new Date('2024-06-10T12:00:00'),
        },
        {
          title: 'Conference',
          start: new Date('2024-06-15T09:00:00'),
          end: new Date('2024-06-15T17:00:00'),
        },
        // Add more events as needed
      ];
      

  return (
    <CalendarContainer>
      <BigCalendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </CalendarContainer>
  );
};

export default Calendar;
