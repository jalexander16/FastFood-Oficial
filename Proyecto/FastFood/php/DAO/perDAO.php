<?php

function insertPersona($json)
{
    try {
        include_once './resources/conexion.php';
        $query = "INSERT INTO persona (per_documento,per_nombre1,per_nombre2,per_apellido1,per_apellido2)VALUES (
           '" . $json['information']['per_documento'] . "',
           '" . $json['information']['per_nombre1'] . "',
           '" . $json['information']['per_nombre2'] . "',
           '" . $json['information']['per_apellido1'] . "',
           '" . $json['information']['per_apellido2'] . "'); ";

        $SELECT = mysqli_query($conection, $query);
        return $SELECT;
    } catch (\Throwable $th) {
        var_dump($th);
    }

}

function updatePersona($json)
{
    try {
        include_once './resources/conexion.php';
        $query = "UPDATE persona SET
                  per_documento='" . $json['information']['per_documento'] . "',
                  per_nombre1='" . $json['information']['per_nombre1'] . "',
                  per_nombre2='" . $json['information']['per_nombre2'] . "',
                  per_apellido1= '" . $json['information']['per_apellido1'] . "',
                  per_apellido2= '" . $json['information']['per_apellido2'] . "'
                  WHERE per_id= '" . $json['information']['per_id'] . "';";

        $UPDATE = mysqli_query($conection, $query);
        return $UPDATE;
    } catch (\Throwable $th) {
        var_dump($th);
    }

}

function consultarPER($json, $tipo)
{
    include_once './resources/conexion.php';

    if ($tipo == 1) { //INDIVIDUAL
        $query = "SELECT * FROM persona WHERE per_id =" . $json['information']['per_id'] . ";";
    } else if ($tipo == 2) { //TODOS
        $query = "SELECT * FROM persona;";
    }

    $SELECT = mysqli_query($conection, $query);
    $persona = array(
        "per_id" => "",
        "per_documento" => "",
        "per_nombre1" => "",
        "per_nonmbre2" => "",
        "per_apellido1" => "",
        "per_apellido2" => "",
        "per_Telefonos" => "",
        "per_Direcciones" => "",
    );
    $personas;
    while ($row = mysqli_fetch_assoc($SELECT)) {
        if ($tipo == 1) {
            $persona = array(
                "per_id" => $row['per_id'],
                "per_documento" => $row['per_documento'],
                "per_nombre1" => $row['per_nombre1'],
                "per_nombre2" => $row['per_nombre2'],
                "per_apellido1" => $row['per_apellido1'],
                "per_apellido2" => $row['per_apellido2'],
                "per_Telefonos" => consultarTEL($json, 3),
                "per_Direcciones" => selectDIR($json, 2), //OJO INCLUIR TODO EN UNA SOLA FUNCION
            );
        } else {
            $persona = array(
                "per_id" => $row['per_id'],
                "per_documento" => $row['per_documento'],
                "per_nombre1" => $row['per_nombre1'],
                "per_nombre2" => $row['per_nombre2'],
                "per_apellido1" => $row['per_apellido1'],
                "per_apellido2" => $row['per_apellido2'],
            );
        }
        $personas[] = $persona;
    }

    if ($tipo == 1) {
        return $persona;
    } else {
        return $personas;
    }

}

function selectPersona($json, $tipo)
{
    try {
        include_once './resources/conexion.php';
        $consulta = "";
        if ($tipo == '1' && $json['information']['filtro'] != '') {
            //$consulta = "SELECT * FROM PERSONA WHERE per_documento='" . $json['information']['filtro'] . "';";
            $consulta = "SELECT * FROM PERSONA WHERE per_documento='" . $json['information']['filtro'] . "';";
        } else if ($tipo == '2' && $json['information']['filtro'] != '') {
            //$nombre = $json['information']['per_nombre1'] . " " . $json['information']['per_apellido1'] . "";
            $nombre = $json['information']['filtro'];
            $consulta = "SELECT * FROM persona WHERE CONCAT(per_nombre1,' ',per_apellido1,' ') like'%" . $nombre . "%'";
        } else {
            $consulta = "SELECT * FROM persona WHERE per_id>0;";
        }

        $consulta = mysqli_query($conection, $consulta);
        $i = 0;
        $personas = [];

        while ($row = mysqli_fetch_assoc($consulta)) {

            $personas[$i]['per_id'] = $row['per_id'];
            $personas[$i]['per_documento'] = $row['per_documento'];
            $personas[$i]['per_nombre1'] = $row['per_nombre1'];
            $personas[$i]['per_nombre2'] = $row['per_nombre2'];
            $personas[$i]['per_apellido1'] = $row['per_apellido1'];
            $personas[$i]['per_apellido2'] = $row['per_apellido2'];
            //$personas[$i]['per_direccion'] = selectDirecciones($row['per_id']);
            //$personas[$i]['per_telefono'] = consultarTEL($row['per_id']);
            $i++;

        }

        return $personas;

    } catch (\Throwable $th) {
        //  var_dump($th);
    }
}

function deletePER($json)
{
    try {
        include_once './resources/conexion.php';
        $DELETE = "DELETE FROM persona WHERE per_id=" . $json['information']['per_id'] . "";
        $DELETE = mysqli_query($conection, $DELETE);
        return $DELETE;
    } catch (\Throwable $th) {
        var_dump($th);
    }
}
/////METODOS DE DAO ADICIONALES
/*function selectDirecciones($per_id)
{
try {
include './resources/conexion.php';
$SELECT = "SELECT * FROM direccion WHERE per_id=" . $per_id . "";
$SELECT = mysqli_query($conection, $SELECT);
$i = 0;
$direcciones = [];
while ($row = mysqli_fetch_assoc($SELECT)) {
$direcciones[$i]['dir_id'] = $row['dir_id'];
$direcciones[$i]['dir_direccion'] = $row['dir_direccion'];
$direcciones[$i]['dir_observaciones'] = $row['dir_observaciones'];
$direcciones[$i]['per_id'] = $row['per_id'];
$i++;
}
return $direcciones;

} catch (\Throwable $th) {
var_dump($th);
}
}*/
/*function selectTelefonos($per_id)
{
try {
include './resources/conexion.php';
$SELECT = "SELECT * FROM telefono WHERE per_id=" . $per_id . "";
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
}*/
