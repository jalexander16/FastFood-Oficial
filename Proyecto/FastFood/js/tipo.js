function listarTipos() {
    let dataJSON = {
        idOp: '6060',
        idUrl: "505050",
        information: {

        }
    }

    $("#contenido").html(cargarTipo());

    $.post("../php/general.php", { dataJSON }, function (response) {
        var respuesta = $.parseJSON(response);
        //console.log(respuesta.information);
        var categoria = "";
        if (respuesta.status == 1) {
            var co = 1;
            for (x of respuesta.information) {
                //console.log(x.car_id + ' ' + x.car_nombre);
                categoria += '<tr>' +
                    '<td><input type="radio" id="tip_id' + x.tip_id + '" name="grupoTipo" onclick="habilitarOpciones(' + x.tip_id + ');"></td>' +
                    '<td>' + co + '</td>' +
                    '<td>' + x.tip_nombre + '</td>' +
                    '<td class="autoAjuste">' + x.tip_descripcion + '</td>' +
                    '<td class="options-table">' +
                    '<a href="#openModal" onclick="verModalTipo(\'4040\', \'' + x.tip_id + '\');" class="ver not-active" id="btn_ver' + x.tip_id + '" name="btn"><img class="icon" src="../icons/view.png" alt=""></a>' +
                    '<a href="#openModal" onclick="verModalTipo(\'2020\', \'' + x.tip_id + '\');" class="editar not-active" id="btn_editar' + x.tip_id + '" name="btn"><img class="icon" src="../icons/edit.png" alt=""></a>' +
                    '<a href="#openModal" onclick="verModalTipo(\'3030\', \'' + x.tip_id + '\');" class="eliminar not-active" id="btn_eliminar' + x.tip_id + '" name="btn"><img class="icon" src="../icons/delete.png" alt=""></a>' +
                    '</td>' +
                    '</tr>';
                co++;
            }
            $("#listaTipos").html(categoria);

        } else if (respuesta.status == 0) {
            alert("Ha ocurrido un error inesperado");
        }
    });
}

function verModalTipo(idOp, tip_id) {
    $('#idOp').val(idOp);
    $('#tip_id').val(tip_id);
    switch (idOp) {
        case '1010': //INSERTAR
            $("#tip_titulo").text('Agregar Categoría');
            limpiarCamposTipo();
            $("#btn_tipo").val('Guardar');
            estadoCamposTipo(true);
            break;
        case '2020': //EDITAR
            $("#tip_titulo").text('Editar Categoría');
            cargarDatosTipo(tip_id);
            $("#btn_tipo").val('Guardar');
            estadoCamposTipo(true);
            break;
        case '3030': //ELIMINAR
            $("#tip_titulo").text('Eliminar Categoría');
            cargarDatosTipo(tip_id);
            $("#btn_tipo").val('Eliminar');
            estadoCamposTipo(false);
            $("#btn_tipo").css('background-color', '#ca1b1b');
            $("#btn_tipo").hover(function () {
                $(this).css("background-color", "rgb(255, 0, 0)");
            }, function () {
                $(this).css("background-color", "#ca1b1b");
            });
            break;
        case '4040': //VER PRODUCTO
            $("#tip_titulo").text('Detalle Categoría');
            cargarDatosTipo(tip_id);
            $("#btn_tipo").val('Aceptar');
            estadoCamposTipo(false);
            $("#btn_tipo").css('background-color', '#39c');
            $("#btn_tipo").hover(function () {
                $(this).css("background-color", "#20b2aa");
            }, function () {
                $(this).css("background-color", "#39c");
            });
            break;
    }
}

function cargarTipo(){
    return conten = '<div id="conten">'+
    '<div class="usuario">'+
        '<div class="form-user-header">'+
            '<h2>Categorías</h2>'+
        '</div>'+
        '<div class="options">'+
            
            '<div class="col-x2">'+
                '<label >Filtrar:</label>'+
                '<input type="text" id="filtrarTipo" oninput="filtrarTipoPorNombre();">'+
            '</div>'+
            '<a href="#openModal" class="add" id="add" onclick="verModalTipo(\'1010\', \'0\');">+ Nuevo</a>'+
        '</div>'+

        '<div class="form-body">'+
            '<table class="tabla-carta">'+
                '<thead>'+
                    '<tr>'+
                        '<th></th>'+
                        '<th>Id</th>'+
                        '<th>Nombre</th>'+
                        '<th>Descripción</th>'+
                        '<th>Opciones</th>'+
                    '</tr>'+
                '</thead>'+
                '<tbody id="listaTipos">'+
                    
                '</tbody>'+
            '</table>'+
        '</div>'+
    '</div>'+
'</div>'+

'<div id="openModal" class="modalDialog">'+
    '<form id="frm_tipo" name="frm_tipo">'+
        '<input type="hidden" value="1" id="idOp">'+
        '<input type="hidden" value="1" id="tip_id">'+
        '<div class="modal-header">'+
            '<a href="#close" id="closeModal" title="Close" class="close">X</a>'+
            '<h2 id="tip_titulo">Titulo</h2>'+
        '</div>'+
        '<div class="modal-body">'+
            '<div class="form-group">'+
                '<label for="frm_tipo">Nombre:</label>'+
                '<input type="text" id="nomTipo" required>'+
            '</div>'+
            '<div class="form-group">'+
                '<label for="frm_tipo">Descripción:</label>'+
                '<textarea cols="40" name="descTipo" spellcheck="true" id="descTipo"></textarea>'+
            '</div>'+
        '</div>'+
        '<div class="modal-footer">'+
            '<input type="button" value="tipo" id="btn_tipo" onclick="guardarTipo();">'+
        '</div>'+
    '</form>'+
'</div>';
}

function listarTipo() {
    let dataJSON = {
        idOp: '6060',
        idUrl: "505050",
        information: {

        }
    }


    $.post("../php/general.php", { dataJSON }, function (response) {
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

function limpiarCamposTipo() {
    $('#nomTipo').val('');
    $('#descTipo').val('');
}

function estadoCamposTipo(estado) {
    if (estado) {
        $('#nomTipo').removeAttr('disabled');
        $('#descTipo').removeAttr('disabled');
    } else {
        $('#nomTipo').attr('disabled', 'disabled');
        $('#descTipo').attr('disabled', 'disabled');
    }
}

function cargarDatosTipo(tip_id) {
    let dataJSON = {
        idOp: '4040',
        idUrl: "505050",
        information: {
            tip_id: tip_id
        }
    }

    $.post("../php/general.php", { dataJSON }, function (response) {
        //console.log(response);
        var respuesta = $.parseJSON(response);
        if (respuesta.status == 1) {
            $('#nomTipo').val(respuesta.information.tip_nombre);
            $('#descTipo').val(respuesta.information.tip_descripcion);
        } else if (respuesta.status == 0) {
            alert("Ha ocurrido un error inesperado");
        }
    });
}

function guardarTipo() {
    var idOp = $("#idOp").val();
    let dataJSON = {
        idOp: $("#idOp").val(),
        idUrl: "505050",
        information: {
            tip_id: $("#tip_id").val(),
            tip_nombre: $("#nomTipo").val(),
            tip_descripcion: $("#descTipo").val()
        }
    };
    if (idOp == '3030') { //SI SE VA A ELIMINAR
        var opcion = confirm("¿Está segur@ de eliminar la categoría?");
        if (opcion == true) {
            $.post("../php/general.php", { dataJSON }, function (response) {
                var respuesta = $.parseJSON(response);
                //console.log(response);
                if (respuesta.status == 1) {
                    alert(respuesta.msg);
                    listarTipos();
                } else if (respuesta.status == 0) {
                    alert("Error");
                }
            });
        } else {
            mensaje = "Has clickado Cancelar";

        }
    } else { //ACTUALIZAR O NUEVO
        $.post("../php/general.php", { dataJSON }, function (response) {
            var respuesta = $.parseJSON(response);
            //console.log(response);
            if (respuesta.status == 1) {
                alert(respuesta.msg);
                listarTipos();
            } else if (respuesta.status == 0) {
                alert("Error");
            }
        });
    }
}