import React from 'react';
import PropTypes from 'prop-types';
import '../../Party/PartyCards/partycard.css';

const OfficeCard = ({ name, type }) => {
  return (
    <div className="main-title">
      <div className="image_title_bio">
        <div className="title_text_box">
          <p className="name">{name}</p>
          {type ? <p className="user_bio">{type}</p> : null}
        </div>
      </div>
    </div>
  );
};

OfficeCard.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default OfficeCard;
