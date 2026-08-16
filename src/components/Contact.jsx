import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/firebaseClient";

const initialForm = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("Sending...");

    try {
      await addDoc(collection(db, "contactMessages"), {
        ...form,
        createdAt: serverTimestamp(),
      });
      setForm(initialForm);
      setStatus("Message sent successfully!");
    } catch (error) {
      console.error(error);
      setStatus("Could not send the message. Check your Firebase configuration and Firestore rules.");
    }
  };

  return (
    <section className="contact-section" id="contact">
      <h2 className="section-title">Contact Us</h2>
      <div className="section-content">
        <ul className="contact-info-list">
          <li className="contact-info"><i className="fa-solid fa-location-crosshairs" /><p>Street 193, Sangkat Tomnobtuk, Phnom Penh, Cambodia</p></li>
          <li className="contact-info"><i className="fa-regular fa-envelope" /><p>info@rEZecoffeeshopwebsite.com</p></li>
          <li className="contact-info"><i className="fa-solid fa-phone" /><p>(885) 015-248-614</p></li>
          <li className="contact-info"><i className="fa-regular fa-clock" /><p>Monday - Friday: 9:00 AM - 5:00 PM</p></li>
          <li className="contact-info"><i className="fa-regular fa-clock" /><p>Saturday: 10:00 AM - 3:00 PM</p></li>
          <li className="contact-info"><i className="fa-regular fa-clock" /><p>Sunday: Closed</p></li>
        </ul>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input name="name" value={form.name} onChange={handleChange} type="text" placeholder="Your name" className="form-input" required />
          <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="Your email" className="form-input" required />
          <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your message" className="form-input" required />
          <button type="submit" className="button submit-button">Submit</button>
          {status && <p className="firebase-status">{status}</p>}
        </form>
      </div>
    </section>
  );
}
