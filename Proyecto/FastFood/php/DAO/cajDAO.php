<?php

//insert caja
function insertCaja($json){
    try {
        include_once('./resources/conexion.php');
        $query = "INSERT INTO caja (usu_id,per_id,mepa_id,mov_id,escredito,caja_valor) VALUES(
            ".$json['information']['usu_id'].",
            ".$json['information']['per_id'].",
            ".$json['information']['mepa_id'].",
            ".$json['information']['mov_id'].",
            ".$json['information']['escredito'].",
            ".$json['information']['caja_valor'].");";

          
        $query = mysqli_query($conection, $query);
      
        return $query;
        
    } catch (\Throwable $th) {
        var_dump($th);
    }
}

function selectAllCaja($json, $tipo){
    try {
        include_once('./resources/conexion.php');
        $SELECT = "SELECT ca.caja_id,
                          us.usu_id,
                          us.usu_usuario, 
                          pe.per_id,
                          CONCAT(pe.per_nombre1,' ',pe.per_apellido1) AS Nombre,
                          mp.mepa_id,
                          mp.mepa_nombre,
                          ca.mov_id,
                          mo.mov_nombre,
                          ca.caja_valor,
                          ca.fecha,
                          ca.escredito
                  FROM caja ca,persona pe,usuario us,metodo_pago mp,movimiento mo
                  WHERE ca.per_id = pe.per_id
                  AND   ca.mepa_id = mp.mepa_id
                  AND ca.usu_id = us.usu_id 
                  AND ca.mov_id=mo.mov_id ";
        if ($tipo == '1'){
         $SELECT = $SELECT . "AND ca.usu_id= ".$json['information']['usu_id'].";";
        } 

       
        $SELECT = mysqli_query($conection,$SELECT);
       
        $registros=[];

        while($row = mysqli_fetch_assoc($SELECT)){
          
                $caja['caja_id']=$row['caja_id'];
                $caja['usu_id']=$row['usu_id'];
                $caja['usu_usuario']=$row['usu_usuario'];
                $caja['per_id']=$row['per_id'];
                $caja['Nombre']=$row['Nombre'];
                $caja['mepa_id']=$row['mepa_id'];
                $caja['mepa_nombre']=$row['mepa_nombre'];
                $caja['mov_id']=$row['mov_id'];
                $caja['mov_nombre']=$row['mov_nombre'];
                $caja['escredito']=$row['escredito'];
                $caja['caja_valor']=$row['caja_valor'];
                $caja['fecha']=$row['fecha'];
                array_push($registros,$caja);
            
           
        }
        return $registros;

    } catch (\Throwable $th) {
        var_dump($th);
    }
}

function deleteCaja($json,$tipo){
    try {
        
        include('./resources/conexion.php');
        $DELETE="";
        if($tipo == '1'){
            $DELETE = "DELETE FROM caja WHERE usu_id=".$json['information']['usu_id'].";";
        }else{
            $DELETE = "TRUNCATE caja";
        }
       
        $DELETE = mysqli_query($conection,$DELETE);
        return $DELETE;
    } catch (\Throwable $th) {  
        var_dump($th);
    }
}