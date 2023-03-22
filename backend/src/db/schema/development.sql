INSERT INTO USER_ACCOUNT (ID, FULLNAME, USERNAME)
VALUES 
  (1, 'John Doe', 'jdoe'),
  (2, 'Alice Wonderland', 'awond');

INSERT INTO TOPIC (ID, TITLE, SLUG)
VALUES 
  (1, 'Topic 1', 'topic-1'),
  (2, 'Topic 2', 'topic-2'),
  (3, 'Topic 3', 'topic-3'),
  (4, 'Topic 4', 'topic-4'),
  (5, 'Topic 5', 'topic-5');

INSERT INTO PHOTO (ID, FULL_URL, REGULAR_URL, CITY, COUNTRY, USER_ID, TOPIC_ID)
VALUES 
  (1, 'Image-1-Full.jpeg', 'Image-1-Regular.jpeg', 'Montreal', 'Canada', 1, 1),
  (2, 'Image-2-Full.jpeg', 'Image-2-Regular.jpeg', 'Montreal', 'Canada', 2, 2),
  (3, 'Image-3-Full.jpeg', 'Image-3-Regular.jpeg', 'Montreal', 'Canada', 1, 3),
  (4, 'Image-4-Full.jpg', 'Image-4-Regular.jpg', 'Montreal', 'Canada', 2, 4),
  (5, 'Image-3-Full.jpeg', 'Image-3-Regular.jpeg', 'Montreal', 'Canada', 1, 5),
  (6, 'Image-4-Full.jpg', 'Image-4-Regular.jpg', 'Montreal', 'Canada', 2, 1),
  (7, 'Image-2-Full.jpeg', 'Image-2-Regular.jpeg', 'Montreal', 'Canada', 1, 2),
  (8, 'Image-8-Full.jpg', 'Image-8-Regular.jpg', 'Montreal', 'Canada', 2, 3),
  (9, 'Image-1-Full.jpeg', 'Image-1-Regular.jpeg', 'Montreal', 'Canada', 1, 4),
  (10, 'Image-8-Full.jpg', 'Image-8-Regular.jpg', 'Montreal', 'Canada', 2, 5);