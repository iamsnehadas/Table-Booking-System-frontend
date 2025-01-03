import { useState } from "react";
import axios from "axios";
import styles from "../styles/BookingForm.module.css";

export default function BookingForm({ onBookingComplete }) {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    date: "",
    time: "",
    guests: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const backendURL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000";  // Use environment variable for prod URL
      const response = await axios.post(`${backendURL}/api/bookings`, form);
      onBookingComplete(response.data);
      alert("Booking successful!");
      setForm({
        name: "",
        contact: "",
        date: "",
        time: "",
        guests: "",
      });
    } catch (err) {
      console.error("Error creating booking:", err);
      setError("Failed to create booking. Please try again.");
    }
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>Book a Table</h3>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.field}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.field}>
          <label>Contact:</label>
          <input
            type="text"
            name="contact"
            value={form.contact}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.field}>
          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.field}>
          <label>Time:</label>
          <input
            type="time"
            name="time"
            value={form.time}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.field}>
          <label>Guests:</label>
          <input
            type="number"
            name="guests"
            value={form.guests}
            onChange={handleChange}
            min="1"
            required
          />
        </div>
        <button type="submit" className={styles.button}>
          Book Now
        </button>
        {error && <p className={styles.error}>{error}</p>}
      </form>
    </div>
  );
}
