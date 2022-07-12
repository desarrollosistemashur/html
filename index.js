var sistemas = [];
var sistemaSeleccionado = undefined;
var trSeleccionado = undefined;

function cargarSistemas() {
    sistemas = JSON.parse(localStorage.getItem('sistemas'));
    if (sistemas == null) {
        sistemas = [];
    }

    for (var i = 0; i < sistemas.length; i++) {
        agregar(sistemas[i].nombre, sistemas[i].usuarios, sistemas[i].cliente);
    }
}

function agregarItem() {

    var nombre = document.getElementById('nombre').value;
    var usuarios = document.getElementById('usuarios').value;
    var cliente = document.getElementById('cliente').value;

    if (nombre == '' || usuarios == '' || cliente == '') {
        alert('Todos los campos son obligatorios');
        return;
    }

    if (existeSistema(nombre, sistemaSeleccionado)) {
        alert('el sistema ya existe');
        return;
    }

    if (sistemaSeleccionado != undefined) {

        sistemaSeleccionado.nombre = nombre;
        sistemaSeleccionado.usuarios = usuarios;
        sistemaSeleccionado.cliente = cliente;
        trSeleccionado.childNodes[0].innerText = nombre;
        trSeleccionado.childNodes[1].innerText = usuarios;
        trSeleccionado.childNodes[2].innerText = cliente;


        //modificar
    } else {

        agregar(nombre, usuarios, cliente);
        sistemas.push({
            nombre: nombre,
            usuarios: usuarios,
            cliente: cliente
        });
    }

    document.getElementById('btnAgregar').innerText = 'Agregar';
    localStorage.setItem('sistemas', JSON.stringify(sistemas));
    desseleccionarTodo();

}

function agregar(nombre, usuarios, cliente) {

    var tabla = document.getElementById('tabla');

    var tr = document.createElement('tr');
    tr.addEventListener('click', function() {

        desseleccionarTodo()

        tr.className = "table-success";

        var nombreTr = tr.childNodes[0].innerText;

        trSeleccionado = tr;
        sistemaSeleccionado = sistemas.find(function(sistema) {
            return sistema.nombre == nombreTr;
        })


        document.getElementById('nombre').value = sistemaSeleccionado.nombre;
        document.getElementById('usuarios').value = sistemaSeleccionado.usuarios;
        document.getElementById('cliente').value = sistemaSeleccionado.cliente;
        document.getElementById('btnAgregar').innerText = 'Actualizar';


    });

    var td = document.createElement('td');
    td.innerText = nombre;
    tr.appendChild(td);

    var td = document.createElement('td');
    td.innerText = usuarios;
    tr.appendChild(td);

    var td = document.createElement('td');
    td.innerText = cliente;
    tr.appendChild(td);

    tabla.childNodes[1].appendChild(tr);
    desseleccionarTodo();

}

function desseleccionarTodo() {


    var tabla = document.getElementById('tabla');

    for (var i = 0; i < tabla.childNodes[1].childNodes.length; i++) {
        tabla.childNodes[1].childNodes[[i]].className = "";
    }

    document.getElementById('nombre').value = "";
    document.getElementById('usuarios').value = "";
    document.getElementById('cliente').value = "";
    trSeleccionado = undefined;
    sistemaSeleccionado = undefined;
}



function existeSistema(nombre, sistemaSelecc) {
    for (var i = 0; i < sistemas.length; i++) {
        if (sistemas[i].nombre.toUpperCase() == nombre.toUpperCase() && sistemas[i] != sistemaSelecc) {
            return true;
        }
    }
    return false;
}