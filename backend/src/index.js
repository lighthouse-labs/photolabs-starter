const PORT = process.env.PORT || 8001;
const ENV = require("./environment");

const app = require("./application")(ENV);
const server = require("http").Server(app);

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT} in ${ENV} mode.`);
});


const cors = require('cors');
const uniqid = require('uniqid');
const morgan = require('morgan');

app.use(morgan('dev'));
app.use(cors());

const data = [
  { id: uniqid(), task: 'buy milk', done: false },
  { id: uniqid(), task: 'wash dishes', done: false },
  { id: uniqid(), task: 'clean up', done: true },
];

app.get("/todos", (req, res) => {
  res.json(data);
});

app.post("/todos/:id/delete", (req, res) => {
  // Implement delete logic here
});