<?php

function consultarTIP($json, $tipo){
    include_once('./resources/conexion.php');
    if($tipo == 1){ //INDIVIDUAL
        $query = "SELECT * FROM tipo_menu WHERE tip_id =".$json['information']['tip_id'].";";
    }else if($tipo == 2){ //TODOS
        $query = "SELECT * FROM tipo_menu;";
    }

    $SELECT = mysqli_query($conection, $query);
    
    $tipoCarta = array(
        "tip_id" => "0",
        "tip_nombre" => "",
        "tip_descripcion" => ""
    );

    $lista;

    while($tip = mysqli_fetch_array($SELECT)){
        $tipoCarta = array(
            "tip_id" => $tip['tip_id'],
            "tip_nombre" => $tip['tip_nombre'],
            "tip_descripcion" => $tip['tip_descripcion']
        );
        $lista[] = $tipoCarta;
    }

    if($tipo == 1){
        return $tipoCarta;
    }else{
        return $lista;
    }
    
}

function insertarTIP($json){
    include_once('./resources/conexion.php');
    $query = "INSERT INTO tipo_menu 
        (tip_nombre, tip_descripcion) 
    VALUES 
        ('". $json['information']['tip_nombre'] ."', 
        '". $json['information']['tip_descripcion'] ."');"; 

    $SELECT = mysqli_query($conection, $query);
    return $SELECT;
}

function updateTIP($json){
    include_once('./resources/conexion.php');
    $query = "UPDATE tipo_menu SET 
        tip_nombre = '".$json['information']['tip_nombre'] ."', 
        tip_descripcion = '".$json['information']['tip_descripcion']."'  
        WHERE tip_id = ".$json['information']['tip_id'] .";";
    $SELECT = mysqli_query($conection, $query);
    return $SELECT;
}

?>