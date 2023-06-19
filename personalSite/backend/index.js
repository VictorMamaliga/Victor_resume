const express = require('express');
var bodyParser = require('body-parser');
const { db } = require('./firebaseSetup');

const app = express();
const port = 8080;

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
})

app.use(bodyParser.json());

app.get('/api', async (req, res) => {
  const projectsRef = db.collection('projects');
  const snapshot = await projectsRef.get();
  const result = [];

  snapshot.forEach(doc => {
    result.push({id: doc.id, ...doc.data()})
  })
  
  res.json(result)
})

// create
app.post('/api/posts', async (req, res) => {
  console.log(req.body)
  const projectsRef = db.collection('projects');
  await projectsRef.add(req.body);
  res.status(200).json({ message: 'hai ca e success'})
})

// edit
app.post('/api/posts/edit', async (req, res) => {
  const cityRef = db.collection('projects').doc(req.body.id);
  cityRef.update(req.body.data)
    .then(() => res.status(200).json({ message: 'success' }))
    .catch(() => res.status(400).json({ message: 'error' }))
})

// delete
app.post('/api/posts/delete', async (req, res) => {
  await db.collection('projects').doc(req.body.id).delete()
    .then(() => res.status(200).json({ message: 'success' }))
    .catch(() => res.status(400).json({ message: 'error' }))
})

app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}`)
})