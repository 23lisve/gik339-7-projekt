// varabel som lagrar vår adress
const url = "http://localhost:3000/flowers";

// fetch använder promise
// den är synkron och måste därför invänta svaret för att köra funktionen
// den rådata som hämtas måste översättas till json
fetch(url)
  .then((result) => result.json())
  .then((flowers) => {
    console.log(flowers);
  });
