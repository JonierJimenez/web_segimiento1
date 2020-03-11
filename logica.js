$(function () {
    $('#aggMascotas').hide();
    $('#u-tabla2').hide();
    $('#lpro').hide();
    agregarUsuario();
    editarUsuario();
    guardarEdicionUsuario();
    eliminar();
    aggMascotas();
});

function agregarUsuario() {
    $('#aggP').on('click', function (e) {
        e.preventDefault();
        var nombre = $("#nombre")
        var apellido = $("#apellido");
        var direccion = $("#direccion")
        var telefono = $("#telefono");
        var opciones = $("#opciones");

        $('#u-tabla').append("<tr>"
            + "<td>" + nombre.val() + "</td>"
            + "<td>" + apellido.val() + "</td>"
            + "<td>" + direccion.val() + "</td>"
            + "<td>" + telefono.val() + "</td>"
            + "<td><button class='btn btn-primary caggM'>Agregar Mascotas</button></td>" +
            "</tr>");
    });
}
function editarUsuario() {
    $('#u-tabla').on('click', '.caggM', function (e) {
        e.preventDefault();
        alert("hola");
        $('#aggMascotas').show();
        var tr = $(this).closest('tr');
        var tdNombre = tr.children("td:nth-child(1)");
        var tdApellido = tr.children("td:nth-child(2)");
        var nombrePersona = tdNombre.html();

        var nombremascota = $('#nombremascota');
        var tipomascota = $('#tipomascota');
        var fechamascota = $('#fechamascota');
        

        $("#aggM").on("click" ,function(e){
            e.preventDefault();
            $('#u-tabla2').show();
            $('#u-tabla2').append("<tr>"
            + "<td>" + nombremascota.val() + "</td>"
            + "<td>" + tipomascota.val() + "</td>"
            + "<td>" + fechamascota.val() + "</td>"
            + "</tr>")
        });
   

        

        $("#npropietario").html(nombrePersona);
       

        var vNombre = tdNombre.html();



    });
}

