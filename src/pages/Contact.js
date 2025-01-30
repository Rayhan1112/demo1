import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="section">
      <h2>Contact</h2>
      <form>
        <label>
          Name:
          <input type="text" />
        </label>
        <label>
          Email:
          <input type="email" />
        </label>
        <label>
          Message:
          <textarea />
        </label>
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;
