const express = require('express');
const app = express();
app.use(express.json()); // parses JSON body

// Example data store (in memory)
const users = [
  { id: '1', name: 'Soniya', email: 'soniya@gmail.com' },
  { id: '2', name: 'Ankita', email: 'ankitad@gmail.com' },
  { id: '3', name: 'Shreya', email: 'shree@gmail.com' }
];

// Dynamic route: fetch user by id
app.get('/users/:id', (req, res) => {
  const { id } = req.params;              
  const user = users.find(u => u.id === id);

  if (!user) return res.status(404).json({ error: 'User not found' });
  return res.json(user);
});

// Example of another dynamic route with multiple params
app.get('/posts/:postId/comments/:commentId', (req, res) => {
  const { postId, commentId } = req.params;
  res.json({ postId, commentId });
});

// Catch-all 404
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`));
