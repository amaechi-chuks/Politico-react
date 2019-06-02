import React from 'react';
import PropTypes from 'prop-types';
import './partycard.css';

const ReviewerRequestCard = ({
  user,
  name,
  logourl,
  hqAddress,
  initials,
  button,
  button1,
  btnClass1,
  btnClass,
  modalOpen,
  adminRejectRequest,
}) => {
  return (
    <div className="main-title">
      <div className="image_title_bio">
        <div className="profile_image">
          {logourl ? (
            <img className="user_pic" src={logourl} alt="" />
          ) : (
            <p className="initials">{initials}</p>
          )}
        </div>
        <div className="title_text_box">
          <p className="name">{name}</p>
          {hqAddress ? (
            <p className="user_bio">{hqAddress}</p>
          ) : (
            <p>
              Currently this party has relocated to a different location. The
              hqAddress will soon be populated
            </p>
          )}
        </div>
        {user.isadmin === true ? (
          <div className="admin_decision_on_request">
            <div className="main_button">
              <button
                type="submit"
                className={btnClass}
                onClick={() => modalOpen()}
              >
                {button}
              </button>
              <button
                type="submit"
                className={btnClass1}
                onClick={() => adminRejectRequest()}
              >
                {button1}
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

ReviewerRequestCard.defaultProps = {
  user: {},
};
ReviewerRequestCard.propTypes = {
  name: PropTypes.string.isRequired,
  initials: PropTypes.string.isRequired,
  logourl: PropTypes.string.isRequired,
  button: PropTypes.string.isRequired,
  button1: PropTypes.string.isRequired,
  btnClass: PropTypes.string.isRequired,
  btnClass1: PropTypes.string.isRequired,
  hqAddress: PropTypes.string.isRequired,
  user: PropTypes.shape(),
  modalOpen: PropTypes.func.isRequired,
  adminRejectRequest: PropTypes.func.isRequired,
};

export default ReviewerRequestCard;
