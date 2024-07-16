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
            portalId="46372694"
            formId="7313c509-f9ca-45e7-9dbe-a09987fd8c53"
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
