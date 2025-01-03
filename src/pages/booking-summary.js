import { useRouter } from "next/router";
import styles from "../styles/Summary.module.css";

export default function BookingSummary() {
  const router = useRouter();
  const { name, contact, date, time, guests } = router.query;

  if (!name) {
    return <p>No booking details available. Please make a booking first.</p>;
  }

  return (
    <div>
      <h2 className="Summary">Booking Summary</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Contact:</strong> {contact}</p>
      <p><strong>Date:</strong> {date}</p>
      <p><strong>Time:</strong> {time}</p>
      <p><strong>Guests:</strong> {guests}</p>
    </div>
  );
}
