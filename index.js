const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// ============================ EXPRESS MIDDLEWARE =============================

app.use(bodyParser.json());

// ============================ ROUTING =============================

require('./routes/photoRoutes')(app);

app.get('/', (req, res) => {
  //   res.send({ hi: 'there' });
  const path = require('path');
  res.sendFile(path.resolve(__dirname, 'client', 'public', 'index.html'));
});

// ============================ PRODUCTION BUILD  =============================

if (process.env.NODE_ENV === 'production') {
  express.use(express.static('client/build'));

  const path = require('path');

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'src', 'index.html'));
  });
}

// ============================ START SERVER =============================

const PORT = process.env.PORT || 2222;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
