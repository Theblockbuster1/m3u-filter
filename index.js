const express = require('express');
const http = require('http');
const fetch = require('node-fetch');

const app = express();
app.use(express.json());

app.get('/', (_, res) => res.send("hi"));
app.get('/filter', (_, res) => res.send("No URL found."));
app.get('/filter/*', (req, res) => {
  if (!req.params[0]) return res.send("No URL found.");
  fetch(req.params[0])
    .then(res => res.text())
    .then(data => {
      let lines = data.split('\n');
      let i;
      for (i = 0; i < lines.length; i++) {
        if (lines[i].toLowerCase().match(/group-title=".*?XXX.*?"/i)) {lines[i] = "";lines[i+1] = ""}
      }
      let cleanlines = lines.join('\n');
      res.send(cleanlines);
    })
    .catch(err => {
      console.error(err);
      return res.send("Invalid URL (or other server error).");
    });
});

app.listen(1337);
console.log(`Listening at :${process.env.PORT}`);

