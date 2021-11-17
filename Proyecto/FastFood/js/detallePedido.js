function detallePedido() {
    return conten = '<form id="frm_pedido" name="frm_pedido">' +
        '<input type="hidden" value="1" id="idOp">' +
        '<input type="hidden" value="1" id="ped_id">' +
        '<div id="conten">' +
        '<div class="usuario">' +
        '<div class="form-user-header">' +
        '<h2>Pedido</h2>' +
        '</div>' +
        '<div class="section-grid">' +
        '<div class="col-x2">' +
        '<div class="form-group">' +
        '<img src="../icons/Ped.png" alt="" id="iconPersona">' +
        '</div>' +
        '<div class="status-internal">' +
        '<div id="statusDetPed" class="status">Pendiente</div>' +
        '</div>' +
        '</div>' +
        '<div class="col-x2-person">' +
        '<div class="form-group"></div>' +
        '<div class="option-right">' +
        '<label>Mesa:</label>' +
        '<select name="mes_detPed" id="mes_detPed" class="select">' +
        '<option value="0">1</option>' +
        '<option value="1">2</option>' +
        '<option value="2">3</option>' +
        '<option value="3">4</option>' +
        '<option value="4">5</option>' +
        '<option value="5">6</option>' +
        '<option value="6">7</option>' +
        '<option value="7">8</option>' +
        '<option value="8">9</option>' +
        '<option value="9">10</option>' +
        '<option value="10">11</option>' +
        '<option value="11">12</option>' +
        '</select>' +
        '</div>' +
        '<div class="form-group">' +
        '<label>Cliente:</label>' +
        '<select name="cli_detPed" id="cli_detPed" class="select">' +
        '<option value="-0">Visitante</option>' +
        '<option value="-1">Buscar...</option>' +
        '</select>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="form-body">' +
        '<div class="form-group-person">' +
        '<label>Detalle pedido:</label>' +
        '<a href="#openModal" class="add-telephone" id="add_detPed" onclick="verModalDetPedido(\'1010\', \'0\');">' +
        'Nuevo' +
        '</a>' +
        '<table class="tabla-carta">' +
        '<thead>' +
        '<tr>' +
        '<th></th>' +
        '<th>Id</th>' +
        '<th>Artículo</th>' +
        '<th>Cantidad</th>' +
        '<th>Val. Unitario</th>' +
        '<th>Sub. Total</th>' +
        '<th>Opciones</th>' +
        '</tr>' +
        '</thead>' +
        '<tbody id="listaDetPedido">' +
        //LISTA TEMPORAL
        '</tbody>' +
        '</table>' +
        '<div class="total-DetPed">'+
        '<label class="label-total-1">Total:</label>'+
        '<label class="label-total-2" id="lbl_total">$ 0.00,0</label>'+
        '</div>'+
        '<div class="facturar-ped">'+
            '<button id="facturarPed">$</button>'+
        '</div>'+
        '</div>' +
        '<br>' +
        '<div class="form-group">' +
        '<label>Observaciones:</label>' +
        '<textarea cols="40" name="detPedObservaciones" spellcheck="true" id="pedObservaciones" class="textarea-big"></textarea>' +
        '</div>' +
        '</div>' +
        '<div class="form-footer-person">' +
        '<button type="button" value="" class="btn-person" id="btn_detPedido" onclick="actionDetPedido();">' + 'Aceptar' + '</button>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</form>' +
        //MODAL
        '<div id="openModal" class="modalDialog-large">' +
        '<form id="frm_detPed" name="frm_detPed">' +
        '<input type="hidden" value="1" id="idOp">' +
        '<input type="hidden" value="1" id="detPed_id">' +
        '<div class="modal-header">' +
        '<a href="#close" id="closeModal" title="Close" class="close">X</a>' +
        '<h2 id="detPed_titulo">Titulo</h2>' +
        '</div>' +
        '<div class="modal-body">' +
        '<div class="options-filtro">' +
        '<div class="col-x1">' +
        '<label>Categoría:</label>' +
        '<select name="categoriaDetPed" id="categoriaDetPed" class="select"' +
        'onchange="filtrarCartaDetPed();">' +
        '<option value="0">Todas</option>' +
        '<option value="1">Comidas</option>' +
        '<option value="2">Bebidas calientes</option>' +
        '<option value="3">Bebidas frias </option>' +
        '<option value="4">Postres</option>' +
        '</select>' +
        '</div>' +
        '<div class="col-x2" > ' +
        '<label > Filtrar:</label >' +
        '<input type="text" id="filtrarDetPed"' +
        'oninput = "filtrarCartaDetPed();">' +
        '</div>' +
        '</div>' +
        '<div class="form-body body-detPed">' +
        '<table class="tabla-carta">' +
        '<thead>' +
        '<tr>' +
        '<th></th>' +
        '<th>Id</th>' +
        '<th>Nombre</th>' +
        '<th>Valor</th>' +
        '<th>Descripción</th>' +
        '<th></th>' +
        '</tr>' +
        '</thead>' +
        '<tbody id="listaProductosDetPed">' +
        '<tr>' +
        '<td><input type="radio" id="car_id1" name="grupoCarta" onclick="habilitarOpciones(1);"></td>' +
        '<td>1</td>' +
        '<td>Producto 1</td>' +
        '<td>$ 10000</td>' +
        '<td>Ninguna...</td>' +
        '<td><a href="#openModal" onclick="verModalCarta(\'2020\', \'1\');" class="editar addProduct not-active" id="btn_editar1"' +
        'name="btn">+</a></td>' +
        '</tr>' +
        '</tbody>' +
        '</table>' +
        '<div class="card" id="cardProduct">' +
        '<input type="hidden" value="" id="id_articulo">' +
        '<div class="card-tittle"><h2 id="nameDetPro">Nombre del producto</h2></div>' +
        '<div class="section-card">' +
        '<div class="col-x2">' +
        '<div class="form-group">' +
        '<img src="../icons/hamburguesa.png" alt="" id="iconPersona">' +
        '</div>' +
        '<div class="status-internal">' +
        '<div id="valDetPro" class="status">' +
        '$ 00,00' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="col-x2-person">' +
        '<div class="form-group">' +
        '<label>Descripción:</label>' +
        '<p id="desDetPro">Descripción detallada del producto ' +
        'Descripción detallada del producto ' +
        'Descripción detallada del producto</p>' +
        '</div>' +
        '<div class="option-right">' +
        '<label>Cantidad:</label>' +
        '<input type="number" id="canDetPed" name="canDetPed" min="1" max="100" value="1"></input>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="modal-footer">' +
        '<a class="btn-addArt" href="#close" id="btn_addDetPro" onclick="addProdPed();">Agregar</a>' +
        '</div>' +
        '</form>' +
        '</div>';
}

function listarPedidoss() {
    let dataJSON = {
        idOp: '6060',
        idUrl: "404040",
        information: {

        }
    }

    $("#contenido").html(cargarPedido());

    $.post("../php/general.php", { dataJSON }, function (response) {
        var respuesta = $.parseJSON(response);
        //console.log(respuesta.information);
        var pedido = "";
        if (respuesta.status == 1) {
            var co = 1;
            for (x of respuesta.information) {
                //console.log(x.car_id + ' ' + x.car_nombre);
                pedido += '<tr>' +
                    '<td><input type="radio" id="ped_id' + x.ped_id + '" name="grupoPedido" onclick="habilitarOpciones(' + x.ped_id + ');"></td>' +
                    '<td>' + co + '</td>' +
                    '<td>' + x.mes_id + '</td>' +
                    '<td>$ ' + x.ped_estado + '</td>' +
                    '<td class="options-table">' +
                    '<a href="#openModal" onclick="verPedido(\'4040\', \'' + x.ped_id + '\');" class="ver not-active" id="btn_ver' + x.ped_id + '" name="btn"><img class="icon" src="../icons/view.png" alt=""></a>' +
                    '<a href="#openModal" onclick="verPedido(\'2020\', \'' + x.ped_id + '\');" class="editar not-active" id="btn_editar' + x.ped_id + '" name="btn"><img class="icon" src="../icons/edit.png" alt=""></a>' +
                    '<a href="#openModal" onclick="verPedido(\'3030\', \'' + x.ped_id + '\');" class="eliminar not-active" id="btn_eliminar' + x.ped_id + '" name="btn"><img class="icon" src="../icons/delete.png" alt=""></a>' +
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

function verModalDetPedido(idOp, car_id) {
    $('#idOp').val(idOp);
    $('#detPed_id').val(car_id);
    switch (idOp) {
        case '1010': //INSERTAR
            $("#detPed_titulo").text('Agregar producto');
            limpiarCamposDetPed();
            $("#btn_addDetPro").html('Agregar');
            estadoCamposDetPed(true);
            filtrarCartaDetPed();
            $("#btn_addDetPro").css('background-color', '#39c');
            $("#btn_addDetPro").hover(function () {
                $(this).css("background-color", "#20b2aa");
            }, function () {
                $(this).css("background-color", "#39c");
            });
            break;
        case '2020': //EDITAR
            $("#detPed_titulo").text('Modificar producto');
            cargarDatosDetPed(car_id);
            $("#btn_addDetPro").html('Guardar');
            estadoCamposDetPed(true);
            $("#btn_addDetPro").css('background-color', '#39c');
            $("#btn_addDetPro").hover(function () {
                $(this).css("background-color", "#20b2aa");
            }, function () {
                $(this).css("background-color", "#39c");
            });
            break;
        case '3030': //ELIMINAR
            $("#detPed_titulo").text('Eliminar producto');
            cargarDatosDetPed(car_id);
            $("#btn_addDetPro").html('Eliminar');
            estadoCamposDetPed(false);
            $("#btn_addDetPro").css('background-color', '#ca1b1b');
            $("#btn_addDetPro").hover(function () {
                $(this).css("background-color", "rgb(255, 0, 0)");
            }, function () {
                $(this).css("background-color", "#ca1b1b");
            });
            break;
        case '4040': //VER PRODUCTO
            $("#detPed_titulo").text('Detalle producto');
            cargarDatosDetPed(car_id);
            $("#btn_addDetPro").html('Aceptar');
            estadoCamposDetPed(false);
            $("#btn_addDetPro").css('background-color', '#39c');
            $("#btn_addDetPro").hover(function () {
                $(this).css("background-color", "#20b2aa");
            }, function () {
                $(this).css("background-color", "#39c");
            });
            break;
    }
}

function limpiarCamposDetPed() {
    //$('#categoriaDetPed').selectedIndex(0);
    $('#filtrarDetPed').val('');
    $('#canDetPed').val('1');
    $('#cardProduct').css('display', 'none');
}

function estadoCamposDetPed(estado) {
    if (estado) {
        $('#categoriaDetPed').removeAttr('disabled');
        $('#filtrarDetPed').removeAttr('disabled');
        $('#canDetPed').removeAttr('disabled');
        //$('select#catProducto').removeAttr('disabled');
    } else {
        $('#categoriaDetPed').attr('disabled', 'disabled');
        $('#filtrarDetPed').attr('disabled', 'disabled');
        $('#canDetPed').attr('disabled', 'disabled');
        //$('select#catProducto').attr('disabled', 'disabled');
    }
}

function validarCamposCarta() {
    if ($('#nomProducto').val() != '') {
        if ($('#valProducto').val() != '') {
            $('select#catProducto').on('change', function () {
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

function cargarDatosDetPed(car_id) {
    let dataJSON = {
        idOp: '4040',
        idUrl: "404040",
        information: {
            car_id: car_id
        }
    }

    $.post("../php/general.php", { dataJSON }, function (response) {
        var respuesta = $.parseJSON(response);
        //console.log(respuesta.information);
        if (respuesta.status == 1) {
            $('#cardProduct').css('display', 'block');
            $('#id_articulo').val(respuesta.information.car_id);
            $('#nameDetPro').text(respuesta.information.car_nombre);
            $('#valDetPro').text("$ "+respuesta.information.car_valor);
            $('#desDetPro').text(respuesta.information.car_descripcion);
            $('#canDetPed').val(x.art_cantidad); //POR DEFECTO SI NO ENCUENTRA LA CANTIDAD DEL ARTICULO
            for(x of tempoArticulos){
                if(respuesta.information.car_id == x.art_id){
                    $('#canDetPed').val(x.art_cantidad); //PARA CARGAR LA CANTIDAD DEL ARTICULO
                }
            }
            $('#detPed_id').val(respuesta.car_id);
            selectProduc(respuesta.information);
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
            $.post("../php/general.php", { dataJSON }, function (response) {
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
        $.post("../php/general.php", { dataJSON }, function (response) {
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

function filtrarCartaDetPed() {
    $("#cardProduct").css("display", "none");
    let dataJSON = {
        idOp: "7070",
        idUrl: "404040",
        information: {
            tip_id: $("#categoriaDetPed").val(),
            car_nombre: $("#filtrarDetPed").val()
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
                    '<td><input type="radio" id="car_id' + x.car_id + '" name="grupoCarta" onclick="habilitarAdd(' + x.car_id + ');"></td>' +
                    '<td>' + co + '</td>' +
                    '<td>' + x.car_nombre + '</td>' +
                    '<td>$ ' + x.car_valor + '</td>' +
                    '<td class="autoAjuste">' + x.car_descripcion + '</td>' + //DAR CLASE AUTOAJUSTE A TODAS LAS COLUMNAS NECESARIAS
                    '<td>'+
                        '<a href="#" onclick="addProduct('+ x.car_id +');" class="editar addProduct not-active" id="btn_addProduct'+ x.car_id +'" name="btn">+</a>'+
                    '</td>' +
                    '</tr>';
                co++;
            }
            $("#listaProductosDetPed").html(producto);
        }
    });
}

function habilitarAdd(idOpciones) {
    console.log("Habilitar");
    $("a[name='btn']").addClass("not-active");
    $('#btn_addProduct' + idOpciones).removeClass('not-active');
}

function addProduct(car_id) {
    event.preventDefault();
    let dataJSON = {
        idOp: '4040',
        idUrl: "404040",
        information: {
            car_id: car_id
        }
    };

    $.post("../php/general.php", { dataJSON }, function(response) {
        var respuesta = $.parseJSON(response);
        //console.log(respuesta.information);
        if (respuesta.status == 1) {
            $('#id_articulo').val(respuesta.information.car_id);
            $('#nameDetPro').text(respuesta.information.car_nombre);
            $('#valDetPro').text("$ "+respuesta.information.car_valor);
            $('#desDetPro').text(respuesta.information.car_descripcion);
            $('#canDetPed').val('1');
            $('#cardProduct').css('display', 'block');
            selectProduc(respuesta.information);
            console.log("Datos");
        } else if (respuesta.status == 0) {
            alert("Ha ocurrido un error inesperado");
        }
    });
}

function selectProduc(product){    
        var productSel = {
            pro_id : product.car_id,
            pro_nombre : product.car_nombre,
            pro_valor : product.car_valor,
            pro_descripcion : product.car_descripcion
        };    
    producto = '<tr>' +
    '<td><input type="radio" id="car_id' + productSel.pro_id + '" name="grupoCarta" onclick="habilitarAdd(' + productSel.pro_id + ');"></td>' +
    '<td>' + 1 + '</td>' +
    '<td>' + productSel.pro_nombre + '</td>' +
    '<td>$ ' + productSel.pro_valor + '</td>' +
    '<td class="autoAjuste">' + productSel.pro_descripcion + '</td>' + //DAR CLASE AUTOAJUSTE A TODAS LAS COLUMNAS NECESARIAS
    '<td>'+
        '<a href="#" onclick="addProduct('+ productSel.pro_id +');" class="editar addProduct not-active" id="btn_addProduct'+ productSel.pro_id +'" name="btn">+</a>'+
    '</td>' +
    '</tr>';

    $("#listaProductosDetPed").html(producto);
}

var tempoArticulos = [];

function addProdPed(){
    car_id = $('#id_articulo').val();
    let dataJSON = {
        idOp: '4040',
        idUrl: "404040",
        information: {
            car_id: car_id
        }
    };

    $.post("../php/general.php", { dataJSON }, function(response) {
        var respuesta = $.parseJSON(response);
        //console.log(respuesta.information);
        if (respuesta.status == 1) {
            let articulo = {
                art_id: respuesta.information.car_id,
                art_nombre: respuesta.information.car_nombre,
                art_cantidad: $('#canDetPed').val(),
                art_valor: respuesta.information.car_valor
            };
            switch($("#idOp").val()){
                case '1010': //Nuevo
                    var co = 0;
                    for(x of tempoArticulos){
                        console.log(x.art_id);
                        if(articulo.art_id == x.art_id){
                            x.art_cantidad = parseInt(x.art_cantidad, 10) + parseInt(articulo.art_cantidad, 10);
                            console.log("Coincidencia");
                            co = 1;
                        }
                    }
                    if(co == 0){
                        tempoArticulos.push(articulo);
                    }
                    break;
                case '2020': //EDITAR
                    for(x of tempoArticulos){
                        if(articulo.art_id == x.art_id){
                            x.art_cantidad = articulo.art_cantidad;       
                        }
                    }
                    break;
                case '3030': //Eliminar
                    var indice = tempoArticulos.indexOf(articulo.art_id); // obtenemos el indice
                    tempoArticulos.splice(indice, 1); // 1 es la cantidad de elemento a eliminar
                    console.log(tempoArticulos);
                    break;
                case '4040': //Ver
                    break;
            }

            ARTICULOS = "";
                    co = 1;
                    total = 0;
                    console.log("Articulo: "+articulo.art_id);
                    for(x of tempoArticulos){
                        console.log(x.art_id);
                        /*if(articulo.art_id == x.art_id){
                            x.art_cantidad = articulo.art_cantidad;
                            console.log("Coincidencia");
                        }*/
                        subTotal = x.art_valor * x.art_cantidad;
                        total+=subTotal;
                        ARTICULOS += '<tr>' +
                            '<td>' +
                            '<input type="radio" id="ped_DetPed'+x.art_id+'" name="grupoDetPedido"' +
                            'onclick="habilitarOpciones('+x.art_id+');">' +
                            '</td>' +
                            '<td>'+co+'</td>' +
                            '<td>'+x.art_nombre+'</td>' +
                            '<td>'+x.art_cantidad+'</td>' +
                            '<td>$ '+new Intl.NumberFormat('es-ES').format(x.art_valor)+'</td>' +
                            '<td>$ '+new Intl.NumberFormat('es-ES').format(subTotal)+'</td>' +
                            '<td class="options-table">' +
                            '<a href="#openModal" onclick="verModalDetPedido(\'4040\', '+x.art_id+');"' +
                            'class="ver not-active" id="btn_ver'+x.art_id+'" name="btn"><img class="icon"' +
                            'src="../icons/view.png" alt=""></a>' +
                            '<a href="#openModal" onclick="verModalDetPedido(\'2020\', '+x.art_id+');"' +
                            'class="editar not-active" id="btn_editar'+x.art_id+'" name="btn"><img ' +
                            'class="icon" src="../icons/edit.png" alt=""></a>' +
                            '<a href="#openModal" onclick="verModalDetPedido(\'3030\', '+x.art_id+');"' +
                            'class="eliminar not-active" id="btn_eliminar'+x.art_id+'" name="btn"><img ' +
                            'class="icon" src="../icons/delete.png" alt=""></a>' +
                            '</td>' +
                            '</tr>';
                            co++;
                    }

            
            $("#listaDetPedido").html(ARTICULOS);
            $("#lbl_total").html("$ "+ new Intl.NumberFormat('es-ES').format(total) + ",00");
            /*$('#nameDetPro').text(respuesta.information.car_nombre);
            $('#valDetPro').text("$ "+respuesta.information.car_valor);
            $('#desDetPro').text(respuesta.information.car_descripcion);
            $('#cardProduct').css('display', 'block');
            console.log("Datos");*/
        } else if (respuesta.status == 0) {
            alert("Ha ocurrido un error inesperado");
        }
    });
}