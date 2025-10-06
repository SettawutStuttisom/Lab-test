let posts = [
  { id: 1, content: "สวัสดีชาวโลก 🌍", likes: 2, liked: false, comments: [] },
];

export default function handler(req, res) {
  if (req.method === "GET") {
    return res.status(200).json(posts);
  }
  if (req.method === "POST") {
    const newPost = {
      id: Date.now(),
      content: req.body.content,
      likes: 0,
      liked: false,
      comments: [],
    };
    posts.unshift(newPost);
    return res.status(201).json(newPost);
  }
}
