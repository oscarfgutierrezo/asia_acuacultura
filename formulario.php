<?php
    if(isset($_POST['submit'])){
        // Nombres de los meses en español
        $nombresMeses = array(
            1 => 'Enero', 2 => 'Febrero', 3 => 'Marzo', 4 => 'Abril', 5 => 'Mayo', 6 => 'Junio',
            7 => 'Julio', 8 => 'Agosto', 9 => 'Septiembre', 10 => 'Octubre', 11 => 'Noviembre', 12 => 'Diciembre'
        );

        $nombre = $_POST['nombre'];
        $telefono = $_POST['telefono'];
        $email = $_POST['email'];
        $ciudad = $_POST['ciudad'];
        $fecha = date('Y-m-d');

        // Obtener el día, nombre del mes y año actual
        $dia = date('d');
        $mesNumero = date('n'); // Número del mes sin ceros a la izquierda
        $mes = $nombresMeses[$mesNumero];
        $anio = date('Y');

        // Crear el cuerpo del correo con la información y la fecha actual
        $asunto = "Nuevo cliente registrado";
        $cuerpo = "El día $dia de $mes del $anio se ha registrado un nuevo cliente en la base de datos:\n\n" .
                  "Nombre: $nombre\n" .
                  "Teléfono: $telefono\n" .
                  "Email: $email\n" .
                  "Ciudad: $ciudad\n";

        $sql = "INSERT INTO clientes (nombre, telefono, email, ciudad, fecha) VALUES ('$nombre', '$telefono', '$email', '$ciudad', '$fecha')";

        include('./db/conectar.php');
    
        if ($conexion->connect_error) {
          die("Falló la conexión: " . $conexion->connect_error);
        }

        if ($conexion->query($sql) === TRUE) {    
            mail('oscarfgutierrezo@gmail.com', $asunto, $cuerpo );
        } else {
          echo "Error: " . $sql . "<br>" . $conexion->error;
        }
    }

    include('./db/desconectar.php');
?>