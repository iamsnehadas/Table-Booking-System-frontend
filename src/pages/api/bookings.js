import axios from "axios";

export default async function handler(req, res) {
  const backendURL = "http://localhost:5000/api/bookings";

  if (req.method === "GET") {
    const { date } = req.query;
    const response = await axios.get(`${backendURL}/slots?date=${date}`);
    res.status(200).json(response.data);
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
