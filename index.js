import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000;

// request --> req
// response --> res

app.get('/', (req, res) => {
  res.send('Hello World from Express.js');
});

app.get('/about', (req, res) => {
  res.send('About  Page');
});
app.get('/dashboar', (req, res) => {
  res.send('Dashboard  Page');
});
app.get('/contact', (req, res) => {
  res.send('Contact Page from express.js');
});
app.listen(PORT, () => {
  console.log(`Server is runing on http://localhost:${PORT}`);
});
