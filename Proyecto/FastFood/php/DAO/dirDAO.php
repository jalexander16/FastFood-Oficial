<?php

function insertDIR($json)
{
    include_once './resources/conexion.php';
    try {
        $query = "INSERT INTO direccion (dir_direccion,dir_observaciones,per_id) VALUES(
            '" . $json['information']['aux_texto'] . "',
            '" . $json['information']['aux_observaciones'] . "',
            '" . $json['information']['per_id'] . "');";

        $query = mysqli_query($conection, $query);

        return $query;
    } catch (\Throwable $th) {
        var_dump($th);
    }
}

//Actualizar Dirección
function updateDIR($json)
{
    include_once './resources/conexion.php';

    try {
        $update = "UPDATE direccion SET 
                dir_direccion = '" . $json['information']['aux_texto'] . "', 
                dir_observaciones = '" . $json['information']['aux_observaciones'] . "', 
                per_id=" . $json['information']['per_id'] . " 
                WHERE dir_id=" . $json['information']['aux_id'] . ";";

        $update = mysqli_query($conection, $update);
        return $update;
        
    } catch (\Throwable $th) {
        var_dump($th);
    }
}

function selectsDIR($json)
{
    try {
        include './resources/conexion.php';
        $SELECT = "SELECT * FROM telefono WHERE per_id='" . $json['information']['per_id'] . "'";
        $SELECT = mysqli_query($conection, $SELECT);
        $i = 0;
        $telefonos = [];
        while ($row = mysqli_fetch_assoc($SELECT)) {
            $telefonos[$i]['tel_id'] = $row['tel_id'];
            $telefonos[$i]['tel_telefono'] = $row['tel_telefono'];
            $telefonos[$i]['tel_observaciones'] = $row['tel_observaciones'];
            $telefonos[$i]['per_id'] = $row['per_id'];
            $i++;
        }
        return $telefonos;

    } catch (\Throwable $th) {
        var_dump($th);
    }
}

function selectDIR($json, $tipo)
{
    include './resources/conexion.php';
    if($tipo ==1){ //INDIVIDUAL
        $SELECT = "SELECT * FROM direccion WHERE dir_id=" . $json['information']['dir_id'] . ";";
    }else if($tipo == 2){ //TODOS de una persona 
            $SELECT = "SELECT * FROM direccion WHERE per_id=" . $json['information']['per_id'] . ";";
    }
    try {

        $SELECT = mysqli_query($conection, $SELECT);
        $validado= false;
        $direccion = null;
        $direcciones = null;
        while ($row = mysqli_fetch_assoc($SELECT)) {
            $validado = true;
            $direccion = array(
                "dir_id" => $row['dir_id'],
                "dir_direccion" => $row['dir_direccion'],
                "dir_observaciones" => $row['dir_observaciones'],
                "per_id" => $row['per_id']
            );
            $direcciones[]=$direccion;
        }
        /*if ($validado == false){
            $direccion = array(
                "dir_id" => '',
                "dir_direccion" => '',
                "dir_observaciones" =>'',
                "per_id" => '',
            );
            $direcciones[]=$direccion;
        }*/
        if($tipo ==1){
            
            return $direccion;
        }else{        
            
            return $direcciones;
        }

    } catch (\Throwable $th) {
        var_dump($th);
    }
}
function deleteDIR($json){
    try {        
        include('./resources/conexion.php');
        $DELETE = "DELETE FROM direccion WHERE dir_id=".$json['information']['aux_id'].";";
        $DELETE = mysqli_query($conection,$DELETE);
        return $DELETE;
    } catch (\Throwable $th) {  
        var_dump($th);
    }
}