import express from 'express';

const app = express();

const grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95,
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100,
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92,
  },
};

app.get('/api/grades', (req, res) => {
  const gradesArray = [];

  for (const key in grades) {
    gradesArray.push(grades[key]);
  }

  res.setHeader('Content-Type', 'application/json');
  res.json(gradesArray);
});

const port = 8080;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
