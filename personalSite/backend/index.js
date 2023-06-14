const express = require('express');
const app = express();
const port = 8080;

// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
//   next();
// })

app.get('/api', (req, res) => {
  res.json({id:1, name: 'cristian diaconecsu'})
})

app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}`)
})