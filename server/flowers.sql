-- SQLite
-- SQLite
DROP TABLE IF EXISTS flowers; --Tar bort 
CREATE TABLE IF NOT EXISTS flowers(
  id          INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,

  name        VARCHAR(8) NOT NULL,
  petalShape  VARCHAR(9) NOT NULL,
  width       INTEGER NOT NULL,
  color       VARCHAR(6) NOT NULL
);

INSERT INTO flowers(id,name,petalShape,width,color) 
VALUES (1,'Lilja','Kantig',10,'lila'); 
INSERT INTO flowers(id,name,petalShape,width,color) 
VALUES (2,'Dahlia','Runda',2,'orange');
INSERT INTO flowers(id,name,petalShape,width,color) 
VALUES (3,'Tulpan','Koppad',5,'rosa');
INSERT INTO flowers(id,name,petalShape,width,color) 
VALUES (4,'Vallmo','Bågad',7,'röd');
INSERT INTO flowers(id,name,petalShape,width,color) 
VALUES (5,'Solros','Triangulära',10,'gul');




select * from flowers; 