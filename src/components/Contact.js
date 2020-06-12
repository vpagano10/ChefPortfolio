import React from "react";

export default function Contact() {
  return (
    <>
      <div className="auth-form-page-container">
        <form className="form-container">
          <label>Contact</label>
          <input
            name="username"
            type="text"
            // onChange={handleChange}
            placeholder="name"
          />
          <input
            name="email"
            type="text"
            // onChange={handleChange}
            placeholder="email"
          />
          <input
            name="message"
            type="text"
            // onChange={handleChange}
            placeholder="message"
          />
          <button className="form-submit-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
