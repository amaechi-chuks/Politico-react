import React from 'react';
import PartyLogo from '../assets/img/PartyLogo.png';
import '../assets/style/howItWorks.css';
import PdpLogo from '../assets/img/PdpLogo.png';

const CandidateList = () => {
  return (
    <div>
      <main>
        <section className="container reports-container">
          <h2 className="section-title">All Candidates</h2>

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
              <p className="report-media">Political Interest</p>
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
                      <h1>452</h1>
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
              <p className="report-location">4b Wuse Abuja, Nigeria</p>
              <strong>Registered:</strong>
              <p className="report-title">21st Nov. 2018 10:00 am</p>
              <p className="report-media">Political Interest</p>
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
                      <h1>452</h1>
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
                <strong>Peter Obi</strong>
              </p>
              <strong>Political office: </strong>
              <p className="report-time">Senator</p>
              <strong>Party Headquarter:</strong>
              <p className="report-location">4b Wuse Abuja, Nigeria</p>
              <strong>Registered:</strong>
              <p className="report-title">21st Nov. 2018 10:00 am</p>
              <p className="report-media">Political Interest</p>
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
                <strong>David Mark</strong>
              </p>
              <strong>Political office: </strong>
              <p className="report-time">House Of Rep</p>
              <strong>Party Headquarter:</strong>
              <p className="report-location">4b Wuse Abuja, Nigeria</p>
              <strong>Registered:</strong>
              <p className="report-title">21st Nov. 2018 10:00 am</p>
              <p className="report-media">Political Interest</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
export default CandidateList;
