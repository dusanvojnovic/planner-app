import { useState } from 'react';

import DailyTasks from '../DailyTasks/DailyTasks';
import MainBoxButton from './MainBoxButton';
import './MainBox.css';

const tasks = [
	'idi u nabavku',
	'uci react',
	'uci react',
	'uci react',
	'uci react',
	'uci react',
	'uci react',
];

const MainBox = (props) => {
	const [activeBox, setActiveBox] = useState('dailyTask');

	return (
		<div className='main-box'>
			<div className='main-box__buttons'>
				<div>
					<MainBoxButton text='Daily tasks' />
				</div>
				<div>
					<MainBoxButton text='Deadlines' />
				</div>
				<div>
					<MainBoxButton text='Calendar' />
				</div>
			</div>
			<div className='main-box__content'>
				{activeBox === 'dailyTask' && <DailyTasks tasks={tasks} />}
			</div>
		</div>
	);
};

export default MainBox;
