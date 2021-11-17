function verModalTelefono(idOp, tel_id) {
    console.log(idOp);
    $('#aux_idOp').val(idOp);
    $('#aux_id').val(tel_id);
    $("#aux_idUrl").val('606060');
    switch (idOp) {
        case '1010': //INSERTAR
            $("#aux_titulo").text('Agregar Teléfono');
            $("#aux_nombre").html('Teléfono:');
            limpiarCamposTelefono();
            $("#btn_auxpersona").val('Guardar');
            estadoCamposTelefono(true);
            $("#btn_auxpersona").css('background-color', '#39c');
            $("#btn_auxpersona").hover(function() {
                $(this).css("background-color", "#20b2aa");
            }, function() {
                $(this).css("background-color", "#39c");
            });
            break;
        case '2020': //EDITAR
            $("#aux_titulo").text('Editar Teléfono');
            cargarDatosTelefono(tel_id);
            $("#btn_auxpersona").val('Guardar');
            estadoCamposTelefono(true);
            $("#btn_auxpersona").css('background-color', '#39c');
            $("#btn_auxpersona").hover(function() {
                $(this).css("background-color", "#20b2aa");
            }, function() {
                $(this).css("background-color", "#39c");
            });
            break;
        case '3030': //ELIMINAR
            $("#aux_titulo").text('Eliminar Teléfono');
            cargarDatosTelefono(tel_id);
            $("#btn_auxpersona").val('Eliminar');
            estadoCamposTelefono(false);
            $("#btn_auxpersona").css('background-color', '#ca1b1b');
            $("#btn_auxpersona").hover(function() {
                $(this).css("background-color", "rgb(255, 0, 0)");
            }, function() {
                $(this).css("background-color", "#ca1b1b");
            });
            break;
        case '4040': //VER
            $("#aux_titulo").text('Detalle Teléfono');
            cargarDatosTelefono(tel_id);
            $("#btn_auxpersona").val('Aceptar');
            estadoCamposTelefono(false);
            $("#btn_auxpersona").css('background-color', '#39c');
            $("#btn_auxpersona").hover(function() {
                $(this).css("background-color", "#20b2aa");
            }, function() {
                $(this).css("background-color", "#39c");
            });
            break;
    }
}

function limpiarCamposTelefono() {
    $('#aux_texto').val('');
    $('#aux_observaciones').val('');
}

function estadoCamposTelefono(estado) {
    if (estado) {
        $('#aux_texto').removeAttr('disabled');
        $('#aux_observaciones').removeAttr('disabled');
    } else {
        $('#aux_texto').attr('disabled', 'disabled');
        $('#aux_observaciones').attr('disabled', 'disabled');
    }
}

function cargarDatosTelefono(tel_id) {
    let dataJSON = {
        idOp: '4040',
        idUrl: "606060",
        information: {
            tel_id: tel_id
        }
    }

    $.post("../php/general.php", { dataJSON }, function(response) {
        //console.log(response);
        var respuesta = $.parseJSON(response);
        if (respuesta.status == 1) {
            $('#aux_texto').val(respuesta.information.tel_telefono);
            $('#aux_observaciones').val(respuesta.information.tel_observaciones);
        } else if (respuesta.status == 0) {
            alert("Ha ocurrido un error inesperado");
        }
    });
}

function habilitarOpcionesTelefono(idOpciones) {
    $("a[name='btnT']").addClass("not-active");
    $('#btn_verT' + idOpciones).removeClass('not-active');
    $('#btn_editarT' + idOpciones).removeClass('not-active');
    $('#btn_eliminarT' + idOpciones).removeClass('not-active');
}