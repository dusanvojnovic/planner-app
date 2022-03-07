import { useState, useRef } from 'react';

import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction'; // needed for dayClick

import BasicModal from '../Modal/Modal';

import './Calendar.css';

const Calendar = () => {
  const [openModal, setOpenModal] = useState(false);
  const [date, setDate] = useState();
  const [selectedColor, setSelectedColor] = useState();
  const calendarRef = useRef(null);

  const closeModalHandler = () => {
    setOpenModal(false);
  };

  const selectColor = (color) => {
    setSelectedColor(color);
  };

  const handleDateClick = (arg) => {
    setOpenModal(true);
    setDate(arg.dateStr);
    // alert(new Date(arg.dateStr).toLocaleDateString('en-GB'));
  };

  const onEventAdded = (event) => {
    let calendarApi = calendarRef.current.getApi();
    calendarApi.addEvent({ ...event, color: selectedColor });
  };

  return (
    <>
      {openModal && (
        <BasicModal
          onEventAdded={onEventAdded}
          onCloseModal={closeModalHandler}
          selectColor={selectColor}
          date={date}
        />
      )}
      <div className="calendar">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          ref={calendarRef}
          dateClick={handleDateClick}
          editable={true}
          selectable={true}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,dayGridWeek,dayGridDay',
          }}

          // eventColor={selectedColor}
        />
      </div>
    </>
  );
};

export default Calendar;
