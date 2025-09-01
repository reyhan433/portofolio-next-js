"use client";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    pesan: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Data Form:", formData);
    alert("TERIMAKASIH UNTUK PESAN ANDA!");
  };

  return (
    <div className="contact-container">
      <div className="contact-card">
        <h1 className="contact-title">Contact Me</h1>
        <form onSubmit={handleSubmit} className="contact-form">
          <div>
            <label htmlFor="nama" className="contact-label">
              Nama
            </label>
            <input
              type="text"
              id="nama"
              name="nama"
              value={formData.nama}
              onChange={handleChange}
              className="contact-input"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="contact-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="contact-input"
              required
            />
          </div>

          <div>
            <label htmlFor="pesan" className="contact-label">
              Pesan
            </label>
            <textarea
              id="pesan"
              name="pesan"
              value={formData.pesan}
              onChange={handleChange}
              rows={4}
              className="contact-textarea"
              required
            ></textarea>
          </div>

          <button type="submit" className="contact-button">
            Kirim
          </button>
        </form>
      </div>
    </div>
  );
}
