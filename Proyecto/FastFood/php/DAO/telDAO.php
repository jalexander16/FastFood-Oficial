<?php

//Insertar Telefonos
function insertTelefono($json)
{
    include_once './resources/conexion.php';
    try {
        $query = "INSERT INTO telefono (tel_telefono,tel_observaciones,per_id) VALUES(
            '" . $json['information']['aux_texto'] . "',
            '" . $json['information']['aux_observaciones'] . "',
            '" . $json['information']['per_id'] . "');";

        $query = mysqli_query($conection, $query);

        return $query;
    } catch (\Throwable $th) {
        var_dump($th);
    }
}

//Actualizar Telefono
function updateTelefono($json)
{
    include_once './resources/conexion.php';
    try {
        $update = "UPDATE telefono SET
                tel_telefono = '" . $json['information']['aux_texto'] . "',
                tel_observaciones = '" . $json['information']['aux_observaciones'] . "',
                per_id=" . $json['information']['per_id'] . "
                WHERE tel_id= " . $json['information']['aux_id'] . ";";

        $update = mysqli_query($conection, $update);
        return $update;
    } catch (\Throwable $th) {
        var_dump($th);
    }
}

function selectTelefonos($json)
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

function consultarTEL($json, $tipo)
{
    include './resources/conexion.php';
    if ($tipo == 1) { //INDIVIDUAL
        $SELECT = "SELECT * FROM telefono WHERE tel_id=" . $json['information']['tel_id'] . ";";
    } else if ($tipo == 2) { //TODOS
        $SELECT = "SELECT * FROM telefono;";
    } else if ($tipo == 3) { //TODOS DE UNA PERSONA
        $SELECT = "SELECT * FROM telefono WHERE per_id=" . $json['information']['per_id'] . ";";
    }
    try {

        $SELECT = mysqli_query($conection, $SELECT);
        $telefono = null;
        $telefonos = null;
        while ($row = mysqli_fetch_assoc($SELECT)) {
            $telefono = array(
                "tel_id" => $row['tel_id'],
                "tel_telefono" => $row['tel_telefono'],
                "tel_observaciones" => $row['tel_observaciones'],
                "per_id" => $row['per_id'],
            );
            $telefonos[] = $telefono;
        }

        if ($tipo == 1) {
            return $telefono;
        } else {
            return $telefonos;
        }

    } catch (\Throwable $th) {
        var_dump($th);
    }
}

function deleteTEL($json)
{
    try {
        include_once './resources/conexion.php';
        $DELETE = "DELETE FROM telefono WHERE tel_id=" . $json['information']['aux_id'] . "";
        $DELETE = mysqli_query($conection, $DELETE);
        return $DELETE;
    } catch (\Throwable $th) {
        var_dump($th);
    }
}
