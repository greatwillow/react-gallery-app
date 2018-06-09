const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// ============================ EXPRESS MIDDLEWARE =============================

app.use(bodyParser.json());

// ============================ ROUTING =============================

require('./routes/photoRoutes')(app);

// app.get('/', (req, res) => {
// const path = require('path');
// res.sendFile(path.resolve(__dirname, 'client', 'public', 'index.html'));
// });

// ============================ PRODUCTION BUILD  =============================

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'public', 'index.html'));
  });
}

// ============================ START SERVER =============================

const PORT = process.env.PORT || 2222;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
