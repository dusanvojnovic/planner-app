import './Deadline.css';

const Deadline = (props) => {
  return (
    <div className="deadline">
      <div className="deadline__name">
        <p>{props.name}</p>
      </div>
      <div className="deadline__date">{props.date}</div>
    </div>
  );
};

export default Deadline;
