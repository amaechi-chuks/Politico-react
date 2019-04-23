import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/style/howItWorks.css';
import PartyLogo from '../../assets/img/PartyLogo.png';
import PdpLogo from '../../assets/img/PdpLogo.png';

const FeaturedCandidates = () => {
  return (
    <div>
      <section className="featured">
        <h2 className="section-title">Featured Candidates</h2>
        <div className="column featured-cards">
          <div className="card report-card">
            <div className="section1 clearfix">
              <div className="col2 last">
                <div className="grid clearfix">
                  <div className="col3 first">
                    <h1>
                      <img
                        className="party-logo"
                        src={PartyLogo}
                        alt="APC logo"
                      />
                    </h1>
                    <span>Following</span>
                  </div>
                  <div className="col3">
                    <h1>452</h1>
                    <span>Members</span>
                  </div>
                </div>
              </div>
            </div>
            <strong>Party Name: </strong>
            <div className="report-status resolved">
              All Progressives Congress (APC)
            </div>
            <div className="participant">
              <strong>Aspiring Candidate: </strong>
            </div>
            <p className="report-user">
              <strong>Muhammadu Buhari</strong>
            </p>
            <strong>Political office: </strong>
            <p className="report-time">President</p>
            <strong>Party Headquarter:</strong>
            <p className="report-location">4b Wuse Abuja, Nigeria</p>
            <strong>Registered:</strong>
            <p className="report-title">21st Nov. 2018 10:00 am</p>
            <i className="report-media" />
            Political Interest
          </div>
          <div className="card report-card">
            <div className="section1 clearfix">
              <div className="col2 last">
                <div className="grid clearfix">
                  <div className="col3 first">
                    <h1>
                      <img
                        className="party-logo"
                        src={PartyLogo}
                        alt="APC logo"
                      />
                    </h1>
                    <span>Following</span>
                  </div>
                  <div className="col3">
                    <h1>452</h1>
                    <span>Members</span>
                  </div>
                </div>
              </div>
            </div>
            <strong>Party Name: </strong>
            <div className="report-status resolved">
              All Progressives Congress (APC)
            </div>
            <div className="participant">
              <strong>Aspiring Candidate: </strong>
            </div>
            <p className="report-user">
              <strong>Prof. Yemi Osibanjo</strong>
            </p>
            <strong>Political office: </strong>
            <p className="report-time">Vice President</p>
            <strong>Party Headquarter:</strong>
            <p className="report-location">Plot 5 Wuse Abuja, Nigeria</p>
            <strong>Registered:</strong>
            <p className="report-title">21st Jan. 2016 10:00 am</p>
            <i className="report-media" />
            Political Interest
          </div>
          <div className="card report-card">
            <div className="section1 clearfix">
              <div className="col2 last">
                <div className="grid clearfix">
                  <div className="col3 first">
                    <h1>
                      <img
                        className="party-logo"
                        src={PdpLogo}
                        alt="PDP logo"
                      />
                    </h1>
                    <span>Following</span>
                  </div>
                  <div className="col3">
                    <h1>692</h1>
                    <span>Members</span>
                  </div>
                </div>
              </div>
            </div>
            <strong>Party Name: </strong>
            <div className="report-status resolved">
              People Democratic Party (PDP)
            </div>
            <div className="participant">
              <strong>Aspiring Candidate: </strong>
            </div>
            <p className="report-user">
              <strong>Atiku Abubakar</strong>
            </p>
            <strong>Political office: </strong>
            <p className="report-time">President</p>
            <strong>Party Headquarter:</strong>
            <p className="report-location">Plot 5 Wuse Abuja, Nigeria</p>
            <strong>Registered:</strong>
            <p className="report-title">21st Oct. 2017 10:00 am</p>
            <i className="report-media" />
            Political Interest
          </div>
          <div className="card report-card">
            <div className="section1 clearfix">
              <div className="col2 last">
                <div className="grid clearfix">
                  <div className="col3 first">
                    <h1>
                      <img
                        className="party-logo"
                        src={PdpLogo}
                        alt="APC logo"
                      />
                    </h1>
                    <span>Following</span>
                  </div>
                  <div className="col3">
                    <h1>692</h1>
                    <span>Members</span>
                  </div>
                </div>
              </div>
            </div>
            <strong>Party Name: </strong>
            <div className="report-status resolved">
              People Democratic Party (PDP)
            </div>
            <div className="participant">
              <strong>Aspiring Candidate: </strong>
            </div>
            <p className="report-user">
              <strong>Atiku Abubakar</strong>
            </p>
            <strong>Political office: </strong>
            <p className="report-time">President</p>
            <strong>Party Headquarter:</strong>
            <p className="report-location">Plot 5 Wuse Abuja, Nigeria</p>
            <strong>Registered:</strong>
            <p className="report-title">21st Oct. 2017 10:00 am</p>
            <i className="report-media" />
            Political Interest
          </div>
          <Link to="view-more-candidate" className="btn btn-primary2">
            View More Candidatess
          </Link>
        </div>
      </section>
    </div>
  );
};
export default FeaturedCandidates;
