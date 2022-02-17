import { IconContext } from 'react-icons';
import { BiPlusCircle } from 'react-icons/bi';

import Button from '../Button/Button';
import Task from '../Task/Task';

import './DailyTasks.css';

const DailyTask = (props) => {
	const today = new Date().toLocaleDateString('en-GB');

	return (
		<div className='tasks-list'>
			<div className='tasks-list__header'>
				<div className='date'>
					<p>{today}</p>
				</div>
				<IconContext.Provider value={{ size: '2rem' }}>
					<Button>
						<BiPlusCircle />
						&nbsp; add new task
					</Button>
				</IconContext.Provider>
			</div>
			{props.tasks.map((task) => (
				<Task taskName={task} />
			))}
		</div>
	);
};

export default DailyTask;
