import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:aditya.raj160201@gmail.com">
        <Button>Contact: aditya.raj160201@gmail.com</Button>
      </a>
    </div>
  );
};

export default Contact;
