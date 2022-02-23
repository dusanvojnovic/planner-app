import { useState } from 'react';

import DailyTasks from '../Tasks/TaskList/TaskList';
// import Deadline from '../Deadlines/Deadline';
import MainBoxButton from './MainBoxButton';
import './MainBox.css';
import DeadlinesList from '../Deadlines/DeadlinesList/DeadlinesList';
import Calendar from '../Calendar/Calendar';

const tasks = ['idi u nabavku', 'uci react'];
// const deadlines = [{ name: 'posalji cv u p3' }];

const MainBox = (props) => {
  const [activeBox, setActiveBox] = useState('dailyTask');

  return (
    <div className="main-box">
      <div className="main-box__buttons">
        <div>
          <MainBoxButton
            text="Daily tasks"
            onClick={() => setActiveBox('dailyTask')}
            buttonClass={activeBox === 'dailyTask' ? 'active' : ''}
          />
        </div>
        <div>
          <MainBoxButton
            text="Deadlines"
            onClick={() => setActiveBox('deadlines')}
            buttonClass={activeBox === 'deadlines' ? 'active' : ''}
          />
        </div>
        <div>
          <MainBoxButton
            text="Calendar"
            onClick={() => setActiveBox('calendar')}
            buttonClass={activeBox === 'calendar' ? 'active' : ''}
          />
        </div>
      </div>
      <div className="main-box__content">
        {activeBox === 'dailyTask' && <DailyTasks tasks={tasks} />}
        {activeBox === 'deadlines' && <DeadlinesList />}
        {activeBox === 'calendar' && <Calendar />}
      </div>
    </div>
  );
};

export default MainBox;
