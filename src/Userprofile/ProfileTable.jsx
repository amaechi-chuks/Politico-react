import React from 'react';

const ProfileTable = () => {
  return (
    <div>
      <div className="profile-table">
        <table className="stats-table">
          <tbody>
            <tr>
              <th>S/N</th>
              <th>Party</th>
              <th>Date Voted</th>
              <th>Polling Unit</th>
              <th>Candidate</th>
              <th>Office</th>
              <th>Results</th>
              <th>Delete</th>
            </tr>
            <tr>
              <td>1</td>
              <td>People Democratic Party (PDP)</td>
              <td>16-02-2016 11:30am</td>
              <td>17 Aynaleye Street, Ogba</td>
              <td>Ebele Jonathan</td>
              <td>
                <p href="#" className="btn1 ">
                  President
                </p>
              </td>
              <td>
                <p className="btn1 btn-warning2">loss</p>
              </td>
              <td>
                <button type="submit" className="btn btn-warning delete-report">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="modal">
        <div className="modal-header">
          <p className="modal-title">Delete Record</p>
          <span className="modal-close">X</span>
        </div>
        <div className="modal-body">
          <p className="modal-message">
            Are you sure you want to delete this record?
          </p>
          <div className="modal-group">
            <button
              type="submit"
              className="btn btn-primary modal-btn"
              id="cancel"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn btn-warning modal-btn"
              id="delete"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileTable;
