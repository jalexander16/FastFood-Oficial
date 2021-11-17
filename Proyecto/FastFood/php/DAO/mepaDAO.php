<?php
//Insertar medio de pago 
function insertMedioDePago($json){
    try {
        include_once('./resources/conexion.php');
        $query = "INSERT INTO metodo_pago (mepa_nombre,mepa_descripcion,mepa_efectivo)VALUES (
                  '".$json['information']['mepa_nombre']."',
                  '".$json['information']['mepa_descripcion']."',
                  '".$json['information']['mepa_efectivo']."');";
                  
        $query = mysqli_query($conection,$query);
      
        return $query;

    } catch (\Throwable $th) {
        var_dump($th);
    }
}

function updateMedioDePago($json){  
    try {
        include_once('./resources/conexion.php');
        $update="UPDATE metodo_pago SET 
                mepa_nombre = '".$json['information']['mepa_nombre']."',
                mepa_descripcion = '".$json['information']['mepa_descripcion']."',
                mepa_efectivo='".$json['information']['mepa_efectivo']."'
                WHERE mepa_id='".$json['information']['mepa_id']."';";
             
        $update = mysqli_query($conection,$update);
        return $update;
    } catch (\Throwable $th) {
    var_dump($th);
    }
}
function selectMedioDePago($json,$tipo){
    try {
        include('./resources/conexion.php');
        $SELECT ="";
        if($tipo == '1'){
            $SELECT = "SELECT * FROM metodo_pago WHERE mepa_id='".$json['information']['mepa_id']."'";
        }else{
            $SELECT = "SELECT * FROM metodo_pago ;";
        }
        
        $SELECT =  mysqli_query($conection,$SELECT);
        $i=0;
        $metodos = [];
        while($row = mysqli_fetch_assoc($SELECT)){
            if($tipo == '1'){
                $metodo['mepa_id'] = $row['mepa_id'];
                $metodo['mepa_nombre'] = $row['mepa_nombre'];
                $metodo['mepa_descripcion'] = $row['mepa_descripcion'];
                $metodo['mepa_id'] = $row['mepa_id'];
            }else{
                $metodo['mepa_id'] = $row['mepa_id'];
                $metodo['mepa_nombre'] = $row['mepa_nombre'];
                $metodo['mepa_descripcion'] = $row['mepa_descripcion'];
                $metodo['mepa_id'] = $row['mepa_id'];
                array_push($metodos,$metodo);
            }
           
            
        }


        if($tipo == '1'){
            return $metodo;
        }else{
            return $metodos;
        }
        

    } catch (\Throwable $th) {
        var_dump($th);
    }
}

function deleteMedioDePago($json){
    try {
        include_once('./resources/conexion.php');
        $DELETE = "DELETE FROM metodo_pago WHERE mepa_id=".$json['information']['mepa_id']."";
        $DELETE = mysqli_query($conection, $DELETE);
        return $DELETE;
    } catch (\Throwable $th) {
        var_dump($th);
    }
}