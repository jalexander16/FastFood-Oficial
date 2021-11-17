<?php

require('./DAO/tipDAO.php');

function controlTIP($json){
    $replyServerUs = array(
        "msg" => 'Mensaje',
        "information" => '',
        "status" => '0' //0 => INCORRECTO, 1 => CORRECTO
    ); //Mensaje a retornar

    if(isset($json['idOp'])){
        switch ($json['idOp']) { //Segun operación
            case '1010': //Insertar Tipo
                $result = insertarTIP($json); //
                if($result){
                    $replyServerUs['msg'] = "Se ha insertado correctamente";
                    $replyServerUs['information'] = $result;
                    $replyServerUs['status'] = 1;
                }
                return $replyServerUs;
                break;
            case '2020': //ACTUALIZAR
                    $result = updateTIP($json);
                    if($result){
                        $replyServerUs['msg'] = "Se ha actualizado la categoría";
                        $replyServerUs['information'] = $result;
                        $replyServerUs['status'] = 1;
                    }
                    return $replyServerUs;
            case '4040': //Consultar Tipo
                $result = consultarTIP($json, 1); //1 = Individual, 2= Todos
                $replyServerUs['msg'] = "";
                $replyServerUs['information'] = $result;
                $replyServerUs['status'] = 1;
                return $replyServerUs;
            case '5050': //Validar
                
            case '6060': //LISTAR TODOS
                $result = consultarTIP($json, 2); //1 = Individual, 2= Todos
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

?>