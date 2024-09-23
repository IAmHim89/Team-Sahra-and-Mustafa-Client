import React from "react";
import ContactModal from "../Components/ContactModal";
import "../Components/Css_files/Contact.css";

const Contact = () => {
  return (
    <div className="contact_container">
      {/*Map Section */}
      <section className="my-10">
        <h2 className="text-4xl font-bold text-center find-us-here">
          Find Us Here
        </h2>

        <div className="flex justify-center mt-6">
          <iframe
            className="w-full sm:w-4/5 md:w-3/5 lg:w-1/2 h-80"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?origin=mfe&pb=!1m4!2m1!1s14601+FM+306+Canyon+Lake,+TX+78133!5e0!6i12"
          ></iframe>
        </div>
      </section>
      {/*Contact Section */}
      <div className="container mx-auto my-10 p-6 bg-base-100 shadow-lg rounded-lg">
        {/* <h1 className="text-5xl font-bold text-center contact-header">
          Get In Touch
        </h1> */}
        <p className="text-center mt-4 text-2xl ">
          We love hearing from our customers! Click the button below to send us
          a message.
        </p>
        {/* Trigger the Contact Modal */}
        <div className="flex justify-center mt-8">
          <ContactModal /> {/* Render the responsive modal with contact form */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
