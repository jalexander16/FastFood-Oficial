<?php

require('./DAO/pedDAO.php');

function controlPED($json){
    $replyServerUs = array(
        'msg' => "Mensaje", //Mensaje a retornar
        'information' => "", //DATOS
        'status' => 0 //0 => INCORRECTO, 1 => CORRECTO
    ); 

    if(isset($json['idOp'])){
        switch ($json['idOp']) { //Segun operación
            case '1010': //Insertar PEDIDO
                $result = insertPED($json);
                if($result){                  
                $replyServerUS['msg'] = "Se ha insertado correctamente";
                $replyServerUS['information'] = $result;
                $replyServerUS['status'] = 1;        
               }
               return $replyServerUS;
            case '2020': //Validar
                $result = updatePED($json);
                
                if($result){                  
                $replyServerUS['msg'] = "Se ha Actualizado correctamente";
                $replyServerUS['information'] = $result;
                $replyServerUS['status'] = 1;        
               }
               return $replyServerUS;
            case '3030': //Listar por Id
                $result = selectPED($json,1); // listar pedido por id
                           
                 if(!$result['ped_id']==''){                  
                 $replyServerUS['msg'] = "Se listado  correctamente";
                 $replyServerUS['information'] = $result;
                 $replyServerUS['status'] = 1;        
                }else{
                    //echo json_encode($result['mes_id']);    
                 $replyServerUS['msg'] = "No se encontro el pedido";
                 
                }
               return $replyServerUS;
            case '4040': //LISTAR TODOS
                $result = selectPED($json,0); // listar pedidos
                           
                if($result){                  
                    $replyServerUS['msg'] = "Se listado  correctamente";
                    $replyServerUS['information'] = $result;
                    $replyServerUS['status'] = 1;        
                }else{
                    //echo json_encode($result['mes_id']);    
                    $replyServerUS['msg'] = "No se encontro el pedido";
                 
                }
               return $replyServerUS;
            default:
                echo "Objeto no localizado.";
        }
    }
    return $replyServerUs;
}

?>