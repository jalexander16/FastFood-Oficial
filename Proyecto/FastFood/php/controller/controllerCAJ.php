<?php
require('./DAO/cajDAO.php');

function controlCAJ($json){
    $replyServerUS = array(
        "msg" => 'Mensaje',
        "information" => '',
        "status" => '0' //0 => INCORRECTO. 1 => CORRECTO
    ); // Mensaje  a retornar

    if(isset($json['idOp'])){
        switch ($json['idOp']){
            case '1010'; //INSERTAR CAJA 
                $result = insertCaja($json);
                if($result){                  
                    $replyServerUS['msg'] = "Se ha insertado correctamente";
                    $replyServerUS['information'] = $result;
                    $replyServerUS['status'] = 1;                    
                }
                return $replyServerUS;
                break;
            case '3030':  //SELECCIONAR TODOS LOS REGISTROS DE UN USUARIO
                $result = selectAllCaja($json,1);
                $replyServerUS['msg'] = "Se ha insertado correctamente";
                $replyServerUS['information'] = $result;
                $replyServerUS['status'] = 1;
                return $replyServerUS;
                break;
            case '4040':  //SELECCIONAR TODOS REGISTROS 
                $result = selectAllCaja($json,2);
                $replyServerUS['msg'] = "Se ha insertado correctamente";
                $replyServerUS['information'] = $result;
                $replyServerUS['status'] = 1;
                return $replyServerUS;
                break;
            case '8080': // Eliminar registros por usuario
                $result = deleteCaja($json,1);
                $replyServerUS['msg'] = "Se ha Eliminado correctamente";
                $replyServerUS['information'] = $result;
                $replyServerUS['status'] = 1;
                return $replyServerUS;
                break;
            case '9090': // Eliminar caja all
                $result = deleteCaja($json,2);
                $replyServerUS['msg'] = "Se han Eliminado Todos los registos correctamente";
                $replyServerUS['information'] = $result;
                $replyServerUS['status'] = 1;
                return $replyServerUS;
                break;
            default:
                echo "Objeto No Encontrado";

        }
    }
    return $replyServerUS;

}