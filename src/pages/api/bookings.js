import axios from "axios";

export default async function handler(req, res) {
  const backendURL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000"; // Fallback to local URL if not set

  if (req.method === "GET") {
    const { date } = req.query;
    const response = await axios.get(`${backendURL}/api/bookings/slots?date=${date}`);
    res.status(200).json(response.data);
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
