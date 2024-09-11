'use client'
import { Row } from "react-bootstrap";
import HubspotForm from "react-hubspot-form";

const ContactForm = () => {
  return (
    <div className="text-center">
      <h3 className="title-lg dark_font text-center fw-bold margin_bottom_40">
        Contact Us
      </h3>
      <Row className="justify-content-center">
        <div className="col-md-12">
          <HubspotForm
            portalId="47335383"
            formId="5da86bd8-4758-4bf7-b752-1db480fb2f9e"
            onSubmit={() => console.log("Submit!")}
            onReady={(form) => console.log("Form ready!")}
            loading={<div>Loading...</div>}
          />
        </div>
      </Row>
    </div>
  );
};

export default ContactForm;
