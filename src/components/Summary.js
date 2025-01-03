import React from "react";

export default function Summary({ bookingDetails }) {
  if (!bookingDetails) return null;

  const { name, contact, date, time, guests } = bookingDetails;

  return (
    <div>
      <h3>Booking Summary</h3>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Contact:</strong> {contact}</p>
      <p><strong>Date:</strong> {date}</p>
      <p><strong>Time:</strong> {time}</p>
      <p><strong>Guests:</strong> {guests}</p>
    </div>
  );
}
