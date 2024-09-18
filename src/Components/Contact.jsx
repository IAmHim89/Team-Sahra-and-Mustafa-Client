import React from "react";
import ContactModal from "../Components/ContactModal";

const Contact = () => {
  return (
    <div>
      <h1 className="container mx-auto my-10">Get in Touch</h1>
      <p className="text-center mt-4">
        We love hearing from our customers! Please send us a message below for
        questions and comments.
      </p>

      {/*trigger the contact modal here */}
      <div className="flex justify-center mt-6">
        <ContactModal /> {/* render responsive modal with contact form here */}
      </div>
    </div>
  );
};

export default Contact;
