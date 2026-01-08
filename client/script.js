// varabel som lagrar vår adress
const url = "http://localhost:3000/flowers";

window.addEventListener('load', fetchData);

function fetchData() {

// fetch använder promise
// den är synkron och måste därför invänta svaret för att köra funktionen
// den rådata som hämtas måste översättas till json
fetch(url)
  .then((result) => result.json())
  .then((flowers) => {
    /*console.log(flowers);*/
    if (flowers.length > 0) {
      let html = `<ul class = "w3/4 my-3 mx-auto flex flex-wrap gap-2 justify-center">`;
        flowers.forEach(flower) => {

          html += `
          <li
              class="bg-${flowers.color}-200 basis-1/4 text-${flowers.color}-900 p-2 rounded-md border-2 border-${flowers.color}-400 flex flex-col justify-between"
            >
              <h3>${flowers.name} Efternamn</h3>
              <p>Användarnamn:</p>
              <div class="rounded-md bg-white/50 p-1 text-sm">
                <button
                  class="border border-${flowers.color}-300 hover:bg-white/100 rounded-md bg-white/50 p-1 text-sm mt-2"
                >
                  Ändra
                </button>
                <button
                  class="border border-${flowers.color}-300 hover:bg-white/100 rounded-md bg-white/50 p-1 text-sm mt-2"
                >
                  Ta bort
                </button>
              </div>
            </li>`
      });
      html += "</ul>";

      const listConatainer =document.getElementById('listContainer');
      listConatainer.innerHTML = '';
      listConatainer.insertAdjacentHTML('beforeend', html);
    }
  });

}  