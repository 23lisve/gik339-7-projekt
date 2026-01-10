// varabel som lagrar vår adress
const url = "http://localhost:3000/flowers";

const userForm = document.getElementById("userForm");

fetch(url)
  .then((result) => result.json())
  .then((flowers) => {
    console.log(flowers);
  });

window.addEventListener("load", fetchData);

function fetchData() {
  const colorMap = {
    lila: "bg-purple-200 text-purple-900 border-purple-400",
    rosa: "bg-pink-200 text-pink-900 border-pink-400",
    orange: "bg-orange-200 text-orange-900 border-orange-400",
    röd: "bg-red-200 text-red-900 border-red-400",
    gul: "bg-yellow-200 text-yellow-900 border-yellow-400",
  };
  // fetch använder promise
  // den är synkron och måste därför invänta svaret för att köra funktionen
  // den rådata som hämtas måste översättas till json
  fetch(url)
    .then((result) => result.json())
    .then((flowers) => {
      /*console.log(flowers);*/
      if (flowers.length > 0) {
        let html = `<ul class = "w-3/4 my-3 mx-auto flex flex-wrap gap-2 justify-center">`;

        flowers.forEach((flower) => {
          html += `
          <li class= "${
            colorMap[flower.color] ||
            "bg-gray-200 text-gray-900 border-gray-400"
          } basis-1/4 p-2 rounded-md border-2 flex flex-col justify-between">

            
              <h3>${flower.name}</h3>
              <p> Form: ${flower.petalShape}</p>
              <p>Bredd: ${flower.width}</p>


              <div class="rounded-md bg-white/50 p-1 text-sm">
                <button class= "border border-gray-300 rounded-md bg-white/50 p-1 text-sm mt-2">
               
                  Ändra
                </button>
                <button class="border border-gray-300 rounded-md bg-white/50 p-1 text-sm mt-2">
                  Ta bort
                </button>
              </div>
            </li>`;
        });
        html += "</ul>";

        const listContainer = document.getElementById("listContainer");
        listContainer.innerHTML = "";
        listContainer.insertAdjacentHTML("beforeend", html);
      }
    });
}

console.log(userForm);
userForm.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const flower = {
    name: userForm.firstName.value,
    petalShape: userForm.lastName.value,
    width: userForm.username.value,
    color: userForm.color.value,
  };
  //serverUserObject.firstName = userForm.firstName.value;
  //serverUserObject.lastName = userForm.lastName.value;
  //serverUserObject.username = userForm.username.value;
  //serverUserObject.color = userForm.color.value;

  //console.log(serverUserObject);
  const request = new Request(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(flower),
  });

  fetch(request).then((response) => {
    console.log(response);
    fetchData();
    userForm.reset();
  });

  //console.log(e);
}
