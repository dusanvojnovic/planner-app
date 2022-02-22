import './MainBoxButton.css';

const MainBoxButton = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={props.buttonClass || 'main-box__button'}
    >
      {props.text}
    </button>
  );
};

export default MainBoxButton;
