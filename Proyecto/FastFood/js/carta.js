function cargarCarta() {
    return conten = '<div id="conten">' +
        '<div class="usuario">' +
        '<div class="form-user-header">' +
        '<h2>Carta</h2>' +
        '</div>' +
        '<div class="options">' +
        '<div class="col-x1">' +
        '<label>Categoría:</label>' +
        '<select name="categoria" id="categoria" class="select" onchange="filtrarPorNombreCarta();">' +
        '<option value="0">Todas</option>' +
        '<option value="1">Comidas</option>' +
        '<option value="2">Bebidas</option>' +
        '</select>' +
        '</div>' +
        '<div class="col-x2">' +
        '<label >Filtrar:</label>' +
        '<input type="text" id="filtrarCarta" oninput="filtrarPorNombreCarta();">' +
        '</div>' +
        '<a href="#openModal" class="add" id="add" onclick="verModalCarta(\'1010\', \'0\');">+ Nuevo</a>' +
        '</div>' +

        '<div class="form-body">' +
        '<table class="tabla-carta">' +
        '<thead>' +
        '<tr>' +
        '<th></th>' +
        '<th>Id</th>' +
        '<th>Nombre</th>' +
        '<th>Valor</th>' +
        '<th>Descripción</th>' +
        '<th>Opciones</th>' +
        '</tr>' +
        '</thead>' +
        '<tbody id="listaProductos">' +
        '<!--<tr>' +
        '<td><input type="radio" id="car_id1" name="grupoCarta" onclick="habilitarOpciones(1);"></td>' +
        '<td>1</td>' +
        '<td>Papas</td>' +
        '<td>$ 5.000,00</td>' +
        '<td>Contiene...</td>' +
        '<td>' +
        '<a href="#openModal" onclick="verModalCarta(\'4040\', \'1\');" class="ver not-active" id="btn_ver1" name="btn"><img class="icon" src="../icons/view.png" alt=""></a>' +
        '<a href="#openModal" onclick="verModalCarta(\'2020\', \'1\');" class="editar not-active" id="btn_editar1" name="btn"><img class="icon" src="../icons/edit.png" alt=""></a>' +
        '<a href="#openModal" onclick="verModalCarta(\'3030\', \'1\');" class="eliminar not-active" id="btn_eliminar1" name="btn"><img class="icon" src="../icons/delete.png" alt=""></a>' +
        '</td>' +
        '</tr>-->' +
        '</tbody>' +
        '</table>' +
        '</div>' +
        '</div>' +
        '</div>' +

        '<div id="openModal" class="modalDialog">' +
        '<form id="frm_carta" name="frm_carta">' +
        '<input type="hidden" value="1" id="idOp">' +
        '<input type="hidden" value="1" id="car_id">' +
        '<div class="modal-header">' +
        '<a href="#close" id="closeModal" title="Close" class="close">X</a>' +
        '<h2 id="car_titulo">Titulo</h2>' +
        '</div>' +
        '<div class="modal-body">' +
        '<div class="form-group">' +
        '<label for="frm_carta">Nombre:</label>' +
        '<input type="text" id="nomProducto" required>' +
        '</div>' +
        '<div class="form-group">' +
        '<label for="frm_carta">Valor:</label>' +
        '<input type="text" id="valProducto" required>' +
        '</div>' +
        '<div class="form-group">' +
        '<label for="frm_carta">Descripción:</label>' +
        '<textarea cols="40" name="objeto3" spellcheck="true" id="descProducto"></textarea>' +
        '</div>' +
        '<div class="form-group">' +
        '<label >Categoría:</label>' +
        '<select name="catProducto" id="catProducto" class="select">' +
        '<option value="1">Seleccione</option>' +
        '<option value="2">Bebidas</option>' +
        '<option value="3">Comidas</option>' +
        '</select>' +
        '</div>' +
        '</div>' +
        '<div class="modal-footer">' +
        '<input type="button" value="carta" id="btn_carta" onclick="guardarCarta();">' +
        '</div>' +
        '</form>' +
        '</div>';
}

function listarCarta() {
    let dataJSON = {
        idOp: '6060',
        idUrl: "404040",
        information: {

        }
    }

    $("#contenido").html(cargarCarta());
    listarTipo(); //LISTA LAS CATEGORÍAS

    $.post("../php/general.php", { dataJSON }, function(response) {
        var respuesta = $.parseJSON(response);
        //console.log(respuesta.information);
        var producto = "";
        if (respuesta.status == 1) {
            var co = 1;
            for (x of respuesta.information) {
                //console.log(x.car_id + ' ' + x.car_nombre);
                producto += '<tr>' +
                    '<td><input type="radio" id="car_id' + x.car_id + '" name="grupoCarta" onclick="habilitarOpciones(' + x.car_id + ');"></td>' +
                    '<td>' + co + '</td>' +
                    '<td>' + x.car_nombre + '</td>' +
                    '<td>$ ' + x.car_valor + '</td>' +
                    '<td class="autoAjuste">' + x.car_descripcion + '</td>' +
                    '<td class="options-table">' +
                    '<a href="#openModal" onclick="verModalCarta(\'4040\', \'' + x.car_id + '\');" class="ver not-active" id="btn_ver' + x.car_id + '" name="btn"><img class="icon" src="../icons/view.png" alt=""></a>' +
                    '<a href="#openModal" onclick="verModalCarta(\'2020\', \'' + x.car_id + '\');" class="editar not-active" id="btn_editar' + x.car_id + '" name="btn"><img class="icon" src="../icons/edit.png" alt=""></a>' +
                    '<a href="#openModal" onclick="verModalCarta(\'3030\', \'' + x.car_id + '\');" class="eliminar not-active" id="btn_eliminar' + x.car_id + '" name="btn"><img class="icon" src="../icons/delete.png" alt=""></a>' +
                    '</td>' +
                    '</tr>';
                co++;
            }
            $("#listaProductos").html(producto);

        } else if (respuesta.status == 0) {
            alert("Ha ocurrido un error inesperado");
        }
    });
}

function verModalCarta(idOp, car_id) {
    $('#idOp').val(idOp);
    $('#car_id').val(car_id);
    switch (idOp) {
        case '1010': //INSERTAR
            $("#car_titulo").text('Agregar producto');
            limpiarCamposCarta();
            $("#btn_carta").val('Guardar');
            estadoCamposCarta(true);
            break;
        case '2020': //EDITAR
            $("#car_titulo").text('Editar producto');
            cargarDatosCarta(car_id);
            $("#btn_carta").val('Guardar');
            estadoCamposCarta(true);
            break;
        case '3030': //ELIMINAR
            $("#car_titulo").text('Eliminar producto');
            cargarDatosCarta(car_id);
            $("#btn_carta").val('Eliminar');
            estadoCamposCarta(false);
            $("#btn_carta").css('background-color', '#ca1b1b');
            $("#btn_carta").hover(function() {
                $(this).css("background-color", "rgb(255, 0, 0)");
            }, function() {
                $(this).css("background-color", "#ca1b1b");
            });
            break;
        case '4040': //VER PRODUCTO
            console.log("Vista producto");
            $("#car_titulo").text('Detalle producto');
            cargarDatosCarta(car_id);
            $("#btn_carta").val('Aceptar');
            estadoCamposCarta(false);
            $("#btn_carta").css('background-color', '#39c');
            $("#btn_carta").hover(function() {
                $(this).css("background-color", "#20b2aa");
            }, function() {
                $(this).css("background-color", "#39c");
            });
            break;
    }
}

function limpiarCamposCarta() {
    $('#nomProducto').val('');
    $('#valProducto').val('');
    $('#descProducto').val('');
}

function estadoCamposCarta(estado) {
    if (estado) {
        $('#nomProducto').removeAttr('disabled');
        $('#valProducto').removeAttr('disabled');
        $('#descProducto').removeAttr('disabled');
        $('select#catProducto').removeAttr('disabled');
    } else {
        $('#nomProducto').attr('disabled', 'disabled');
        $('#valProducto').attr('disabled', 'disabled');
        $('#descProducto').attr('disabled', 'disabled');
        $('select#catProducto').attr('disabled', 'disabled');
    }
}

function validarCamposCarta() {
    if ($('#nomProducto').val() != '') {
        if ($('#valProducto').val() != '') {
            $('select#catProducto').on('change', function() {
                if ($(this).val() != 'Seleccione') {
                    return true;
                } else {
                    return false;
                }
            });
        } else {
            return false;
        }
    } else {
        return false;
    }
}

function cargarDatosCarta(car_id) {
    let dataJSON = {
        idOp: '4040',
        idUrl: "404040",
        information: {
            car_id: car_id
        }
    }

    $.post("../php/general.php", { dataJSON }, function(response) {
        var respuesta = $.parseJSON(response);
        //console.log(respuesta.information);
        if (respuesta.status == 1) {
            $('#nomProducto').val(respuesta.information.car_nombre);
            $('#valProducto').val(respuesta.information.car_valor);
            $('#descProducto').val(respuesta.information.car_descripcion);
            //window.location = "./html/Principal.html";
        } else if (respuesta.status == 0) {
            alert("Ha ocurrido un error inesperado");
        }
    });
}

function guardarCarta() {
    /*$('select#catProducto').on('change',function(){
      catProducto = $(this).val();
    });*/
    var idOp = $("#idOp").val();
    let dataJSON = {
        idOp: $("#idOp").val(),
        idUrl: "404040",
        information: {
            car_id: $("#car_id").val(),
            car_nombre: $("#nomProducto").val(),
            car_valor: $("#valProducto").val(),
            car_descripcion: $("#descProducto").val(),
            tip_id: $("#catProducto").val()
        }
    };
    if (idOp == '3030') { //SI SE VA A ELIMINAR
        var opcion = confirm("¿Está segur@ de eliminar el producto?");
        if (opcion == true) {
            mensaje = "Has clickado OK";
            $.post("../php/general.php", { dataJSON }, function(response) {
                var respuesta = $.parseJSON(response);
                //console.log(response);
                if (respuesta.status == 1) {
                    alert(respuesta.msg);
                    listarCarta();
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
                listarCarta();
            } else if (respuesta.status == 0) {
                alert("Error");
            }
        });
    }
}

function filtrarPorNombreCarta() {
    let dataJSON = {
        idOp: "7070",
        idUrl: "404040",
        information: {
            tip_id: $("#categoria").val(),
            car_nombre: $("#filtrarCarta").val()
        }
    }



    $.post("../php/general.php", { dataJSON }, function(response) {
        //console.log(response);
        var respuesta = $.parseJSON(response);
        //console.log(respuesta);
        var producto = "";
        if (respuesta.status == 1) {
            var co = 1;
            for (x of respuesta.information) {
                producto += '<tr>' +
                    '<td><input type="radio" id="car_id' + x.car_id + '" name="grupoCarta" onclick="habilitarOpciones(' + x.car_id + ');"></td>' +
                    '<td>' + co + '</td>' +
                    '<td>' + x.car_nombre + '</td>' +
                    '<td>$ ' + x.car_valor + '</td>' +
                    '<td class="autoAjuste">' + x.car_descripcion + '</td>' +
                    '<td class="options-table">' +
                    '<a href="#openModal" onclick="verModalCarta(\'4040\', \'' + x.car_id + '\');" class="ver not-active" id="btn_ver' + x.car_id + '" name="btn"><img class="icon" src="../icons/view.png" alt=""></a>' +
                    '<a href="#openModal" onclick="verModalCarta(\'2020\', \'' + x.car_id + '\');" class="editar not-active" id="btn_editar' + x.car_id + '" name="btn"><img class="icon" src="../icons/edit.png" alt=""></a>' +
                    '<a href="#openModal" onclick="verModalCarta(\'3030\', \'' + x.car_id + '\');" class="eliminar not-active" id="btn_eliminar' + x.car_id + '" name="btn"><img class="icon" src="../icons/delete.png" alt=""></a>' +
                    '</td>' +
                    '</tr>';
                co++;
            }
            $("#listaProductos").html(producto);
        }
    });
}