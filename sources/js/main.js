const lista = document.querySelector(".personajes")
const url = "https://swapi.dev/api/people";
fetch(url)
    .then(datos => datos.json())
    .then(info => mostrarDatos(info.results))

function mostrarDatos(info) {
    info.forEach(persona => {
        const { name } = persona;
        const p = document.createElement("P");
        p.textContent = name
        p.classList.add("personaje")
        lista.appendChild(p);
    });
}