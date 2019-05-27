import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserButton from './UserTabButton';
import './usertab.css';

class UserTab extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { changeTab, currentTab } = this.props;
    const UserTabItems = [
      {
        id: 1,
        value: 'Parties',
        section: 'party-section',
      },
      {
        id: 2,
        value: 'Offices',
        section: 'office-section',
      },
      {
        id: 3,
        value: 'Apply to contest',
        section: 'apply-section',
      },
      {
        id: 4,
        value: 'Interested Candidates',
        section: 'candidates-section',
      },
      {
        id: 5,
        value: 'Vote',
        section: 'vote-section',
      },
      {
        id: 6,
        value: 'Results',
        section: 'result-section',
      },
    ];
    return (
      <React.Fragment>
        <div className="admin-page">
          <div className="admin-tab">
            <div className="admin-tab-items-left">
              {UserTabItems.map(tab => {
                return (
                  <UserButton
                    key={tab.id}
                    value={tab.value}
                    className={
                      currentTab === tab.section
                        ? 'admin-btn-active'
                        : 'admin-btn'
                    }
                    onClick={() => changeTab(tab.section)}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

UserTab.propTypes = {
  changeTab: PropTypes.func.isRequired,
  currentTab: PropTypes.string.isRequired,
};

export default UserTab;
