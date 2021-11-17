<?php
    require('./DAO/dirDAO.php');

    function controlDIR($json){
        $replyServerUs = array(
            "msg" => "Mensaje",
            "information" => "",
            "status" => "0" //0 => INCORRECTO, 1 => CORRECTO
        ); //Mensaje a retornar

        if(isset($json['idOp'])){
            switch ($json['idOp']) { //Segun operación
                case '1010': //Insertar
                    $result = insertDIR($json); //
                    if($result){
                        $replyServerUs['msg'] = "Se ha insertado correctamente";
                        $replyServerUs['information'] = $result;
                        $replyServerUs['status'] = 1;
                    }
                    return $replyServerUs;
                    break;
                case '2020': //ACTUALIZAR
                        $result = updateDIR($json);
                        if($result){
                            $replyServerUs['msg'] = "Se ha actualizado la dirección";
                            $replyServerUs['information'] = $result;
                            $replyServerUs['status'] = 1;
                        }
                        return $replyServerUs;
                case '3030': //ELIMINAR
                        $result = deleteDIR($json);
                        if($result){
                            $replyServerUs['msg'] = "Se ha Eliminado la dirección";
                            $replyServerUs['information'] = $result;
                            $replyServerUs['status'] = 1;
                        }
                        return $replyServerUs;
                case '4040': //Consultar
                    $result = selectDIR($json, 1);
                    
                    if (!$result['dir_direccion'] == ''){
                        $replyServerUs['msg'] = "Existoso";
                        $replyServerUs['information'] = $result;
                        $replyServerUs['status'] = 1;
                    }else{
                        $replyServerUs['msg'] = "Sin registros de Direcciones";
                    }
                    return $replyServerUs;
               case '5050': //LISTAR TODOS de una persona
                    $result = selectDIR($json, 2); //1 = Individual, 2= Todos
                    if (!$result[0]['dir_direccion'] == ''){
                        $replyServerUs['msg'] = "Existoso";
                        $replyServerUs['information'] = $result;
                        $replyServerUs['status'] = 1;
                    }else{
                        $replyServerUs['msg'] = "Sin registros de Direcciones";
                    }
                   
                    return $replyServerUs;
                    break;
              
                default:
                    echo "Objeto no localizado.";
            }
        }
        return $replyServerUs;
    }

?>