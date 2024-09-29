import React from "react";
import "../Components/Css_files/Contact.css";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("manwrdnb");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <div className="contact_container">
      {/*Map Section */}
      <section className="my-10">
        <h2 className="text-4xl font-bold text-center find-us-here">
          Find us here!
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
      <div className="form_flex">
        <form
          action="https://formspree.io/f/manwrdnb"
          method="POST"
          onSubmit={handleSubmit}
        >
          <label htmlFor="email">Email Address</label>
          <input id="email" type="email" name="email" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <textarea id="message" name="message" />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button type="submit" disabled={state.submitting}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
