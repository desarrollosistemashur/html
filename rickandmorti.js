const lista = async() => {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const myJson = await response.json(); //extract JSON from the http response


    let personajes = myJson.results;

    console.log(personajes.length);

    for (p of personajes) {


        var nombre = document.createElement('h3');
        nombre.innerText = p.name;
        document.body.appendChild(nombre);

    }


    // var titulo = document.createElement('h3');
    // titulo.innerText = myJson.name;
    // document.body.appendChild(titulo);


    // var img = document.createElement("img");
    // img.src = myJson.image;
    // document.body.appendChild(img);


    // console.log(myJson);
    // do something with myJson
}




const userAction = async() => {
    const response = await fetch('https://rickandmortyapi.com/api/character/1');
    const myJson = await response.json(); //extract JSON from the http response

    var titulo = document.createElement('h3');
    titulo.innerText = myJson.name;
    document.body.appendChild(titulo);


    var img = document.createElement("img");
    img.src = myJson.image;
    document.body.appendChild(img);


    console.log(myJson);
    // do something with myJson
}

function inicializacion() {

    lista();
}