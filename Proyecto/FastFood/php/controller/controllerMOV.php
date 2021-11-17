<?php
require('./DAO/movDAO.php');

function controlMOV($json){
    $replyServerUS = array(
        "msg" => 'Mensaje',
        "information" => '',
        "status" => '0' //0 => INCORRECTO. 1 => CORRECTO
    ); // Mensaje  a retornar
    if (isset($json['idOp'])){
        switch($json['idOp']){
            case '1010'; //INSERTAR MOVIMIENTO
                $result = insertMOV($json);
                if($result){                  
                $replyServerUS['msg'] = "Se ha insertado correctamente";
                $replyServerUS['information'] = $result;
                $replyServerUS['status'] = 1;                    
            }
                return $replyServerUS;
                break;
            case '2020'; //ACTUALIZAR MOVIMIENTO
                $result = updateMOV($json);
                if($result){                  
                $replyServerUS['msg'] = "Se ha Actualizado correctamente";
                $replyServerUS['information'] = $result;
                $replyServerUS['status'] = 1;                    
            }
                return $replyServerUS;
                break;
            case '3030'; //LIA¿STAR MOVIMIENTO
                $result = selectMOV($json,1);
                if($result){                  
                $replyServerUS['msg'] = "Se ha listado correctamente";
                $replyServerUS['information'] = $result;
                $replyServerUS['status'] = 1;                    
            }
                return $replyServerUS;
                break;
            case '4040'; //LISTAR TODOS
                $result = selectMOV($json,2);
                if($result){                  
                $replyServerUS['msg'] = "Se ha Listado correctamente";
                $replyServerUS['information'] = $result;
                $replyServerUS['status'] = 1;                    
            }
                return $replyServerUS;
                break;
            case '8080'; //ELIMINAR MOVIMIENTO
                $result = deleteMOV($json);
                if($result){                  
                $replyServerUS['msg'] = "Se ha Eliminado correctamente";
                $replyServerUS['information'] = $result;
                $replyServerUS['status'] = 1;                    
            }
                return $replyServerUS;
                break;
            default:
                echo "Objeto No Encontrado";
            }
    }
    return $replyServerUS;
}