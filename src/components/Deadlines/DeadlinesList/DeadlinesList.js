import { useState } from 'react';
import { IconContext } from 'react-icons';
import { BiPlusCircle } from 'react-icons/bi';

import Button from '../../Button/Button';
import Deadline from '../Deadline/Deadline';
import NewDeadline from '../NewDeadline/NewDeadline';

import './DeadlinesList.css';

const DeadlinesList = (props) => {
  const [deadlines, setDeadlines] = useState([]);
  const [addNewDeadline, setAddNewDeadline] = useState(false);

  const addNewDeadlineHandler = (deadline) => {
    setDeadlines([...deadlines, deadline]);
    setAddNewDeadline(false);
  };

  return (
    <>
      {!addNewDeadline ? (
        <div className="deadlines-list">
          <div className="deadlines-list__button">
            <IconContext.Provider value={{ size: '1.5rem' }}>
              <Button onClick={() => setAddNewDeadline(true)}>
                <BiPlusCircle />
                &nbsp; new deadline
              </Button>
            </IconContext.Provider>
          </div>
          {/* {props.deadlines.map((deadline) => ( */}
          {deadlines.map((deadline) => (
            <Deadline
              name={deadline.name}
              date={deadline.date}
              key={deadline.name}
            />
          ))}
        </div>
      ) : (
        <div>
          <NewDeadline addNewDeadlineHandler={addNewDeadlineHandler} />
        </div>
      )}
    </>
  );
};

export default DeadlinesList;
