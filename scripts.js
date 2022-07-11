var sistemas = [];
var sistemaSeleccionado = undefined;

function inicializarTabla() {
    var control = document.getElementById('tabla');
    control.innerHTML = `<tr>
                <th>Nombre del sistema</th>
                <th>Cantidad de usuarios</th>
                <th>Nombre del cliente</th>
                <th></th>
            </tr>`;
}

function agregarSistema(sistema) {
    var control = document.getElementById('tabla');
    var sistema = document.getElementById('cSistema').value;
    var usuarios = document.getElementById('cUsuarios').value;
    var cliente = document.getElementById('cCliente').value;

    if (sistema == "" || usuarios == "" || cliente == "") {
        var error = document.getElementById('error');
        error.classList.remove("invisible");
        return;
    }


    if (sistemaSeleccionado == undefined) {
        var id = Date.now();
        var tr = control.childNodes[0].appendChild(document.createElement('tr'));
        tr.id = id;
        tr.addEventListener('click', function() {
            desseleccionarTodos();
            tr.className = 'table-active';
            sistemaSeleccionado = sistemas.find(sistema => sistema.id == id);
            if (sistemaSeleccionado) {
                document.getElementById('cSistema').value = sistemaSeleccionado.sistema;
                document.getElementById('cUsuarios').value = sistemaSeleccionado.usuarios;
                document.getElementById('cCliente').value = sistemaSeleccionado.cliente;
                document.getElementById('agregar').innerText = 'Modificar';
            }
        })
    } else {
        var id = sistemaSeleccionado.id;
        var tr = document.getElementById(sistemaSeleccionado.id);
        console.log(tr);
        tr.innerHTML = '';
    }

    var td = tr.appendChild(document.createElement('td'))
    td.innerText = sistema;

    var td = tr.appendChild(document.createElement('td'))
    td.innerText = usuarios;

    var td = tr.appendChild(document.createElement('td'))
    td.innerText = cliente;

    var td = tr.appendChild(document.createElement('td'))
    var bt = td.appendChild(document.createElement('button'))
    bt.className = 'btn btn-danger';
    bt.innerText = 'Eliminar';
    bt.addEventListener('click', function() {
        tr.remove();
        sistemas = sistemas.filter(sistema => sistema.id != id);
        sistemaSeleccionado = undefined;
        document.getElementById('cSistema').value = '';
        document.getElementById('cUsuarios').value = '';
        document.getElementById('cCliente').value = '';
        document.getElementById('agregar').innerText = 'Agregar';
    });

    sistemas = sistemas.filter(sistema => sistema.id != id);
    sistemas.push({
        id,
        sistema,
        usuarios,
        cliente
    });

    document.getElementById('cSistema').value = "";
    document.getElementById('cUsuarios').value = "";
    document.getElementById('cCliente').value = "";
    document.getElementById('agregar').innerText = 'Agregar';
    sistemaSeleccionado = undefined;
    desseleccionarTodos();

    var error = document.getElementById('error');
    error.classList.add("invisible");
}

function desseleccionarTodos() {
    var control = document.getElementById('tabla');
    for (var tr1 of control.childNodes[0].childNodes) {
        tr1.className = '';
    }
}