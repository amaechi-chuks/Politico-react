import React from 'react';
import PropTypes from 'prop-types';
import PartyCards from '../PartyCards/PartyCards';
import '../PartyCards/partycard.css';

const PartyList = props => {
  const { partyList } = props;
  return (
    <div>
      <div className="main_page_title">
        <div className="main-grid">
          {partyList.map(party => (
            <PartyCards
              key={party.id}
              logoUrl={party.logoUrl}
              name={party.name}
              initials={`${party.name
                .split(' ')
                .pop()
                .toUpperCase()}`}
              hqAddress={party.hqaddress}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

PartyList.defaultProps = {
  partyList: [],
};

PartyList.propTypes = {
  partyList: PropTypes.shape(),
};

export default PartyList;
