<?php

function validarUS($json){
    include_once('./resources/conexion.php');
    $query = "SELECT * FROM USUARIO WHERE usu_usuario ='".$json['information']['usu_us']."' AND
                usu_pw ='". $json['information']['usu_pw']."';";
    //$con = mysqli_connect($host,$user,$pw,$bd) or die("Problemas al conectar"); //Conectar a la base de datos

    $SELECT = mysqli_query($conection, $query);

    $Usuario = array(
        'usu_id' => "0",
        'usu_usuario' => "",
        'usu_pw' => '',
        'per_id' => ""
    );
    while($us = mysqli_fetch_array($SELECT)){
        $Usuario = array(
            'usu_id' => $us['usu_id'],
            'usu_usuario' => $us['usu_usuario'],
            'usu_pw' => 'XXXX',
            'per_id' => $us['per_id']
        );
    }
    return $Usuario;
}

?>

