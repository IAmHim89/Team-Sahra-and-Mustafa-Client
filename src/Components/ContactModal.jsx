import React from "react";

const ContactModal = () => {
  return (
    <>
      {/* button to open the modal */}
      <button
        className="button_style"
        onClick={() => document.getElementById("contact_modal").showModal()}
      >
        Contact Us
      </button>

      {/* Responsive Modal */}
      <dialog id="contact_modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Contact Us</h3>

          {/*Contact Form */}
          <form className="mt-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>

              <input
                type="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text">Your Message</span>
              </label>
              <textarea
                placeholder="Message"
                className="textarea textarea-bordered"
                required
              ></textarea>
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">Send Message</button>
            </div>
          </form>

          {/*Modal Close Button */}
          <div className="modal-action">
            <button
              className="btn"
              onClick={() => document.getElementById("contact_modal").close()}
            >
              Close
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
};
export default ContactModal;
