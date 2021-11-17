<?php
require ('./DAO/mesaDAO.php');

function controlMESA($json){
    $replyServerUS = array(
        "msg" => 'Mensaje',
        "information" => '',
        "status" => '0' //0 => INCORRECTO. 1 => CORRECTO
    ); // Mensaje  a retornar

    if(isset($json['idOp'])){
        switch ($json['idOp']){
            case '1010': 
                $result = insertMesa($json);
                if($result){                  
                    $replyServerUS['msg'] = "Se ha insertado correctamente";
                    $replyServerUS['information'] = $result;
                    $replyServerUS['status'] = 1;                    
                }
                return $replyServerUS;
                break;
            case '2020': 
                $result = updateMesa($json);
                if($result){                  
                    $replyServerUS['msg'] = "Se ha Actualizado correctamente";
                    $replyServerUS['information'] = $result;
                    $replyServerUS['status'] = 1;                    
                }
                return $replyServerUS;
                break;
            case '3030': 
                $result = selectMesa($json,1);
                if($result){                  
                    $replyServerUS['msg'] = "Consulta por mesa Correcta";
                    $replyServerUS['information'] = $result;
                    $replyServerUS['status'] = 1;                    
                }
                return $replyServerUS;
                break;
            case '4040': 
                $result = selectMesa($json,2);
                if($result){                  
                    $replyServerUS['msg'] = "Consulta por mesa Correcta";
                    $replyServerUS['information'] = $result;
                    $replyServerUS['status'] = 1;                    
                }
                return $replyServerUS;
                break;
            case '8080': 
                $result = deleteMesa($json,2);
                if($result){                  
                    $replyServerUS['msg'] = "Consulta por mesa Correcta";
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