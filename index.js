const text = document.getElementById("texto");

const array = [
	"Los amo a todos, por fin navidad",
	"siguiendo las enseñanzas de mi besti",
	"hoy debe ser un día sin ganas de morir",
	"ojalá los llenen de regalos, besos en la cola",
	"el que toque el arbol de los gatos es joto :)"
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