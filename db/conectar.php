<?php
    $host = "localhost";
    $database = "asiaacua_clientes";
    $name = "asiaacua_admin";
    $password = "UKS7r@@=Au~Y";

    error_reporting(1);

    $conexion = new mysqli($host, $name, $password, $database);

    if ($conexion->errno) {
        echo "No se puede acceder a la base de datos";
        exit();
    }
?>