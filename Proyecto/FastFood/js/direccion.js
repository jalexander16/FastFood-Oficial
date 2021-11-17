function verModalDireccion(idOp, dir_id) {
    $('#aux_idOp').val(idOp);
    $('#aux_id').val(dir_id);
    $("#aux_idUrl").val('707070');
    switch (idOp) {
        case '1010': //INSERTAR
            $("#aux_titulo").text('Agregar Dirección');
            $("#aux_nombre").html('Dirección:');
            limpiarCamposDireccion();
            $("#btn_auxpersona").val('Guardar');
            estadoCamposDireccion(true);
            $("#btn_auxpersona").css('background-color', '#39c');
            $("#btn_auxpersona").hover(function() {
                $(this).css("background-color", "#20b2aa");
            }, function() {
                $(this).css("background-color", "#39c");
            });
            break;
        case '2020': //EDITAR
            $("#aux_titulo").text('Editar Dirección');
            cargarDatosDireccion(dir_id);
            $("#btn_auxpersona").val('Guardar');
            estadoCamposDireccion(true);
            $("#btn_auxpersona").css('background-color', '#39c');
            $("#btn_auxpersona").hover(function() {
                $(this).css("background-color", "#20b2aa");
            }, function() {
                $(this).css("background-color", "#39c");
            });
            break;
        case '3030': //ELIMINAR
            $("#aux_titulo").text('Eliminar Dirección');
            cargarDatosDireccion(dir_id);
            $("#btn_auxpersona").val('Eliminar');
            estadoCamposDireccion(false);
            $("#btn_auxpersona").css('background-color', '#ca1b1b');
            $("#btn_auxpersona").hover(function() {
                $(this).css("background-color", "rgb(255, 0, 0)");
            }, function() {
                $(this).css("background-color", "#ca1b1b");
            });
            break;
        case '4040': //VER
            $("#aux_titulo").text('Detalle Dirección');
            cargarDatosDireccion(dir_id);
            $("#btn_auxpersona").val('Aceptar');
            estadoCamposDireccion(false);
            $("#btn_auxpersona").css('background-color', '#39c');
            $("#btn_auxpersona").hover(function() {
                $(this).css("background-color", "#20b2aa");
            }, function() {
                $(this).css("background-color", "#39c");
            });
            break;
    }
}

function limpiarCamposDireccion() {
    $('#aux_texto').val('');
    $('#aux_observaciones').val('');
}

function estadoCamposDireccion(estado) {
    if (estado) {
        $('#aux_texto').removeAttr('disabled');
        $('#aux_observaciones').removeAttr('disabled');
    } else {
        $('#aux_texto').attr('disabled', 'disabled');
        $('#aux_observaciones').attr('disabled', 'disabled');
    }
}

function cargarDatosDireccion(dir_id) {
    let dataJSON = {
        idOp: '4040',
        idUrl: "707070",
        information: {
            dir_id: dir_id
        }
    }

    $.post("../php/general.php", { dataJSON }, function(response) {
        //console.log(response);
        var respuesta = $.parseJSON(response);
        if (respuesta.status == 1) {
            $('#aux_texto').val(respuesta.information.dir_direccion);
            $('#aux_observaciones').val(respuesta.information.dir_observaciones);
        } else if (respuesta.status == 0) {
            alert("Ha ocurrido un error inesperado");
        }
    });
}

function habilitarOpcionesDireccion(idOpciones) {
    $("a[name='btnD']").addClass("not-active");
    $('#btn_verD' + idOpciones).removeClass('not-active');
    $('#btn_editarD' + idOpciones).removeClass('not-active');
    $('#btn_eliminarD' + idOpciones).removeClass('not-active');
}