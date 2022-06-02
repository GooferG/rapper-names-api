const express = require('express');
const app = express();
const PORT = 8000;

const rappers = {
  '21 savage': {
    age: 29,
    birthName: 'Sheyaa Bin Abraham-Joseph',
    birthLocation: 'London, England',
  },
  'kendrick lamar': {
    age: 34,
    birthName: 'Kendrick Lamar Duckworth',
    birthLocation: 'Compton, California',
  },
  eminem: {
    age: 49,
    birthName: 'Marshall Bruce Mathers III',
    birthLocation: 'St. Joseph, Missouri',
  },
  dylan: {
    age: 21,
    birthName: 'Dylan',
    birthLocation: 'Dylan',
  },
};

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html');
});

app.get('/api/:rapperName', (request, response) => {
  const rappersName = request.params.rapperName.toLowerCase();

  if (rappers[rappersName]) {
    response.json(rappers[rappersName]);
  } else {
    response.json(rappers['dylan']);
  }

  // response.json(rappers);
});

app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}! You better go catch it`);
});
