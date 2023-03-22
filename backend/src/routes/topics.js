const router = require("express").Router();
const topicsMock = require("../mocks/topics.json");
const photosMock = require("../mocks/photos.json");

module.exports = db => {
  router.get("/topics", (request, response) => {
    db.query(`
      SELECT 
      topic.id,
      topic.title,
      topic.slug
      FROM topic
    `).then(({ rows: topics }) => {
      response.json(topics);
    });
  });
  
  router.get("/topics/photos/:id", (request, response) => {
    const protocol = request.protocol;
    const host = request.hostname;
    const port = process.env.PORT || 8001;
    const serverUrl = `${protocol}://${host}:${port}`;

    db.query(`
    SELECT 
      json_agg(
          json_build_object(
          'id', photo.id,
          'urls', json_build_object(
            'full', concat('${serverUrl}/images/', photo.full_url),
            'regular', concat('${serverUrl}/images/', photo.regular_url)
          ),
          'user', json_build_object(
            'username', user_account.username,
            'name', user_account.fullname
          ),
          'location', json_build_object(
            'city', photo.city,
            'country', photo.country
          )
        )
      ) as topic_photo_data
      FROM topic
      JOIN photo ON photo.topic_id = topic.id
      JOIN user_account ON user_account.id = photo.user_id
      WHERE topic.id = ${request.params.id}
    `).then(({ rows }) => {
      response.json(rows[0].topic_photo_data);
    });
  });

  return router;
};
