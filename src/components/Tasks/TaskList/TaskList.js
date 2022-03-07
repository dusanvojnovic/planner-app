import { useState } from 'react';

import { IconContext } from 'react-icons';
import { BiPlusCircle } from 'react-icons/bi';

import Button from '../../Button/Button';
import Task from '../Task/Task';
import NewTask from '../NewTask/NewTask';

import './TaskList.css';

const DailyTask = (props) => {
  const [addNewTask, setAddNewTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  const today = new Date().toLocaleDateString('en-GB');

  const addNewTaskHandler = (el) => {
    setTasks([...tasks, el]);
    setAddNewTask(false);
    console.log(el);
  };

  return (
    <>
      {!addNewTask ? (
        <div className="tasks-list">
          <div className="tasks-list__header">
            <div className="date">
              <p>{today}</p>
            </div>
            <IconContext.Provider value={{ size: '1.5rem' }}>
              <Button onClick={() => setAddNewTask(true)}>
                <BiPlusCircle />
                &nbsp; new task
              </Button>
            </IconContext.Provider>
          </div>
          {/* {props.tasks.map} */}
          {tasks.map((task) => (
            <Task taskName={task} key={task} />
          ))}
        </div>
      ) : (
        <div className="new-task__form">
          <NewTask addNewTaskHandler={addNewTaskHandler} />
        </div>
      )}
    </>
  );
};

export default DailyTask;
