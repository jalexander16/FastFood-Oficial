function cargarPedido() {
    return conten = '<div id="conten">' +
        '<div class="usuario">' +
        '<div class="form-user-header">' +
        '<h2>Pedidos</h2>' +
        '</div>' +
        '<div class="options">' +
        '<div class="col-x1">' +
        '<label>Filtrar por:</label>' +
        '<select name="selectPedido" id="selectPedido" class="select" onchange="filtrarPedido();">' +
        '<option value="0">Todos</option>' +
        '<option value="1">Fecha</option>' +
        '<option value="2">Estado</option>' +
        '<option value="2">Cliente</option>' +
        '<option value="2">Mesa</option>' +
        '</select>' +
        '</div>' +
        '<div class="col-x2">' +
        '<label >Filtrar:</label>' +
        '<input type="text" id="filtrarPedido" oninput="filtrarPedido();">' +
        '</div>' +
        '<a href="#" class="add" id="add" onclick="verPedido(\'1010\', \'0\');">+ Nuevo</a>' +
        '</div>' +

        '<div class="form-body">' +
        '<table class="tabla-carta">' +
        '<thead>' +
        '<tr>' +
        '<th></th>' +
        '<th>Id</th>' +
        '<th>Mesa</th>' +
        '<th>Estado</th>' +
        '<th>Opciones</th>' +
        '</tr>' +
        '</thead>' +
        '<tbody id="listaPedidos">' +
        
        '</tbody>' +
        '</table>' +
        '</div>' +
        '</div>' +
        '</div>';
}

function listarPedidos() {
    let dataJSON = {
        idOp: '4040',
        idUrl: "303030",
        information: {
            
        }
    }

    $("#contenido").html(cargarPedido());
    $.post("../php/general.php", { dataJSON }, function(response) {
        //console.log(response);
        var respuesta = $.parseJSON(response);
        console.log(respuesta);
        var pedido = "";
        if (respuesta.status == 1) {
            var co = 1;
            for (x of respuesta.information) {
                //console.log(x.car_id + ' ' + x.car_nombre);
                pedido += '<tr>' +
                    '<td><input type="radio" id="ped_id' + x.ped_id + '" name="grupoPedido" onclick="habilitarOpciones(' + x.ped_id + ');"></td>' +
                    '<td>' + co + '</td>' +
                    '<td>' + x.mes_nombre + '</td>';
                if(x.ped_estado == 1){ //Despachado
                    pedido += '<td><spam class="estado0">Despachado<spam></td>';    
                }else{ //PENDIENTE
                    pedido += '<td><spam class="estado1">Pendiente<spam></td>'; 
                }
                pedido += '<td class="options-table">' +
                    '<a href="#" onclick="verPedido(\'4040\', \'' + x.ped_id + '\');" class="ver not-active" id="btn_ver' + x.ped_id + '" name="btn"><img class="icon" src="../icons/view.png" alt=""></a>' +
                    '<a href="#" onclick="verPedido(\'2020\', \'' + x.ped_id + '\');" class="editar not-active" id="btn_editar' + x.ped_id + '" name="btn"><img class="icon" src="../icons/edit.png" alt=""></a>' +
                    '<a href="#" onclick="verPedido(\'3030\', \'' + x.ped_id + '\');" class="eliminar not-active" id="btn_eliminar' + x.ped_id + '" name="btn"><img class="icon" src="../icons/delete.png" alt=""></a>' +
                    '</td>' +
                    '</tr>';
                co++;
            }
            $("#listaPedidos").html(pedido);

        } else if (respuesta.status == 0) {
            alert("Ha ocurrido un error inesperado");
        }
    });
}

function verPedido(idOp, ped_id) {
    $('#idOp').val(idOp);
    $('#ped_id').val(ped_id);
    switch (idOp) {
        case '1010': //INSERTAR
            $("#contenido").html(detallePedido(idOp, ped_id));
            limpiarCamposPedido();
            $("#btn_detPedido").val('Guardar');
            estadoCamposPedido(true);
            $("#btn_detPedido").css('background-color', '#39c');
            $("#btn_detPedido").hover(function() {
                $(this).css("background-color", "#20b2aa");
            }, function() {
                $(this).css("background-color", "#39c");
            });
            break;
        case '2020': //EDITAR
            $("#contenido").html(detallePedido(idOp, ped_id));
            cargarDatosPedido(ped_id);
            $("#btn_detPedido").val('Guardar');
            estadoCamposPedido(true);
            $("#btn_detPedido").css('background-color', '#39c');
            $("#btn_detPedido").hover(function() {
                $(this).css("background-color", "#20b2aa");
            }, function() {
                $(this).css("background-color", "#39c");
            });
            break;
        case '3030': //ELIMINAR
            $("#contenido").html(detallePedido(idOp, ped_id));
            cargarDatosPedido(ped_id);
            $("#btn_detPedido").val('Eliminar');
            estadoCamposPedido(false);
            $("#btn_detPedido").css('background-color', '#ca1b1b');
            $("#btn_detPedido").hover(function() {
                $(this).css("background-color", "rgb(255, 0, 0)");
            }, function() {
                $(this).css("background-color", "#ca1b1b");
            });
            break;
        case '4040': //VER
            $("#contenido").html(detallePedido(idOp, ped_id));
            cargarDatosPedido(ped_id);
            $("#btn_detPedido").val('Aceptar');
            estadoCamposPedido(false);
            $("#btn_detPedido").css('background-color', '#39c');
            $("#btn_detPedido").hover(function() {
                $(this).css("background-color", "#20b2aa");
            }, function() {
                $(this).css("background-color", "#39c");
            });
            break;
    }
}

function limpiarCamposPedido() {
    /*$('#nomProducto').val('');
    $('#valProducto').val('');
    $('#descProducto').val('');*/
}

function estadoCamposPedido(estado) {
    if (estado) {
        $('#mes_detPed').removeAttr('disabled');
        $('#cli_detPed').removeAttr('disabled');
        $('#add_detPed').removeAttr('disabled');
        $('#pedObservaciones').removeAttr('disabled');
        $('radio').removeAttr('disabled');
    } else {
        $('#mes_detPed').attr('disabled', 'disabled');
        $('#cli_detPed').attr('disabled', 'disabled');
        $('#add_detPed').attr('disabled', 'disabled');
        $('#pedObservaciones').attr('disabled', 'disabled');
        $('radio').attr('disabled', 'disabled');
    }
}

function validarCamposPedido() {
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

function cargarDatosPedido(ped_id) {
    let dataJSON = {
        idOp: '3030',
        idUrl: "303030",
        information: {
            ped_id: ped_id
        }
    }

    $.post("../php/general.php", { dataJSON }, function(response) {
        console.log(response);
        var respuesta = $.parseJSON(response);
        //console.log(respuesta.information);
        if (respuesta.status == 1) {
            $('#mes_detPed').val(respuesta.information.mes_id);
            var lista = $('#cli_detPed').html();
            $('#cli_detPed').html(lista +'<option value="'+respuesta.information.per_id+'">'+respuesta.information.nombre+'</option>');
            $('#cli_detPed').val(respuesta.information.per_id);
            $('#pedObservaciones').val(respuesta.information.ped_observaciones);
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
                    '<td>' + x.car_descripcion + '</td>' +
                    '<td>' +
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

//PREPARACIÓN DE PEDIDO