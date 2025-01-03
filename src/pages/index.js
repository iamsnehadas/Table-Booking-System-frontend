import React, { useState } from "react";
import BookingForm from "../components/BookingForm";
import Summary from "../components/Summary";

export default function Home() {
  const [bookingDetails, setBookingDetails] = useState(null);

  const handleBooking = (details) => setBookingDetails(details);

  return (
    <div>
      <h1>Restaurant Table Booking</h1>
      <BookingForm onBookingComplete={handleBooking} />
      <Summary bookingDetails={bookingDetails} />
    </div>
  );
}
