var json = "";
async function llamarApi()
{
    fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.text())
    .then(data =>{
        json = JSON.parse(data);
        console.log(json);
        crearOptions(json);
    });
}

var personajeAbierto;

function mostrarPersonaje()
{   
    
    var n = document.getElementById("select").value;
    
    if (n == -1) {
        return;        
    }

    if (personajeAbierto == undefined) {
        personajeAbierto = true;
    } else{
        if (personajeAbierto) {
            document.getElementById("personaje").remove();
        }
    }
    
    let personaje = document.createElement("div");
    personaje.id = "personaje" ;

    let personajeDatos = document.createElement("div");
    personajeDatos.id = "personajeDatos" ;

    let personajeImg = document.createElement("div");
    personajeImg.id = "personajeImg" ;


    h1 = document.createElement("h1");
    h1.innerHTML = json.results[n].name;
    personajeDatos.appendChild(h1);

    br = document.createElement("br");
    personajeDatos.appendChild(br);
    
    p = document.createElement("p");
    p.innerHTML = "<b> ID: </b>" + json.results[n].id;
    personajeDatos.appendChild(p);
    
    p = document.createElement("p");
    p.innerHTML = "<b> Status: </b>" + json.results[n].status;
    personajeDatos.appendChild(p);
    
    p = document.createElement("p");
    p.innerHTML = "<b> Species: </b>" + json.results[n].species;
    personajeDatos.appendChild(p);
    
    p = document.createElement("p");
    p.innerHTML = "<b> Gender: </b>" + json.results[n].gender;
    personajeDatos.appendChild(p);
    
    p = document.createElement("p");
    p.innerHTML = "<b> Origin: </b>" + json.results[n].origin.name;
    personajeDatos.appendChild(p);
    
    p = document.createElement("p");
    p.innerHTML = "<b> Location: </b>" + json.results[n].location.name;
    personajeDatos.appendChild(p);
    
    img = document.createElement("img");
    img.src = json.results[n].image;
    personajeImg.appendChild(img);
    
    personaje.appendChild(personajeImg);
    personaje.appendChild(personajeDatos);
    div.appendChild(personaje);
    
}
function crearOptions(json)
{
    
    div = document.getElementById("personajeMostrado");  
    select = document.getElementById("select");
    
    for (let i = 0; i < json.results.length; i++) {
        option = document.createElement("option");
        option.innerHTML = json.results[i].name;
        option.value = i;
        select.appendChild(option);
    }
    
}

function inicializar()
{
    llamarApi();
}