const express = require('express');
const axios = require('axios');
const port = 5001;

const app = express();
const apiUrl = 'https://6177b8b59c328300175f5adc.mockapi.io/api/test/deals';

app.get('/api', async (req, res) => {
  try {
    const response = await axios.get(apiUrl);
    res.send(response.data);
  } catch (error) {
    console.log(error);
  }
});

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
