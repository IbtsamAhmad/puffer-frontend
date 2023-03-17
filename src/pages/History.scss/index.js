import React from "react";
import AuthNavbar from "../../components/Navbar/AuthNavbar";
import Button from "react-bootstrap/Button"
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import Footer from "../../components/Footer";
const History = () => {
  return (
    <>
      <AuthNavbar />
      <div className="history-page-container">
        <div className="history-header">
          <h1>Cover Letter History</h1>
          <p>
            View and recover all of your previously generated cover letters.
          </p>
        </div>
        <div className="history-content-container">
          <h2>History</h2>
          <p>4 results</p>
          <div className="history-previous-lists">
            <div className="history-list-header">
              <h2>Date Written</h2>
              <h3>Cover Letter Summary</h3>
            </div>
            <div className="previous-list">
              <div className="dates-col">
                <p>03 Mar 2023 00:04</p>
              </div>
              <div className="history-list-col">
                <p>
                  1.The job is for a software engineer
                  <br />
                  2.My role will be to join a team in creating innovative
                  software solutions
                  <br />
                  3.The responsibilities are software development, design,
                  implementation, testing, and debugging
                  <br />
                  4.The ideal candidate has a deep understanding of the software
                  development process, coding fundamentals, object-oriented
                  programming, distributed computing, and data structures
                  <br />
                  5.The position requires experience in software engineering
                </p>
              </div>
              <div>
                <OverlayTrigger
                  placement="bottom"
                  trigger="focus"
                  overlay={
                    <Popover title="Popover bottom">
                      <div className="list-popContent">
                        <p>View</p>
                      </div>
                    </Popover>
                  }
                >
                  <Button className="list-popOver">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      class="feather feather-more-vertical"
                      color="rgba(107, 114, 128, 1)"
                    >
                      <circle cx="12" cy="12" r="1"></circle>
                      <circle cx="12" cy="5" r="1"></circle>
                      <circle cx="12" cy="19" r="1"></circle>
                    </svg>
                  </Button>
                </OverlayTrigger>
              </div>
            </div>
            <div className="previous-list">
              <div className="dates-col">
                <p>03 Mar 2023 00:04</p>
              </div>
              <div className="history-list-col">
                <p>
                  1.The job is for a software Developer
                  <br />
                  2.My role will be to join a team in creating innovative
                  software solutions
                  <br />
                  3.The responsibilities are software development, design,
                  implementation, testing, and debugging
                  <br />
                  4.The ideal candidate has a deep understanding of the software
                  development process, coding fundamentals, object-oriented
                  programming, distributed computing, and data structures
                  <br />
                  5.The position requires experience in software engineering
                </p>
              </div>
              <div>
                <OverlayTrigger
                  placement="bottom"
                  trigger="focus"
                  overlay={
                    <Popover title="Popover bottom">
                      <div className="list-popContent">
                        <p>View</p>
                      </div>
                    </Popover>
                  }
                >
                  <Button className="list-popOver">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      class="feather feather-more-vertical"
                      color="rgba(107, 114, 128, 1)"
                    >
                      <circle cx="12" cy="12" r="1"></circle>
                      <circle cx="12" cy="5" r="1"></circle>
                      <circle cx="12" cy="19" r="1"></circle>
                    </svg>
                  </Button>
                </OverlayTrigger>
              </div>
            </div>
            <div className="previous-list">
              <div className="dates-col">
                <p>03 Mar 2023 00:04</p>
              </div>
              <div className="history-list-col">
                <p>
                  1.The job is for a software engineer
                  <br />
                  2.My role will be to join a team in creating innovative
                  software solutions
                  <br />
                  3.The responsibilities are software development, design,
                  implementation, testing, and debugging
                  <br />
                  4.The ideal candidate has a deep understanding of the software
                  development process, coding fundamentals, object-oriented
                  programming, distributed computing, and data structures
                  <br />
                  5.The position requires experience in software engineering
                </p>
              </div>
              <div>
                <OverlayTrigger
                  placement="bottom"
                  trigger="focus"
                  overlay={
                    <Popover title="Popover bottom">
                      <div className="list-popContent">
                        <p>View</p>
                      </div>
                    </Popover>
                  }
                >
                  <Button className="list-popOver">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      class="feather feather-more-vertical"
                      color="rgba(107, 114, 128, 1)"
                    >
                      <circle cx="12" cy="12" r="1"></circle>
                      <circle cx="12" cy="5" r="1"></circle>
                      <circle cx="12" cy="19" r="1"></circle>
                    </svg>
                  </Button>
                </OverlayTrigger>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default History;
