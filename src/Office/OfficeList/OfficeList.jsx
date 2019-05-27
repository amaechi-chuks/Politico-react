import React from 'react';
import PropTypes from 'prop-types';
import PartyCards from '../OfficeCards/OfficeCards';
import '../../Party/PartyCards/partycard.css';

const OfficeList = props => {
  const { officeList } = props;
  return (
    <div>
      <div className="main_page_title">
        <div className="main-grid">
          {officeList.map(office => (
            <PartyCards key={office.id} name={office.name} type={office.type} />
          ))}
        </div>
      </div>
    </div>
  );
};

OfficeList.defaultProps = {
  officeList: [],
};

OfficeList.propTypes = {
  officeList: PropTypes.shape(),
};

export default OfficeList;
