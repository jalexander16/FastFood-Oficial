<?php

function consultarCAR($json, $tipo)
{
    include_once './resources/conexion.php';
    if ($tipo == 1) { //INDIVIDUAL
        $query = "SELECT * FROM carta WHERE car_id =" . $json['information']['car_id'] . ";";
    } else if ($tipo == 2) { //TODOS
        $query = "SELECT * FROM carta;";
    }

    $SELECT = mysqli_query($conection, $query);

    $carta = array(
        "car_id" => "0",
        "car_nombre" => "",
        "car_valor" => "",
        "car_descripcion" => "",
        "tip_id" => "",
    );

    $lista;

    while ($car = mysqli_fetch_array($SELECT)) {
        $carta = array(
            "car_id" => $car['car_id'],
            "car_nombre" => $car['car_nombre'],
            "car_valor" => $car['car_valor'],
            "car_descripcion" => $car['car_descripcion'],
            "tip_id" => $car['tip_id'],
        );
        $lista[] = $carta;
    }

    if ($tipo == 1) {
        return $carta;
    } else {
        return $lista;
    }

}

function insertarCAR($json)
{
    include_once './resources/conexion.php';
    $query = "INSERT INTO carta
        (car_nombre, car_valor, car_descripcion, tip_id)
    VALUES
        ('" . $json['information']['car_nombre'] . "',
        '" . $json['information']['car_valor'] . "',
        '" . $json['information']['car_descripcion'] . "',
        " . $json['information']['tip_id'] . ");";

    $SELECT = mysqli_query($conection, $query);
    return $SELECT;
}

function obtenerServiciosxNombre($json): array
{

    $car_tipo = $json['information']['tip_id'];
    $car_nombre = $json['information']['car_nombre'];

    try {
        include './resources/conexion.php';
        $consulta = "";

        if ($car_tipo == '0') {
            $consulta = "SELECT * FROM carta WHERE car_nombre like '%" . $car_nombre . "%';";
        } else {
            $consulta = "SELECT * FROM carta WHERE tip_id =" . $car_tipo . " AND car_nombre like '%" . $car_nombre . "%'";
        }
        $consulta = mysqli_query($conection, $consulta);

        // echo "<pre>";
        // var_dump(mysqli_fetch_assoc($consulta)); // fetch_all nos retorna todo // fetch_array fetch_assoc
        // echo "</pre>";
        $i = 0;
        $cartas = [];

        while ($row = mysqli_fetch_assoc($consulta)) {
            $cartas[$i]['car_id'] = $row['car_id'];
            $cartas[$i]['car_nombre'] = $row['car_nombre'];
            $cartas[$i]['car_valor'] = $row['car_valor'];
            $cartas[$i]['car_valor'] = $row['car_valor'];
            $cartas[$i]['car_descripcion'] = $row['car_descripcion'];
            $cartas[$i]['tip_id'] = $row['tip_id'];
            $i++;

        }

        return $cartas;
    } catch (\Throwable $th) {
        //throw $th;
        var_dump($th);
        // var_dump($th);
    }
}

function updateCAR($json)
{
    include_once './resources/conexion.php';
    //echo $json . "<br>";
    $query = "UPDATE carta SET
        car_nombre = '" . $json['information']['car_nombre'] . "',
        car_valor = " . $json['information']['car_valor'] . ",
        car_descripcion = '" . $json['information']['car_descripcion'] . "',
        tip_id = " . $json['information']['tip_id'] . "
        WHERE car_id = " . $json['information']['car_id'] . ";";
    //echo $query ."<br>";
    $SELECT = mysqli_query($conection, $query);
    return $SELECT;
}

function deleteCAR($json)
{
    try {
        include_once './resources/conexion.php';
        $DELETE = "DELETE FROM carta WHERE car_id=" . $json['information']['car_id'] . "";
        $DELETE = mysqli_query($conection, $DELETE);
        return $DELETE;
    } catch (\Throwable $th) {
        var_dump($th);
    }
}
