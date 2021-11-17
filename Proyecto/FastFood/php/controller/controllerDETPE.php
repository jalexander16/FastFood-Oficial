<?php

require ('./DAO/detpeDAO.php');

function controlDETPE($json){
    $replyServerUs = array(
        'msg' => "Mensaje", //Mensaje a retornar
        'information' => "", //DATOS
        'status' => 0 //0 => INCORRECTO, 1 => CORRECTO
    ); 
    if(isset($json['idOp'])){
        switch($json['idOp']){
            case '1010';
            $result = insertDETPE($json);
            if($result){                  
                $replyServerUS['msg'] = "Se ha insertado correctamente";
                $replyServerUS['information'] = $result;
                $replyServerUS['status'] = 1;        
               }
            return $replyServerUS;
            case '2020';
            $result = updateDETPE($json);
            if($result){                  
                $replyServerUS['msg'] = "Se ha Actualizado correctamente";
                $replyServerUS['information'] = $result;
                $replyServerUS['status'] = 1;        
               }
            return $replyServerUS;
            case '3030': //Validar
                $result = selectDETPE($json,1); // listar pedido por id
                           
                 if(!$result['ped_id']==''){                  
                 $replyServerUS['msg'] = "Se listado  correctamente";
                 $replyServerUS['information'] = $result;
                 $replyServerUS['status'] = 1;        
                }else{
                    echo json_encode($result['mes_id']);    
                 $replyServerUS['msg'] = "No se encontro el pedido";
                 
                }
               return $replyServerUS;
            case '4040': //Validar
                $result = selectDETPE($json,2); // listar pedido por id
                           
                 if(!$result[0]['ped_id']==''){                  
                 $replyServerUS['msg'] = "Se listado  correctamente";
                 $replyServerUS['information'] = $result;
                 $replyServerUS['status'] = 1;        
                }else{
                    echo json_encode($result['mes_id']);    
                 $replyServerUS['msg'] = "No se encontro el pedido";
                 
                }
               return $replyServerUS;
            default:
            echo "Objeto no encontrado";
        }
    }

    return $replyServerUs;
}