/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { notify } from 'react-notify-toast';
import Button from '../../Components/Global/Buttons';
import validateImage from '../../helpers/validateImage';
import uploadToCloudnary from '../../helpers/cloudinaryUploads';
import Input from '../../Components/Global/Inputs';
import '../PartyCards/partycard.css';
import Loader from '../../Components/Global/Loader';

class CreatePartyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      createPartyDetails: {
        name: '',
        hqAddress: '',
      },
      logoUrl: '',
    };
  }

  handleChange = async ({ target }) => {
    const { createPartyDetails } = this.state;
    createPartyDetails[target.id] = target.value;
    this.setState({ createPartyDetails });
  };

  handleImageChange = async e => {
    const form = new FormData();
    const imageData = e.target.files[0];
    const validFormat = validateImage(imageData);
    if (validFormat.valid) {
      notify.show(validFormat.message, 'success');
      form.append('file', imageData);
      const res = await uploadToCloudnary(form);
      this.setState({ logoUrl: res.url });
    } else {
      notify.show(validFormat.message, 'error');
    }
  };

  handleClick = async () => {
    this.setState({ loading: true });
    const { createParty, fetchAllParty } = this.props;
    const { createPartyDetails, logoUrl } = this.state;
    createPartyDetails.logoUrl = logoUrl;
    await createParty(createPartyDetails);
    fetchAllParty();
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
              Enter Party Name
              <span>*</span>
            </label>
            <Input
              autoFocus="autoFocus"
              type="text"
              id="name"
              className="signLabel"
              required="required"
              onChange={this.handleChange}
            />
            <label htmlFor="issue-type">
              Enter Party Address
              <span>*</span>
            </label>
            <Input
              autoFocus="autoFocus"
              type="text"
              id="hqAddress"
              className="signLabel"
              required="required"
              onChange={this.handleChange}
            />
            <label
              htmlFor="file-upload"
              className="custom-file-upload upload-label"
            >
              <i className="fa fa-upload" />
              Select Party Logo
              <input
                className="input-file-party"
                type="file"
                id="logoUrl"
                onChange={e => this.handleImageChange(e)}
              />
            </label>
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

CreatePartyForm.propTypes = {
  createParty: PropTypes.func.isRequired,
  fetchAllParty: PropTypes.func.isRequired,
};
export default CreatePartyForm;
