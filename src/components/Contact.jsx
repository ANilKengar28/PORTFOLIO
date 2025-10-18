// Contact.jsx
import { useState } from "react";

const GAS_URL = "https://script.google.com/macros/s/AKfycbzPtTjh2VT7NPmBXMxaqrLRrTiR5tIq_ywGIKXqu3cE8AulB62OHLBR54IOJANmH0zP/exec";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const fd = new FormData();
      fd.append("name", form.name);
      fd.append("email", form.email);
      fd.append("message", form.message);

      // No headers; use no-cors so browser won't block the request
      await fetch(GAS_URL, { method: "POST", body: fd, mode: "no-cors" });

      // We can't read the response in no-cors mode, so just show success.
      setStatus("Message sent! I’ll get back to you soon.");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("Couldn’t send right now. Please email me directly.");
    }
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="h2">Contact</h2>
        <div className="card">
          <form onSubmit={handleSubmit}>
            <input name="name" placeholder="Your name" value={form.name} onChange={handleChange} required />
            <input name="email" type="email" placeholder="Your email" value={form.email} onChange={handleChange} required />
            <textarea name="message" rows="5" placeholder="How can I help?" value={form.message} onChange={handleChange} required />
            <button className="btn btn-primary" type="submit">Send</button>
            <p style={{ marginTop: 10, color: "var(--muted)" }}>{status}</p>
          </form>
        </div>
      </div>
    </section>
  );
}
