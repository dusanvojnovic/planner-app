import { useState, useRef } from 'react';

import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction'; // needed for dayClick

import BasicModal from '../Modal/Modal';

const Calendar = () => {
  const [openModal, setOpenModal] = useState(false);
  const [date, setDate] = useState();
  const calendarRef = useRef(null);

  const closeModalHandler = () => {
    setOpenModal(false);
  };

  const handleDateClick = (arg) => {
    setOpenModal(true);
    setDate(arg.dateStr);
    // alert(new Date(arg.dateStr).toLocaleDateString('en-GB'));
  };

  const onEventAdded = (event) => {
    let calendarApi = calendarRef.current.getApi();
    calendarApi.addEvent(event);
  };

  return (
    <>
      {openModal && (
        <BasicModal
          onEventAdded={onEventAdded}
          onCloseModal={closeModalHandler}
          date={date}
        />
      )}
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        ref={calendarRef}
        dateClick={handleDateClick}
        editable={true}
        selectable={true}
        eventColor="var(--color-tertiary)"
      />
    </>
  );
};

export default Calendar;
