<?php
require './DAO/carDAO.php';

function controlCAR($json)
{
    $replyServerUs = array(
        "msg" => 'Mensaje',
        "information" => '',
        "status" => '0', //0 => INCORRECTO, 1 => CORRECTO
    ); //Mensaje a retornar

    if (isset($json['idOp'])) {
        switch ($json['idOp']) { //Segun operación
            case '1010': //Insertar Us
                $result = insertarCAR($json); //
                if ($result) {
                    $replyServerUs['msg'] = "Se ha insertado correctamente";
                    $replyServerUs['information'] = $result;
                    $replyServerUs['status'] = 1;
                }
                return $replyServerUs;
                break;
            case '2020': //ACTUALIZAR
                $result = updateCAR($json);
                $replyServerUs['msg'] = "Se ha actualizado el producto";
                $replyServerUs['information'] = $result;
                $replyServerUs['status'] = 1;
                return $replyServerUs;
            case '3030': //ELIMINAR CARTA
                $result = deleteCAR($json);
                $replyServerUs['msg'] = "Se ha eliminado el producto correctamente";
                $replyServerUs['information'] = $result;
                $replyServerUs['status'] = 1;
                return $replyServerUs;
                break;
            case '4040': //Consultar
                $result = consultarCAR($json, 1); //1 = Individual, 2= Todos
                $replyServerUs['msg'] = "";
                $replyServerUs['information'] = $result;
                $replyServerUs['status'] = 1;
                return $replyServerUs;
            case '5050': //Validar
                if (!empty($json['information']['usu_us'])) {
                    if (!empty($json['information']['usu_pw'])) {
                        $result = validarUS($json);
                        if ($result['usu_id'] != "0") {
                            $replyServerUs['msg'] = "Aceso autorizadooooo";
                            $replyServerUs['information'] = $result;
                            $replyServerUs['status'] = 1;
                        } else {
                            $replyServerUs['msg'] = "Acceso denegado.";
                            $replyServerUs['status'] = 0;
                        }
                    } else {
                        $replyServerUs['msg'] = "Falta el password";
                    }
                } else {
                    $replyServerUs['msg'] = "Falta el usuario";
                }
                break;
            case '6060': //LISTAR TODOS
                $result = consultarCAR($json, 2); //1 = Individual, 2= Todos
                $replyServerUs['msg'] = "";
                $replyServerUs['information'] = $result;
                $replyServerUs['status'] = 1;
                return $replyServerUs;
                break;
            case '7070': //LISTAR POR TEXTO
                $result = obtenerServiciosxNombre($json);
                $replyServerUs['msg'] = "";
                $replyServerUs['information'] = $result;
                $replyServerUs['status'] = 1;
                return $replyServerUs;
                break;
            default:
                echo "Objeto no localizado.";
        }
    }
    return $replyServerUs;
}
