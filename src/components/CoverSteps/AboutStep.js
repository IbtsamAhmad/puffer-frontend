import React from "react";
import { Form, Button, Row, Col, Tabs, Tab } from "react-bootstrap";
const PageOne = ({ onButtonClick }) => {
  return (
    <section className="aboutCover-container">
      <h2>About You</h2>

      <Form className="about-form">
        <Form.Group className="aboutName" controlId="formBasicEmail">
          <Form.Label>A brief introduction about you</Form.Label>
          <Form.Control
            maxLength={10}
            required
            as="textarea"
            placeholder=""
            defaultValue=""
            //   className="profile-input"
          />
        </Form.Group>
        <div className="textCount">0 of 1,000</div>
        <Form.Group
          className=""
          controlId="formBasicEmail"
          onClick={() => onButtonClick("pagetwo")}
        >
          <Button variant="primary" type="submit" className="about-btn">
            Next
          </Button>
        </Form.Group>
      </Form>
    </section>
  );
};

export default PageOne;
