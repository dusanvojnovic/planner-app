import { DatePickerInput } from 'rc-datepicker';

import 'rc-datepicker/lib/style.css';
import './Deadline.css';

const Deadline = (props) => {
  const onChange = (jsDate, dateString) => {
    console.log(new Date(dateString).toLocaleDateString('en-GB'));
  };

  return (
    <div className="deadline">
      <div className="deadline__name">
        <p>{props.name}</p>
      </div>
      {/* <div></div> */}
      <div className="deadline__date">
        {props.date}
        {/* <DatePickerInput onChange={onChange} displayFormat="DD/MM/YYYY" /> */}
      </div>
    </div>
  );
};

export default Deadline;
