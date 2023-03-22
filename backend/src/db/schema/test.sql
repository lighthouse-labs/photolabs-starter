WITH days(day) AS (
  VALUES ( 'Monday' ), ( 'Tuesday' )
)
INSERT INTO days (name)
SELECT day FROM days;

INSERT INTO interviewers (name, avatar)
VALUES
  ('Sylvia Palmer', 'https://i.imgur.com/LpaY82x.png'),
  ('Tori Malcolm', 'https://i.imgur.com/Nmx0Qxo.png');

INSERT INTO available_interviewers (day_id, interviewer_id)
SELECT 1 as day_id, interviewers.interviewer_id FROM ( SELECT id AS interviewer_id FROM interviewers ) interviewers;

INSERT INTO available_interviewers (day_id, interviewer_id)
SELECT 2 as day_id, interviewers.interviewer_id FROM ( SELECT id AS interviewer_id FROM interviewers ) interviewers;

INSERT INTO interviews (student, interviewer_id, appointment_id) VALUES ('Archie Cohen', 1, 1);