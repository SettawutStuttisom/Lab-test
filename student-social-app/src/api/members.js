export default function handler(req, res) {
  const { year } = req.query;
  const members = [
    { id: 1, name: "สมชาย", year },
    { id: 2, name: "สมหญิง", year },
    { id: 3, name: "อานันท์", year },
  ];
  res.status(200).json(members);
}
