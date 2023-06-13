const express = require('express');
const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/api/object', (req, res) => {
  const obj = {
    id: 1,
    name: 'dummy_test_objet_name',
  };

  res.json(obj);
});

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});
