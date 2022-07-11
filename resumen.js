var sistemas = [];


function inicializarResumen() {
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Sistema');
        data.addColumn('number', 'Usuarios');

        cargarSistemas();
        console.log(sistemas);
        for (s of sistemas) {
            data.addRow([s.sistema, Number(s.usuarios)]);
        }



        // Set chart options
        var options = {
            'title': 'Cuantos usuarios hay en cada sistema',
            'width': 1000,
            'height': 600
        };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
        chart.draw(data, options);
    }
}


function cargarSistemas() {
    var sistemas = localStorage.getItem('sistemas');
    if (sistemas) {
        this.sistemas = JSON.parse(sistemas);
    }
}