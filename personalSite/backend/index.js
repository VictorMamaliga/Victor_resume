const express = require('express');
const app = express();
const port = 8080;

app.get('/api', (req, res) => {
  // return res.json({"mircea": "tes"})
  return res.send('hello')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})