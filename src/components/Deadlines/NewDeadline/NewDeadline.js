import { useRef, useState } from 'react';
import { DatePickerInput } from 'rc-datepicker';
import 'rc-datepicker/lib/style.css';

import Button from '../../Button/Button';
import './NewDeadline.css';

const NewDeadline = ({ addNewDeadlineHandler }) => {
  const [date, setDate] = useState();
  const inputRef = useRef();

  const onChange = (jsDate, dateString) => {
    setDate(new Date(dateString).toLocaleDateString('en-GB'));
  };

  return (
    <div className="new-deadline">
      <div className="new-deadline__label">
        <label htmlFor="deadline">Deadline</label>
      </div>
      <input
        className="new-deadline__input"
        type="text"
        id="task"
        name="task"
        ref={inputRef}
      />
      <div className="new-deadline__calendar">
        <DatePickerInput onChange={onChange} displayFormat="DD/MM/YYYY" />
      </div>
      <div>
        <Button
          // className="new-deadline__button"
          onClick={() =>
            addNewDeadlineHandler({ name: inputRef.current.value, date: date })
          }
        >
          add deadline
        </Button>
      </div>
    </div>
  );
};

export default NewDeadline;
