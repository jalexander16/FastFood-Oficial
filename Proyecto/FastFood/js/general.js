$(document).ready(function () { //AL CARGAR EL DOCUMENTO
    //
});

function habilitarOpciones(idOpciones) {
    $("a[name='btn']").addClass("not-active");
    $('#btn_ver' + idOpciones).removeClass('not-active');
    $('#btn_editar' + idOpciones).removeClass('not-active');
    $('#btn_eliminar' + idOpciones).removeClass('not-active');
}

