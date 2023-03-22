const router = require("express").Router();
const topics = require("../mocks/topics.json");
const photos = require("../mocks/photos.json");

module.exports = db => {
  router.get("/topics", (request, response) => {
    response.json(topics);
  });

  // TODO: update to consume similar photos mock
  // TODO: use request.params as well
  router.get("/topics/photos/:id", (request, response) => {
    response.json(photos);
  });

  return router;
};
