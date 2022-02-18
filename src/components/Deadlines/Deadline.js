import DatePicker from 'sassy-datepicker';

import './Deadline.css';

const Deadline = (props) => {
	const onChange = (date) => {
		console.log(date.toString());
	};

	return (
		<div className='deadline'>
			<div className='deadline__name'>
				<p>{props.deadlineName}</p>
			</div>
			<div className='deadline__calendar'>
				<DatePicker onChange={onChange} />
			</div>
		</div>
	);
};

export default Deadline;
