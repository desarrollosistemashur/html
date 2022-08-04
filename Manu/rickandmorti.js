var objPersonajes = [];


const lista = async(pagina) => {

    if (!pagina) {
        pagina = 1;
    }

    const response = await fetch('https://rickandmortyapi.com/api/character?page=' + pagina);
    const myJson = await response.json(); //extract JSON from the http response

    objPersonajes = myJson.results;

    var htmlPersonajes = document.getElementById('personajes');

    borrar_todas_las_cartas();
    for (p of objPersonajes) {
        var nombre = document.createElement('option');
        nombre.innerText = p.name;
        nombre.value = p.id;
        htmlPersonajes.appendChild(nombre);
        agregar_carta_p(p);
    }

}


function cambiarpagina() {
    var pag = document.getElementById("pagina");
    cambiar_pagina_actual(pag.value);
}


function cambiar_pagina_actual(index) {
    lista(index);
}


// const userAction = async() => {
//     const response = await fetch('https://rickandmortyapi.com/api/character/1');
//     const myJson = await response.json(); //extract JSON from the http response

//     var titulo = document.createElement('h3');
//     titulo.innerText = myJson.name;
//     document.body.appendChild(titulo);


//     var img = document.createElement("img");
//     img.src = myJson.image;
//     document.body.appendChild(img);
// do something with myJson
// }


function inicializacion() {
    console.log('Inicializando...');
    cambiar_pagina_actual(4);
    console.log('Finalizando...');

    // setTimeout(() => {
    //     console.log(objPersonajes);
    // }, 2000)
}


function agregar_carta_p(p) {
    var container = document.getElementById('cartas');
    container.innerHTML += `<div class='card' style='width: 18rem;margin:0.5rem' id='card` + p.id + `'>
        <img id='img` + p.id + `' src='https://rickandmortyapi.com/api/character/avatar/1.jpeg' class='card-img-top' alt='...'>
        <div class='card-body'>
            <p id='text` + p.id + `' class='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        </div>`;
    
    var card = document.getElementById("card" + p.id);
    var img = document.getElementById("img" + p.id);
    var ptexto = document.getElementById("text" + p.id);;

    img.src = p.image;
    ptexto.innerText = p.name;
}


function borrar_todas_las_cartas() {
    var container = document.getElementById('cartas');
    var hijos = container.innerHTML = "";
}


function seleccionar() {
    var personaje = document.getElementById('personajes');
    console.log(personaje.value);

    var objPersonaje = objPersonajes.find(p => p.id == personaje.value);
    console.log(objPersonaje.name);

    var htmlCard = document.getElementById('card');
    htmlCard.innerHTML = '';

    var htmlImage = document.createElement('img');
    htmlImage.src = objPersonaje.image;
    htmlImage.className = 'card-img-top';
    htmlCard.appendChild(htmlImage);

    var htmlCardBody = document.createElement('div');
    htmlCardBody.className = 'card-body';
    htmlCard.appendChild(htmlCardBody);

    var htmlCardTitle = document.createElement('p');
    htmlCardTitle.innerText = 'Especie:' + objPersonaje.species;
    htmlCardBody.appendChild(htmlCardTitle);

    var htmlCardStatus = document.createElement('span');
    htmlCardStatus.className = 'badge text-bg-danger';
    htmlCardStatus.innerText = objPersonaje.status;
    htmlCardBody.appendChild(htmlCardStatus);

}