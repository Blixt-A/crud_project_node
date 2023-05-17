const express = require('express');
const movies = require("./routes/movies");
const apiKeyRoutes = require("./routes/apiKeyRoutes"); 

const app = express();
const port = 8000;

app.use(express.json());

app.use("/apiKeys", apiKeyRoutes); 

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.use("/movies", movies);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
