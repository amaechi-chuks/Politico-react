/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../../Components/Global/Buttons';
import Input from '../../Components/Global/Inputs';
import '../../Party/PartyCards/partycard.css';
import Loader from '../../Components/Global/Loader';

class CreateOfficeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      createOfficeDetails: {
        type: '',
        name: '',
      },
    };
  }

  handleChange = async ({ target }) => {
    const { createOfficeDetails } = this.state;
    createOfficeDetails[target.id] = target.value;
    this.setState({ createOfficeDetails });
  };

  handleClick = async () => {
    this.setState({ loading: true });
    const { createOffice, fetchAllOffice } = this.props;
    const { createOfficeDetails } = this.state;
    await createOffice(createOfficeDetails);
    fetchAllOffice();
    this.setState({ loading: false });
  };

  render() {
    const { loading } = this.state;
    return (
      <div className="main-title-card">
        <div className="image_title_bio">
          {loading && <Loader />}
          <div className="form-card-card">
            <label htmlFor="issue-type">
              Enter Office Type
              <span>*</span>
            </label>
            <Input
              autoFocus="autoFocus"
              type="text"
              id="type"
              placeholder="Federal"
              className="signLabel"
              required="required"
              onChange={this.handleChange}
            />
            <label htmlFor="issue-type">
              Enter Office Name
              <span>*</span>
            </label>
            <Input
              autoFocus="autoFocus"
              type="text"
              id="name"
              className="signLabel"
              placeholder="Senate"
              required="required"
              onChange={this.handleChange}
            />
            <Button
              value="Submit"
              type="Submit"
              className="btn btn-primary user-form"
              onClick={this.handleClick}
            />
          </div>
        </div>
      </div>
    );
  }
}

CreateOfficeForm.propTypes = {
  createOffice: PropTypes.func.isRequired,
  fetchAllOffice: PropTypes.func.isRequired,
};
export default CreateOfficeForm;
