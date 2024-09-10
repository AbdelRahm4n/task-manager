const express = require('express');
const app = express();
require('dotenv').config();
require('./connexion/connect');
const cors = require('cors');
const UserAPI = require('./routes/user');
const TaskAPI = require('./routes/task');

app.use(express.json());
app.use(cors());

app.use("/api/user", UserAPI);
app.use("/api/tache", TaskAPI);

app.use("/", (req, res) => {
    res.send("Backend is running!");
});

const PORT = 1000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}!`);
});
