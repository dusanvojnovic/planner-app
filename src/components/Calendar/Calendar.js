import { useState } from 'react';

import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction'; // needed for dayClick

const Calendar = () => {
  const [events, setEvents] = useState([]);

  const handleDateClick = (arg) => {
    setEvents();
    alert(new Date(arg.dateStr).toLocaleDateString('en-GB'));
  };

  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      dateClick={handleDateClick}
    />
  );
};

export default Calendar;
