//det första vi gör när vi öppnar server är att skriva npm start(är kopplat till nodemon server.js i package.json)

// Hjälpare för id-generering
function nextId() {
  const n = tasks.length + 1;
  return String(n).padStart(3, "0");
}

const sqlite = require("sqlite3").verbose();
const db = new sqlite.Database("./gik339.db"); //sökvägen till vår databas

const express = require("express");
const server = express();

//standardinställningar

server
  .use(express.json())
  .use(express.urlencoded({ extended: false })) //vi vill skicka och få data i jsonformat, behöver inte ha koll på exakt vad dessa rader betyder

  .use((req, res, next) => {
    /* Headers för alla förfrågningar. Hanterar regler för CORS (vilka klienter som får anropa vår server och hur. behöver inte förstås exakt) */
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "*");
    /* Säger åt servern att fortsätta processa förfrågan */
    next();
  });

server.listen(3000, () => {
  console.log("Server running on localhost:3000");
});

//hämtar alla
server.get("/flowers", (req, res) => {
  const sql = "SELECT * FROM flowers";
  // errorhantering, callbackfunktion

  db.all(sql, (err, rows) => {
    if (err) {
      res.status(500).send(err);
    }
    {
      res.send(rows);
    }
  });
});

//updaterar
server.put("/flowers", (req, res) => {
  const id = bodyData.id;
  const flower = {
    name: bodyData.name,
    color: bodyData.color,
    width: bodyData.width,
    leafShape: bodyData.leafShape,
  };
});

//skapar
server.post;

//ta bort med id
server.delete;
