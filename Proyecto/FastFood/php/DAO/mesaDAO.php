<?php
// <!-- insertar mesa -->
function insertMesa($json){
    try {
        include_once('./resources/conexion.php');
        $query = "INSERT INTO mesa (mes_nombre,mes_observaciones)VALUES (
            '".$json['information']['mes_nombre']."',
            '".$json['information']['mes_observaciones']."');";
           
        $query = mysqli_query($conection, $query);    
        return $query;
    } catch (\Throwable $th) {
        var_dump($th);
    }
}

function updateMesa($json){  //Actualizar mesa 
    try {
        include_once('./resources/conexion.php');
        $UPDATE  = "UPDATE mesa set 
                    mes_nombre = '".$json['information']['mes_nombre']."',
                    mes_observaciones = '".$json['information']['mes_observaciones']."' 
                    WHERE mes_id = ".$json['information']['mes_id'].";";
        $UPDATE = mysqli_query($conection, $UPDATE);
        return $UPDATE;
    } catch (\Throwable $th) {
        var_dump($th);
    }
}

function selectMesa($json,$tipo){
    try {
        include_once('./resources/conexion.php');
        if ($tipo == 1) { //INDIVIDUAL
            $SELECT = "SELECT * FROM mesa WHERE mes_id =" . $json['information']['mes_id'] . ";";
        } else if ($tipo == 2) { //TODOS
            $SELECT = "SELECT * FROM mesa;";
        }
        $SELECT = mysqli_query($conection, $SELECT);
        $mesas = [];
        while($row = mysqli_fetch_assoc($SELECT)){
           if($tipo == 1){
            $mesa['mes_id'] = $row['mes_id'];
            $mesa['mes_nombre'] = $row['mes_observaciones'];
            $mesa['mes_observaciones'] = $row['mes_observaciones'];
           }else{
            $mesa['mes_id'] = $row['mes_id'];
            $mesa['mes_nombre'] = $row['mes_observaciones'];
            $mesa['mes_observaciones'] = $row['mes_observaciones'];
            array_push($mesas,$mesa);
           }
        }
        if($tipo == '1'){
            return $mesa;
        }else{
            return $mesas;
        }
    } catch (\Throwable $th) {
        var_dump($th);
    }
}

function deleteMesa($json){
    try {
        include_once('./resources/conexion.php');
        $DELETE = "DELETE FROM mesa WHERE mes_id=".$json['information']['mes_id']."";
        $DELETE = mysqli_query($conection, $DELETE);
        return $DELETE;
    } catch (\Throwable $th) {
        var_dump($th);
    }
}