const express = require('express');
const path = require('path');
const app = express();
const port = 5000;
const hostname = "127.0.0.1"

app.use(express.static(path.join(__dirname, 'build')));
app.set("view engine", "pug");

app.get('/*', function (req, res) {
  res.status(200).sendFile(path.join(__dirname, 'build', 'index.html'));
});

// app.get("*", (req, res) => {
//   res.status(404).render(path.join(__dirname, "src/Pages", "notFound.pug"), {url: `http://${hostname}:${port}${req.url}`})
//   console.log(req.baseUrl)
// })

app.listen(port, () => console.log(`App is running at http://${hostname}:${port}`));