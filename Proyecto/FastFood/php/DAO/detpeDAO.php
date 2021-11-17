<?php

function insertDETPE($json){
    try {
       include('./resources/conexion.php');
       $query = "INSERT INTO detalle_pedido
                  (ped_id,car_id,depe_cantidad,depe_valor,depe_estado)
                 VALUES (
                 ".$json['information']['ped_id'].",
                 ".$json['information']['car_id'].",
                 ".$json['information']['depe_cantidad'].",
                 ".$json['information']['depe_valor'].",
                 ".$json['information']['depe_estado'].");";
                
        $query = mysqli_query($conection, $query);
        return $query;

    } catch (\Throwable $th) {
        var_dump($th);
    }
}

function updateDETPE($json){
    try {
        include('./resources/conexion.php');
        $UPDATE = "UPDATE detalle_pedido SET 
                  ped_id = ".$json['information']['ped_id'].",
                  car_id = ".$json['information']['car_id'].",
                  depe_cantidad = ".$json['information']['depe_cantidad'].",
                  depe_valor = ".$json['information']['depe_valor'].",
                  depe_estado = ".$json['information']['depe_estado']."
                  WHERE depe_id = ".$json['information']['depe_id'].";";    
        $UPDATE = mysqli_query($conection, $UPDATE);
        return $UPDATE;
    } catch (\Throwable $th) {
        var_dump($th);
    }
}

function selectDETPE($json, $tipo){
    try {
        include('./resources/conexion.php');
        if($tipo == 1){
            $SELECT = "SELECT * FROM detalle_pedido WHERE depe_id=".$json['information']['depe_id'].";";
        }else{
            $SELECT = "SELECT * FROM detalle_pedido WHERE ped_id=".$json['information']['ped_id'].";";
        }
        $datos = false;
        $pedido;
        $pedidos = [];
        
        $SELECT = mysqli_query($conection, $SELECT);
        
        while($row = mysqli_fetch_assoc($SELECT)){
            $datos = true;
            
            $pedido['depe_id'] = $row['depe_id'];
            $pedido['ped_id'] = $row['ped_id'];
            $pedido['car_id'] = $row['car_id'];
            $pedido['depe_cantidad'] = $row['depe_cantidad'];
            $pedido['depe_valor'] = $row['depe_valor'];
            $pedido['depe_estado'] = $row['depe_estado'];
           
            array_push($pedidos, $pedido);
        }
        if ($datos == false){
            $pedido['depe_id'] = "";
            $pedido['ped_id'] = "";
            $pedido['car_id'] = "";
            $pedido['depe_cantidad'] = "";
            $pedido['depe_valor'] = "";
            $pedido['depe_estado'] = "";
            array_push($pedidos, $pedido);
        }
        
        if($tipo == 1){
            return $pedido;
        }else{
            return $pedidos;
        }

    } catch (\Throwable $th) {
        var_dump($th);
    }
}