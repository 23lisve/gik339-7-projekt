//det första vi gör när vi öppnar server är att skriva npm start(är kopplat till nodemon server.js i package.json)

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
    } else {
      res.send(rows);
    }
  });
});

// hämtar en rad (med id)
server.get("/flowers/:id", (req, res) => {
  const id = req.params.id;

  const sql = `SELECT * FROM flowers WHERE id = ${id}`;
  // errorhantering, callbackfunktion

  db.all(sql, (err, rows) => {
    if (err) {
      res.status(500).send(err);
    } else {
      console.log("kom hit");
      console.log(rows[0]);
      res.send(rows[0]);
    }
  });
});

//updaterar
server.put("/flowers", (req, res) => {
  const bodyData = req.body;

  const id = bodyData.id;
  const flower = {
    name: bodyData.name,
    color: bodyData.color,
    width: bodyData.width,
    petalShape: bodyData.petalShape,
  };

  let updateString = "";
  const columnsArray = Object.keys(flower);
  columnsArray.forEach((column, i) => {
    updateString += `${column}="${flower[column]}"`;
    if (i !== columnsArray.length - 1) updateString += ",";
  });
  const sql = `UPDATE flowers SET ${updateString} WHERE id=${id}`;

  db.run(sql, (err) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.send("Blomman uppdaterades");
    }
  });
});

server.post("/flowers", (req, res) => {
  const { name, color, width, petalShape } = req.body;
  if (name.length > 15) {
    return res.status(400).json({
      error: "Valideringsfel",
      message: "Max 15 tecken",
    });
  }
  if (petalShape.length > 15) {
    return res.status(400).json({
      error: "Valideringsfel",
      message: "Max 15 tecken",
    });
  }
  if (!Number.isInteger(Number(width))) {
    return res.status(400).json({
      error: "Valideringsfel",
      message: "Bredd måste vara ett heltal, endast siffror",
    });
  }
  if (Number(width) <= 0) {
    return res.status(400).json({
      error: "Valideringsfel",
      message: "Bredd måste vara större än 0, endast siffror",
    });
  }
  const sql =
    "INSERT INTO flowers(name, color, width, petalShape) VALUES (?,?,?,?);";
  db.run(sql, [name, color, width, petalShape], (err) => {
    if (err) return res.status(500).send(err);
    else res.send("Blomman sparades");
  });
});

/*server.post("/flowers", (req, res) => {
  const { name, color, width, petalShape } = req.body;
  const sql = `INSERT INTO flowers(name, color, width, petalShape) VALUES
  (?,?,?,?)`;
  db.run(sql, [name, color, width, petalShape], (err) => {
    if (err) return res.status(500).send(err);
    else res.send("Blomman är tillagd");
  });
});*/

//ta bort med id
// ((se över ifall det är id 100%))
server.delete("/flowers/:id", (req, res) => {
  const id = req.params.id;
  const sql = `DELETE FROM flowers WHERE id = ${id}`;

  db.run(sql, (err) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.send("Blomman är borttagen");
    }
  });
});
