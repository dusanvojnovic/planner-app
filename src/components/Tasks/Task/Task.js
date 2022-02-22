import { useState } from 'react';

import { IconContext } from 'react-icons';
import { RiCheckboxCircleLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';

import './Task.css';

const Task = (props) => {
	const [taskDone, setTaskDone] = useState(false);

	const markAsDoneHandler = () => {
		setTaskDone((prevState) => !prevState);
	};

	const removeTaskHandler = () => {};

	return (
		<div className={taskDone ? 'task done' : 'task'}>
			<div className='task-name'>{props.taskName}</div>
			<IconContext.Provider value={{ size: '2rem', className: 'task-icons' }}>
				<div className='task-buttons'>
					{taskDone ? (
						<p className='task-done'>Done!</p>
					) : (
						<div>
							<span onClick={removeTaskHandler}>
								<MdOutlineCancel />
							</span>
						</div>
					)}
					<div>
						<span onClick={markAsDoneHandler}>
							<RiCheckboxCircleLine />
						</span>
					</div>
				</div>
			</IconContext.Provider>
		</div>
	);
};

export default Task;
