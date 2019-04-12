$(document).ready(function() {
    $('#topTen').DataTable( {
        "ajax": {
            "url": "http://env-app.jl.serv.net.mx/v1/topTen",
            "dataSrc": ""
        },
        "dom": '',
        "columns": [
            { "data": "score" },
            { "data": "identification" },
            { "data": "name" },
            { "data": "lastName" }            
        ],
        "order": [[ 0, "desc" ]]
    } );
} );
