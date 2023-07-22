<?php
    /* $host = "localhost";
    $database = "asiaacua_clientes";
    $name = "asiaacua_admin";
    $password = "UKS7r@@=Au~Y"; */

    $host = "localhost";
    $database = "asiaacua_clientes";
    $name = "baq";
    $password = "Asiste.2021";

    error_reporting(1);

    $conexion = new mysqli($host, $name, $password, $database);
    $conexion->set_charset("utf8");

    if ($conexion->errno) {
        echo "No se puede acceder a la base de datos";
        exit();
    }
?>