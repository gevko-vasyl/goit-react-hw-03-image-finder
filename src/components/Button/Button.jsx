import PropTypes from "prop-types";
import "./Button.scss";

const Button = ({ onClick }) => {
  return (
    <div className="Button__container">
      <button className="Button" type="button" onClick={onClick}>
        Load more
      </button>
    </div>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
