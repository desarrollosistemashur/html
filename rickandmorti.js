var objPersonajes = [];


const lista = async(pagina) => {

    if (!pagina) {
        pagina = 1;
    }

    const response = await fetch('https://rickandmortyapi.com/api/character?page=' + pagina);
    const myJson = await response.json(); //extract JSON from the http response

    objPersonajes = myJson.results;

    var htmlPersonajes = document.getElementById('personajes');

    for (p of objPersonajes) {
        var nombre = document.createElement('option');
        nombre.innerText = p.name;
        nombre.value = p.id;
        htmlPersonajes.appendChild(nombre);

    }

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
    lista(2);
    console.log('Finalizando...');

    // setTimeout(() => {
    //     console.log(objPersonajes);
    // }, 2000)
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


    //

    var htmlCardTitle = document.createElement('p');
    htmlCardTitle.innerText = 'Especie:' + objPersonaje.species;
    htmlCardBody.appendChild(htmlCardTitle);


    var htmlCardStatus = document.createElement('span');
    htmlCardStatus.className = 'badge text-bg-danger';
    htmlCardStatus.innerText = objPersonaje.status;
    htmlCardBody.appendChild(htmlCardStatus);

}