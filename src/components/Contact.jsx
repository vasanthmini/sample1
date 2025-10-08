import { Fragment, useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}, we will contact you soon!`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Fragment>
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p className="text-dark">
          Have questions about our sports products? Reach out to us and our
          support team will get back to you quickly.
        </p>

        <div className="contact-details">
          <p>
            <strong>📍 Address:</strong> 123 Sports Street, Chennai
          </p>
          <p>
            <strong>📞 Phone:</strong> +91 98765 43210
          </p>
          <p>
            <strong>📧 Email:</strong> support@sportsmini.com
          </p>
        </div>

        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>

        {/* Google Map Embed */}
        <div className="map-container">
          <iframe
            title="Shop Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.5401985288157!2d80.22096681482168!3d13.01226899082695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52663e0b1b0001%3A0x9b9f9497b3d2c1c!2sChennai!5e0!3m2!1sen!2sin!4v1632801189952!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </Fragment>
  );
}

export default Contact;
