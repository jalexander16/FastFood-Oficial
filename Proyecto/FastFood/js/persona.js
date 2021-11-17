$(document).ready(function() { //AL CARGAR EL DOCUMENTO

});

var tempoTelefonos;
var tempoDirecciones;

function listarPersonas() {
    let dataJSON = {
        idOp: '6060',
        idUrl: "202020",
        information: {

        }
    }
    $("#contenido").html(cargarPersona());
    $.post("../php/general.php", { dataJSON }, function(response) {
        //console.log(response);
        var respuesta = $.parseJSON(response);
        //console.log(respuesta.information);
        var persona = "";
        if (respuesta.status == 1) {
            var co = 1;
            for (x of respuesta.information) {
                //console.log(x.car_id + ' ' + x.car_nombre);
                persona += '<tr>' +
                    '<td><input type="radio" id="per_id' + x.per_id + '" name="grupoPersona" onclick="habilitarOpciones(' + x.per_id + ');"></td>' +
                    '<td>' + co + '</td>' +
                    '<td>' + x.per_nombre1 + '</td>' +
                    '<td>' + x.per_nombre2 + '</td>' +
                    '<td>' + x.per_apellido1 + '</td>' +
                    '<td>' + x.per_apellido2 + '</td>' +
                    '<td class="options-table">' +
                    '<a href="#" onclick="verModalPersona(\'4040\', \'' + x.per_id + '\');" class="ver not-active" id="btn_ver' + x.per_id + '" name="btn"><img class="icon" src="../icons/view.png" alt=""></a>' +
                    '<a href="#" onclick="verModalPersona(\'2020\', \'' + x.per_id + '\');" class="editar not-active" id="btn_editar' + x.per_id + '" name="btn"><img class="icon" src="../icons/edit.png" alt=""></a>' +
                    '<a href="#" onclick="verModalPersona(\'3030\', \'' + x.per_id + '\');" class="eliminar not-active" id="btn_eliminar' + x.per_id + '" name="btn"><img class="icon" src="../icons/delete.png" alt=""></a>' +
                    '</td>' +
                    '</tr>';
                co++;
            }
            $("#listaPersonas").html(persona);

        } else if (respuesta.status == 0) {
            alert("Ha ocurrido un error inesperado");
        }
    });
}

function verModalPersona(idOp, per_id) {
    $('#idOp').val(idOp);
    $('#per_id').val(per_id);
    switch (idOp) {
        case '1010': //INSERTAR
            $("#contenido").html(detallePersona(idOp, per_id));
            $("#per_titulo").text('Agregar Persona');
            limpiarCamposPersona();
            $("#btn_persona").html('Guardar');
            estadoCamposPersona(true);
            break;
        case '2020': //EDITAR
            $("#contenido").html(detallePersona(idOp, per_id));
            $("#per_titulo").text('Editar Persona');
            cargarDatosPersona(per_id);
            $("#btn_persona").html('Guardar');
            estadoCamposPersona(true);
            break;
        case '3030': //ELIMINAR
            $("#per_titulo").text('Eliminar Persona');
            $("#contenido").html(detallePersona(idOp, per_id));
            cargarDatosPersona(per_id);
            $("#btn_persona").html('Eliminar');
            estadoCamposPersona(false);
            $("#btn_persona").css('background-color', '#ca1b1b');
            $("#btn_persona").hover(function() {
                $(this).css("background-color", "rgb(255, 0, 0)");
            }, function() {
                $(this).css("background-color", "#ca1b1b");
            });
            break;
        case '4040': //VER PERSONA
            $("#contenido").html(detallePersona(idOp, per_id));
            $("#per_titulo").text('Detalle Persona');
            cargarDatosPersona(per_id);
            $("#btn_persona").html('Aceptar');
            estadoCamposPersona(false);
            $("#btn_persona").css('background-color', '#39c');
            $("#btn_persona").hover(function() {
                $(this).css("background-color", "#20b2aa");
            }, function() {
                $(this).css("background-color", "#39c");
            });
            break;
    }
}

function cargarPersona() {
    return conten = '<div id="conten" > ' +
        '<div class="usuario">' +
        '<div class="form-user-header">' +
        '<h2>Personas</h2>' +
        '</div>' +
        '<div class="options">' +
        '<div class="col-x1">' +
        '<label>Categoría:</label>' +
        '<select name="tipo_filtro" id="tipo_filtro" class="select" onchange="filtroPersona();">' +
        '<option value="0">Todas</option>' +
        '<option value="1">Documento</option>' +
        '<option value="2">Nombre y Apellido</option>' +
        '</select>' +
        '</div>' +
        '<div class="col-x2">' +
        '<label >Filtrar:</label>' +
        '<input type="text" id="filtrarPersona" oninput="filtroPersona();">' +
        '</div>' +
        '<a href="#" class="add" id="add" onclick="verModalPersona(\'1010\', \'0\');">+ Nuevo</a>' +
        '</div>' +

        '<div class="form-body">' +
        '<table class="tabla-carta">' +
        '<thead>' +
        '<tr>' +
        '<th></th>' +
        '<th>Id</th>' +
        '<th>Nombre 1</th>' +
        '<th>Nombre 2</th>' +
        '<th>Apellido 1</th>' +
        '<th>Apellido 2</th>' +
        '<th>Opciones</th>' +
        '</tr>' +
        '</thead>' +
        '<tbody id="listaPersonas">' +

        '</tbody>' +
        '</table>' +
        '</div>' +
        '</div>' +
        '</div>';
}

function listarPersona() { //SIN UTILIZAR
    let dataJSON = {
        idOp: '6060',
        idUrl: "202020",
        information: {

        }
    }


    $.post("../php/general.php", { dataJSON }, function(response) {
        //console.log(response);
        var respuesta = $.parseJSON(response);
        var categoria = '<option value="0">Todas</option>';
        if (respuesta.status == 1) {
            var co = 1;
            for (x of respuesta.information) {
                categoria += '<option value="' + x.tip_id + '">' + x.tip_nombre + '</option>';
                co++;
            }
            $("#categoria").html(categoria);
            $("#catProducto").html(categoria);
        } else if (respuesta.status == 0) {
            alert("Ha ocurrido un error inesperado");
        }
    });
}

function limpiarCamposPersona() {
    $('#per_nombre1').val('');
    $('#per_nombre1').val('');
    $('#per_apellido1').val('');
    $('#per_apellido2').val('');
}

function estadoCamposPersona(estado) {
    if (estado) {
        $('#per_documento').removeAttr('disabled');
        $('#per_nombre1').removeAttr('disabled');
        $('#per_nombre2').removeAttr('disabled');
        $('#per_apellido1').removeAttr('disabled');
        $('#per_apellido2').removeAttr('disabled');
        $("[name=grupoTelefono]").removeAttr('disabled');
    } else {
        $('#per_documento').attr('disabled', 'disabled');
        $('#per_nombre1').attr('disabled', 'disabled');
        $('#per_nombre2').attr('disabled', 'disabled');
        $('#per_apellido1').attr('disabled', 'disabled');
        $('#per_apellido2').attr('disabled', 'disabled');
        $("input[name=grupoTelefono]").attr('disabled', 'disabled');
        //var opciones1 = $("input[name=grupoTelefono]");
        var opciones1 = document.getElementsByName("grupoTelefono");
        for (var i = 0; i < opciones1.length; i++) {
            alert("Alerta");
            opciones1[i].disabled = true;
        }

    }
}

function cargarDatosPersona(per_id) {
    let dataJSON = {
        idOp: '4040',
        idUrl: "202020",
        information: {
            per_id: per_id
        }
    }

    $.post("../php/general.php", { dataJSON }, function(response) {
        //console.log(response);
        var respuesta = $.parseJSON(response);
        if (respuesta.status == 1) {
            $('#per_documento').val(respuesta.information.per_documento);
            $('#per_nombre1').val(respuesta.information.per_nombre1);
            $('#per_nombre2').val(respuesta.information.per_nombre2);
            $('#per_apellido1').val(respuesta.information.per_apellido1);
            $('#per_apellido2').val(respuesta.information.per_apellido2);
            var telefono;
            if (respuesta.information.per_Telefonos != null) {
                for (x of respuesta.information.per_Telefonos) {
                    //console.log(x.car_id + ' ' + x.car_nombre);
                    telefono += '<tr>' +
                        '<td><input type="radio" id="tel_id' + x.tel_id + '" name="grupoTelefono" onclick="habilitarOpcionesTelefono(' + x.tel_id + ');"></td>' +
                        '<td>' + x.tel_telefono + '</td>' +
                        '<td class="options-table">' +
                        '<a href="#openModal" onclick="verModalTelefono(\'4040\', \'' + x.tel_id + '\');" class="ver not-active" id="btn_verT' + x.tel_id + '" name="btnT"><img class="icon" src="../icons/view.png" alt=""></a>' +
                        '<a href="#openModal" onclick="verModalTelefono(\'2020\', \'' + x.tel_id + '\');" class="editar not-active" id="btn_editarT' + x.tel_id + '" name="btnT"><img class="icon" src="../icons/edit.png" alt=""></a>' +
                        '<a href="#openModal" onclick="verModalTelefono(\'3030\', \'' + x.tel_id + '\');" class="eliminar not-active" id="btn_eliminarT' + x.tel_id + '" name="btnT"><img class="icon" src="../icons/delete.png" alt=""></a>' +
                        '</td>' +
                        '</tr>';
                }
            }
            var direccion;
            if (respuesta.information.per_Direcciones != null) {
                for (x of respuesta.information.per_Direcciones) {
                    direccion += '<tr>' +
                        '<td><input type="radio" id="dir_id' + x.dir_id + '" name="grupoDireccion" onclick="habilitarOpcionesDireccion(' + x.dir_id + ');"></td>' +
                        '<td class="autoAjuste">' + x.dir_direccion + '</td>' +
                        '<td class="options-table">' +
                        '<a href="#openModal" onclick="verModalDireccion(\'4040\', \'' + x.dir_id + '\');" class="ver not-active" id="btn_verD' + x.dir_id + '" name="btnD"><img class="icon" src="../icons/view.png" alt=""></a>' +
                        '<a href="#openModal" onclick="verModalDireccion(\'2020\', \'' + x.dir_id + '\');" class="editar not-active" id="btn_editarD' + x.dir_id + '" name="btnD"><img class="icon" src="../icons/edit.png" alt=""></a>' +
                        '<a href="#openModal" onclick="verModalDireccion(\'3030\', \'' + x.dir_id + '\');" class="eliminar not-active" id="btn_eliminarD' + x.dir_id + '" name="btnD"><img class="icon" src="../icons/delete.png" alt=""></a>' +
                        '</td>' +
                        '</tr>';
                }
            }
            $("#listaTelefonos").html(telefono);
            $("#listaDirecciones").html(direccion);
        } else if (respuesta.status == 0) {
            alert("Ha ocurrido un error inesperado");
        }
    });
}

function guardarPersona() {
    var idOp = $("#idOp").val();
    let dataJSON = {
        idOp: idOp,
        idUrl: "202020",
        information: {
            per_id: $("#per_id").val(),
            per_documento: $("#per_documento").val(),
            per_nombre1: $("#per_nombre1").val(),
            per_nombre2: $("#per_nombre2").val(),
            per_apellido1: $("#per_apellido1").val(),
            per_apellido2: $("#per_apellido2").val()
        }
    };
    if (idOp == '4040') { //VER DETALLE
        //verModalPersona('4040', $("#per_id").val());
        listarPersonas();
    } else if (idOp == '3030') { //SI SE VA A ELIMINAR
        var opcion = confirm("¿Está segur@ de eliminar la persona?");
        if (opcion == true) {
            $.post("../php/general.php", { dataJSON }, function(response) {
                var respuesta = $.parseJSON(response);
                console.log(response);
                if (respuesta.status == 1) {
                    alert(respuesta.msg);
                    listarPersonas();
                } else if (respuesta.status == 0) {
                    alert("Error");
                }
            });
        } else {
            mensaje = "Has clickado Cancelar";

        }
    } else { //ACTUALIZAR O NUEVO
        $.post("../php/general.php", { dataJSON }, function(response) {
            var respuesta = $.parseJSON(response);
            //console.log(response);
            if (respuesta.status == 1) {
                alert(respuesta.msg);
                listarPersonas();
            } else if (respuesta.status == 0) {
                alert("Error");
            }
        });
    }
}

function detallePersona(idOp, per_id) {
    var conten = '<form id="frm_persona" name="frm_persona">' +
        '<input type="hidden" value="' + idOp + '" id="idOp">' +
        '<input type="hidden" value="' + per_id + '" id="per_id">' +
        '<div id="conten">' +
        '<div class="usuario">' +
        '<div class="form-user-header">' +
        '<h2>Persona</h2>' +
        '</div>' +
        '<div class="section-grid">' +
        '<div class="col-x2-person">' +
        '<div class="form-group">' +
        '<img src="../icons/profilex200.png" alt="" id="iconPersona">' +
        '</div>' +
        '</div>' +
        '<div class="col-x2-person">' +
        '<div class="form-group">' +
        '<label for="frm_persona">Documento:</label>' +
        '<input type="text" id="per_documento" required>' +
        '</div>' +
        '</div>' +
        '<div class="col-x2-person">' +
        '<div class="form-group">' +
        '<label for="frm_persona">Nombre 1:</label>' +
        '<input type="text" id="per_nombre1" required>' +
        '</div>' +
        '</div>' +
        '<div class="col-x2-person">' +
        '<div class="form-group">' +
        '<label for="frm_persona">Nombre 2:</label>' +
        '<input type="text" id="per_nombre2" required>' +
        '</div>' +
        '</div>' +
        '<div class="col-x2-person">' +
        '<div class="form-group">' +
        '<label for="frm_persona">Apellido 1:</label>' +
        '<input type="text" id="per_apellido1" required>' +
        '</div>' +
        '</div>' +
        '<div class="col-x2-person">' +
        '<div class="form-group">' +
        '<label for="frm_persona">Apellido 2:</label>' +
        '<input type="text" id="per_apellido2" required>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="section-grid">' +
        '<div class="col-x2-person">' +
        '<div class="form-group-person">' +
        '<label for="frm_persona">Teléfono:</label>' +
        '<a href="#openModal" class="add-telephone" id="add" onclick="verModalTelefono(\'1010\', \'0\');">+ Nuevo</a>' +
        '<table class="tabla-carta">' +
        '<thead>' +
        '<tr>' +
        '<th></th>' +
        '<th>Teléfono</th>' +
        '<th>Opciones</th>' +
        '</tr>' +
        '</thead>' +
        '<tbody id="listaTelefonos">' +

        '</tbody>' +
        '</table>' +
        '</div>' +
        '</div>' +
        '<div class="col-x2-person">' +
        '<div class="form-group-person">' +
        '<label for="frm_persona">Dirección:</label>' +
        '<a href="#openModal" class="add-telephone" id="add" onclick="verModalDireccion(\'1010\', \'0\');">+ Nuevo</a>' +
        '<table class="tabla-carta">' +
        '<thead>' +
        '<tr>' +
        '<th></th>' +
        '<th>Dirección</th>' +
        '<th>Opciones</th>' +
        '</tr>' +
        '</thead>' +
        '<tbody id="listaDirecciones">' +

        '</tbody>' +
        '</table>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="form-footer-person">' +
        '<button type="button" value="" class="btn-person" id="btn_persona" onclick="guardarPersona();">Guardar</button>' +
        '</div>' +

        '</div>' +
        '</div>' +
        '</form>' +

        '<div id="openModal" class="modalDialog">' +
        '<form id="frm_aux" name="frm_aux">' +
        '<input type="hidden" value="1" id="aux_idOp">' +
        '<input type="hidden" value="1" id="aux_id">' +
        '<input type="hidden" value="1" id="aux_idUrl">' +
        '<div class="modal-header">' +
        '<a href="#close" id="closeModal" title="Close" class="close">X</a>' +
        '<h2 id="aux_titulo">Titulo</h2>' +
        '</div>' +
        '<div class="modal-body">' +
        '<div class="form-group">' +
        '<label for="frm_aux" id="aux_nombre">Nombre:</label>' +
        '<input type="text" id="aux_texto" required>' +
        '</div>' +
        '<div class="form-group">' +
        '<label for="frm_aux">Observaciones:</label>' +
        '<textarea cols="40" name="aux_observaciones" spellcheck="true" id="aux_observaciones"></textarea>' +
        '</div>' +
        '</div>' +
        '<div class="modal-footer">' +
        '<input type="button" value="name" id="btn_auxpersona" onclick="guardarAuxPersona();">' +
        '</div>' +
        '</form>' +
        '</div>';
    return conten;
}

function guardarAuxPersona() {
    var idOp = $("#aux_idOp").val();
    let dataJSON = {
        idOp: idOp,
        idUrl: $("#aux_idUrl").val(),
        information: {
            aux_id: $("#aux_id").val(),
            aux_texto: $("#aux_texto").val(),
            aux_observaciones: $("#aux_observaciones").val(),
            per_id: $("#per_id").val()
        }
    };
    if (idOp == '4040') { //VER DETALLE
        verModalPersona('4040', $("#per_id").val());
    } else if (idOp == '3030') { //SI SE VA A ELIMINAR
        var opcion = confirm("¿Está segur@ de eliminar el registro?");
        if (opcion == true) {
            $.post("../php/general.php", { dataJSON }, function(response) {
                console.log(response);
                var respuesta = $.parseJSON(response);
                if (respuesta.status == 1) {
                    alert(respuesta.msg);
                    verModalPersona('4040', $("#per_id").val());
                } else if (respuesta.status == 0) {
                    alert("Error");
                }
            });
        } else {
            mensaje = "Has clickado Cancelar";
        }
    } else { //ACTUALIZAR O NUEVO
        $.post("../php/general.php", { dataJSON }, function(response) {
            console.log(response);
            var respuesta = $.parseJSON(response);
            if (respuesta.status == 1) {
                alert(respuesta.msg);
                verModalPersona('4040', $("#per_id").val());
            } else if (respuesta.status == 0) {
                alert("Error");
            }
        });
    }
}

function filtroPersona() {
    let dataJSON = {
        idOp: "7070",
        idUrl: "202020",
        information: {
            tipo_filtro: $("#tipo_filtro").val(),
            filtro: $("#filtrarPersona").val()
        }
    }
    $.post("../php/general.php", { dataJSON }, function(response) {
        //console.log(response);
        var respuesta = $.parseJSON(response);
        var persona = "";
        if (respuesta.status == 1) {
            var co = 1;
            for (x of respuesta.information) {
                persona += '<tr>' +
                    '<td><input type="radio" id="per_id' + x.per_id + '" name="grupoPersona" onclick="habilitarOpciones(' + x.per_id + ');"></td>' +
                    '<td>' + co + '</td>' +
                    '<td>' + x.per_nombre1 + '</td>' +
                    '<td>' + x.per_nombre2 + '</td>' +
                    '<td>' + x.per_apellido1 + '</td>' +
                    '<td>' + x.per_apellido2 + '</td>' +
                    '<td class="options-table">' +
                    '<a href="#" onclick="verModalPersona(\'4040\', \'' + x.per_id + '\');" class="ver not-active" id="btn_ver' + x.per_id + '" name="btn"><img class="icon" src="../icons/view.png" alt=""></a>' +
                    '<a href="#" onclick="verModalPersona(\'2020\', \'' + x.per_id + '\');" class="editar not-active" id="btn_editar' + x.per_id + '" name="btn"><img class="icon" src="../icons/edit.png" alt=""></a>' +
                    '<a href="#" onclick="verModalPersona(\'3030\', \'' + x.per_id + '\');" class="eliminar not-active" id="btn_eliminar' + x.per_id + '" name="btn"><img class="icon" src="../icons/delete.png" alt=""></a>' +
                    '</td>' +
                    '</tr>';
                co++;
            }
            $("#listaPersonas").html(persona);

        } else if (respuesta.status == 0) {
            alert("Ha ocurrido un error inesperado");
        }
    });
}