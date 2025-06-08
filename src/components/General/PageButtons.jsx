import { useNavigate } from "react-router-dom";
import "./PageButtons.css";
import PropTypes from 'prop-types';

function PageButtons() {
  return (
    <>
      <div className="pageButtons">
        <PageButton name="Home" page="home" />
        <PageButton name="Music" page="music" />
        <PageButton name="Art" page="art" />
        <PageButton name="Apps" page="apps" isRightButton={1} />
      </div>
    </>
  );
}

function PageButton({ name, page, isRightButton = 0 }) {
  const navigate = useNavigate();
  if (isRightButton == 0) {
    return (
      <>
        <hr className="verticleLine"></hr>
        <button onClick={() => navigate("/" + page)} className="pageButton">
          {name}
        </button>
      </>
    );
  } else {
    return (
      <>
        <hr className="verticleLine"></hr>
        <button
          onClick={() => navigate("/" + page)}
          className="pageButtonRight"
        >
          {name}
        </button>
        <hr className="verticleLine"></hr>
      </>
    );
  }
}

PageButton.propTypes = {
    name: PropTypes.string.isRequired,
    page: PropTypes.string.isRequired,
    isRightButton: PropTypes.number
};
export default PageButtons;
