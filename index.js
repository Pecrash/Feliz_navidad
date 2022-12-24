const text = document.getElementById("texto");

const array = [
	"Espero tengas un gran día lleno de regalos",
	"No olvides mi regalo porque lo esperé todo el mes",
	"Gracias por seguir siendo tan linda conmigo",
	"Te seguiré molestando por mucho tiempo más",
	"Así que preparate pinche morra :)"
];

let contador = 0;

array.forEach((e) => {
	setTimeout(() => {
		text.innerText = e;
	}, contador * 1000);

	contador = contador + 5;
	console.log(contador);
});

const show = document.getElementById("btn")
const modal = document.getElementById("modal")

function pop_up() {
	modal.classList.add("show")
}

show.addEventListener("click", pop_up, false)
modal.addEventListener("click", () => {
	modal.classList.remove("show")
})