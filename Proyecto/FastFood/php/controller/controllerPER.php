<?php
require './DAO/usuDAO.php';
require './DAO/perDAO.php';

function controlPER($json)
{
    $replyServerUs = array(
        'msg' => "Mensaje",
        'information' => "",
        'status' => 0, //0 => INCORRECTO, 1 => CORRECTO
    ); //Mensaje a retornar

    if (isset($json['idOp'])) {
        switch ($json['idOp']) { //Segun operación
            case '1010': //Insertar Persona
                if (!empty($json['information']['per_nombre1'])) {
                    if (!empty($json['information']['per_apellido1'])) {
                        $result = insertPersona($json);
                        if ($result) {
                            $replyServerUs['msg'] = "Se ha insertado correctamente";
                            $replyServerUs['information'] = $result;
                            $replyServerUs['status'] = 1;
                        } else {
                            $replyServerUs['msg'] = "Se ha presentado un error al insertar la persona";
                        }
                    } else {
                        $replyServerUs['msg'] = "Debe ingresar un apellido";
                    }
                } else {
                    $replyServerUs['msg'] = "Debe ingresar un nombre";
                }
                break;
            case '2020': //ACTUALIZAR
                $result = updatePersona($json);
                if ($result) {
                    $replyServerUs['msg'] = "Se ha actualizado la Persona";
                    $replyServerUs['information'] = $result;
                    $replyServerUs['status'] = 1;
                }
                return $replyServerUs;
            case '3030': //ELIMINAR
                $result = deletePER($json);
                $replyServerUs['msg'] = "Se ha eliminado la persona";
                $replyServerUs['information'] = $result;
                $replyServerUs['status'] = 1;
                return $replyServerUs;
            case '4040': //Consultar Persona
                $result = consultarPER($json, 1); //1 = Individual, 2= Todos
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
                $result = consultarPER($json, 2); //1 = Individual, 2= Todos
                $replyServerUs['msg'] = "";
                $replyServerUs['information'] = $result;
                $replyServerUs['status'] = 1;
                return $replyServerUs;
                break;
            case '7070': //LISTAR POR FILTRO
                switch ($json['information']['tipo_filtro']) {
                    case 1: //FILTRAR POR DOCUMENTO
                        $result = selectPersona($json, 1);
                        $replyServerUs['msg'] = "";
                        $replyServerUs['information'] = $result;
                        $replyServerUs['status'] = 1;
                        return $replyServerUs;
                    case 2: //FILTRAR POR NOMBRE
                        $result = selectPersona($json, 2);
                        $replyServerUs['msg'] = "";
                        $replyServerUs['information'] = $result;
                        $replyServerUs['status'] = 1;
                        return $replyServerUs;
                    default:
                        $result = selectPersona($json, 3);
                        $replyServerUs['msg'] = "";
                        $replyServerUs['information'] = $result;
                        $replyServerUs['status'] = 1;
                        return $replyServerUs;
                }
                $result = consultarPER($json, 2); //1 = Individual, 2= Todos
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
