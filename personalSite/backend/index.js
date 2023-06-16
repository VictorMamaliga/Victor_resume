const express = require('express');
const { db } = require('./firebaseSetup');

const app = express();
const port = 8080;

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
})

app.get('/api', async (req, res) => {
  const projectsRef = db.collection('projects');
  const snapshot = await projectsRef.get();
  const result = [];

  snapshot.forEach(doc => {
    result.push({id: doc.id, ...doc.data()})
  })
  
  res.json(result)
})

app.post('/api/posts', async (req, res) => {
  const projectsRef = db.collection('projects');

  await projectsRef.add({
    name: 'San Francisco', state: 'CA', country: 'USA',
    capital: false, population: 860000
  });
})

app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}`)
})