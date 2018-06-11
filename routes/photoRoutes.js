const PexelsAPI = require('pexels-api-wrapper');
const keys = require('../config/keys');

module.exports = app => {
  // ============================ GET ALL PHOTOS =============================

  app.get('/api/photos', async (req, res) => {
    const pexelsClient = await new PexelsAPI(keys.pexelsKey);
    pexelsClient
      .search(req.query['search-term'], 100, 1)
      .then(function(photoData) {
        res.send(photoData);
      })
      .catch(function(e) {
        console.err('Error while fetching Pexels photos with error provided as: ', e);
      });
  });
};
