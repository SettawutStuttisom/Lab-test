export default function handler(req, res) {
  const { email, password } = req.body;
  if (email === "test@example.com" && password === "1234") {
    res.status(200).json({ success: true });
  } else {
    res.status(200).json({ success: false });
  }
}
