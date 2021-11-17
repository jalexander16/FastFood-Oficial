<?php

function insertPED($json){
    try {
        include_once('./resources/conexion.php');
        $query = "INSERT INTO PEDIDO 
                        (mes_id, per_id, usu_id, ped_estado, ped_observaciones, ped_domicilio,dir_id) 
                    VALUES 
                        (".$json['information']['mes_id'].","
                        .$json['information']['per_id'].","
                        .$json['information']['usu_id'].","
                        .$json['information']['ped_estado'].",'"
                        .$json['information']['ped_observaciones']."',"
                        .$json['information']['ped_domicilio'].","
                        .$json['information']['dir_id'].");";
         $SELECT = mysqli_query($conection, $query);
         return $SELECT;
    } catch (\Throwable $th) {
       var_dump($th);
    }
}

function updatePED($json){
    try {
        include_once('./resources/conexion.php');
        $UPDATE = "UPDATE PEDIDO SET 
        mes_id =" .$json['information']['mes_id'].",
        per_id =" .$json['information']['per_id'].",
        usu_id =" .$json['information']['usu_id'].",
        ped_estado =" .$json['information']['ped_estado'].",
        ped_observaciones ='" .$json['information']['ped_observaciones']."',
        ped_domicilio =" .$json['information']['ped_domicilio'].",
        dir_id =" .$json['information']['dir_id']."
        WHERE ped_id=".$json['information']['ped_id']."
        ";
        
        $UPDATE = mysqli_query($conection , $UPDATE);
        return $UPDATE;
    } catch (\Throwable $th) {
        var_dump($th);
    }
}

function selectPED($json,$tipo){
    try {
        include_once('./resources/conexion.php');
        $SELECT = "SELECT pd.ped_id,
                          pd.mes_id,
                          me.mes_nombre,
                          pd.per_id,
                          CONCAT(pe.per_nombre1,' ',pe.per_apellido1) AS nombre,
                          pd.usu_id,
                          us.usu_usuario,
                          pd.ped_estado,
                          pd.ped_fecha,
                          pd.ped_observaciones,
                          pd.ped_domicilio 
                   FROM pedido pd,
                        persona pe,
                        mesa me,
                        usuario us
                   WHERE pd.mes_id = me.mes_id
                   AND   pd.per_id = pe.per_id
                   AND   pd.usu_id = us.usu_id";
        if($tipo == 1){
            $SELECT =  $SELECT." AND pd.ped_id = ".$json['information']['ped_id'].";";
        }
        $pedidos=[];
        $datos = false;
        $SELECT = mysqli_query($conection,$SELECT);
        while($row = mysqli_fetch_assoc($SELECT)) {
            $datos = true;
            $pedido['ped_id'] = $row['ped_id'];
            $pedido['mes_id'] = $row['mes_id'];
            $pedido['mes_nombre'] = $row['mes_nombre'];
            $pedido['per_id'] = $row['per_id'];
            $pedido['nombre'] = $row['nombre'];
            $pedido['usu_id'] = $row['usu_id'];
            $pedido['usu_usuario'] = $row['usu_usuario'];
            $pedido['ped_estado'] = $row['ped_estado'];
            $pedido['ped_fecha'] = $row['ped_fecha'];
            $pedido['ped_observaciones'] = $row['ped_observaciones'];
            $pedido['ped_domicilio'] = $row['ped_domicilio'];
            array_push($pedidos,$pedido);
        }
        if($datos == false){
            $pedido['ped_id'] = '';
            $pedido['mes_id'] = '';
            $pedido['mes_nombre']='';
            $pedido['per_id'] = '';
            $pedido['per_id'] = '';
            $pedido['usu_id'] = '';
            $pedido['ped_estado'] = '';
            $pedido['ped_fecha'] = '';
            $pedido['ped_observaciones'] ='';
            $pedido['ped_domicilio'] = '';
            array_push($pedidos,$pedido);
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