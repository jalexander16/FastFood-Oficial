<?php
//insertar movimiento 
function insertMOV($json){
    try {
        include_once('./resources/conexion.php');
        $query = "INSERT INTO movimiento (mov_nombre,mov_descripcion)VALUES (
                  '".$json['information']['mov_nombre']."',               
                  '".$json['information']['mov_descripcion']."');";
        $query = mysqli_query($conection,$query);
      
        return $query;

    } catch (\Throwable $th) {
        var_dump($th);
    }
}

function updateMOV ($json){
    try {
        include_once('./resources/conexion.php');
        $update="UPDATE movimiento SET 
                mov_nombre = '".$json['information']['mov_nombre']."',
                mov_descripcion='".$json['information']['mov_descripcion']."'
                WHERE mov_id='".$json['information']['mov_id']."';";
             
        $update = mysqli_query($conection,$update);
        return $update;
    } catch (\Throwable $th) {
    var_dump($th);
    }
}
function selectMOV($json,$tipo){
    try {
        include('./resources/conexion.php');
        $SELECT ="";
        if($tipo == '1'){
            $SELECT = "SELECT * FROM movimiento WHERE mov_id='".$json['information']['mov_id']."'";
        }else{
            $SELECT = "SELECT * FROM movimiento;";
        }
        
        $SELECT =  mysqli_query($conection,$SELECT);
        $i=0;
        $movimientos = [];
        while($row = mysqli_fetch_assoc($SELECT)){
            if($tipo == '1'){
                $movimiento['mov_id'] = $row['mov_id'];
                $movimiento['mov_nombre'] = $row['mov_nombre'];               
                $movimiento['mov_descripcion'] = $row['mov_descripcion'];
            }else{
                $movimiento['mov_id'] = $row['mov_id'];
                $movimiento['mov_nombre'] = $row['mov_nombre'];               
                $movimiento['mov_descripcion'] = $row['mov_descripcion'];
                array_push($movimientos,$movimiento);
            }                 
        }
        if($tipo == '1'){
            return $movimiento;
        }else{
            return $movimientos;
        }     

    } catch (\Throwable $th) {
        var_dump($th);
    }
}

function deleteMOV($json){
    try {
        include_once('./resources/conexion.php');
        $DELETE = "DELETE FROM movimiento WHERE mov_id=".$json['information']['mov_id']."";
        $DELETE = mysqli_query($conection, $DELETE);
        return $DELETE;
    } catch (\Throwable $th) {
        var_dump($th);
    }
}