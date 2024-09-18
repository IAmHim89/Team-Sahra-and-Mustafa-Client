import React from "react";
import ContactModal from "../Components/ContactModal";

const Contact = () => {
  return (
    <div className="container mx-auto my-10">
      <h1 className="text-6xl font-bold text-center">Get In Touch</h1>{" "}
      {/* Increased text size to 6xl */}
      <p className="text-center mt-4 text-2xl">
        We love hearing from our customers! Click the button below to send us a
        message.
      </p>
      {/* Trigger the Contact Modal */}
      <div className="flex justify-center mt-6">
        <ContactModal /> {/* Render the responsive modal with contact form */}
      </div>
    </div>
  );
};

export default Contact;
