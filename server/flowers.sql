


DROP TABLE IF EXISTS flowers; --Tar bort 
CREATE TABLE IF NOT EXISTS flowers(
  id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,

  name VARCHAR(8) NOT NULL,
  petalShape VARCHAR(9) NOT NULL,
  width INTEGER NOT NULL,
  color VARCHAR(6) NOT NULL,
);

INSERT INTO flowers(id,name,petalshape,width,color) VALUES (1,'Zena','Zulauf','Katlynn_Brekke','green'); 
INSERT INTO flowers(id,name,petalShape,width,color) VALUES (1,'Dahlia','Runda','2','Pink');

/*
INSERT INTO users(id,firstName,lastName,username,color) VALUES (2,'Muhammad','Torphy','Martina39','gray');
INSERT INTO users(id,firstName,lastName,username,color) VALUES (3,'Carlee','Tromp','Carmen37','purple');
INSERT INTO users(id,firstName,lastName,username,color) VALUES (4,'Taylor','Shanahan','Doyle_Legros81','red');
INSERT INTO users(id,firstName,lastName,username,color) VALUES (5,'Estell','Reichel','Santiago.Dibbert','red');
INSERT INTO users(id,firstName,lastName,username,color) VALUES (6,'Reece','Stehr','Destany75','red');
INSERT INTO users(id,firstName,lastName,username,color) VALUES (7,'Kiarra','Beier','Edison87','yellow');
INSERT INTO users(id,firstName,lastName,username,color) VALUES (8,'Alberto','Gibson','Marianna_Collins','green');
INSERT INTO users(id,firstName,lastName,username,color) VALUES (9,'Johanna','Bashirian','Mervin.Grant','yellow');
INSERT INTO users(id,firstName,lastName,username,color) VALUES (10,'Thalia','Kozey','Ashley22','yellow');*/


select * from flowers; 