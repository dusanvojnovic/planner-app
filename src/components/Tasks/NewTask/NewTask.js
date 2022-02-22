import { useRef } from 'react';

import Button from '../../Button/Button';

import './NewTask.css';

const NewTask = ({ addNewTaskHandler }) => {
  const inputRef = useRef();

  return (
    <div className="new-task">
      <div className="new-task__label">
        <label htmlFor="task">Task Name:</label>
      </div>
      <input
        className="new-task__input"
        type="text"
        id="task"
        name="task"
        ref={inputRef}
      />
      <div>
        <Button
          className="new-task__button"
          onClick={() => addNewTaskHandler(inputRef.current.value)}
        >
          add
        </Button>
      </div>
    </div>
  );
};

export default NewTask;
