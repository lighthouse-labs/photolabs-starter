const router = require("express").Router();
const photos = require("../mocks/photos.json")

module.exports = db => {
  router.get("/photos", (request, response) => {
      response.json(photos);
  });

  return router;
};
