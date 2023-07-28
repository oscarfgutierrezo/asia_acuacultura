<?php
    if(isset($_POST['submit'])){

        // Variables base datos
        $nombre = $_POST['nombre'];
        $telefono = $_POST['telefono'];
        $email = $_POST['email'];
        $ciudad = $_POST['ciudad'];
        $fecha = date('Y-m-d');

        // Info catalogo
        $file = "./public/CatalogoAsia2023.pdf";
        $filename = "CatalogoAsiaAcuacultura.pdf";

        // Obtener el día, nombre del mes y año actual
        $dia = date('d');
        $mes = date('m');
        $anio = date('Y');

        // Crear el cuerpo del correo con la información y la fecha actual
        $asunto = "Nuevo cliente registrado";
        $cuerpo = "El día $dia del mes $mes del $anio se ha registrado un nuevo cliente en la base de datos:\n\n" .
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
            header("Content-Type: application/pdf");
            header("Content-Disposition: attachment; filename=\"$filename\"");
            readfile($file);
            
            mail('oscarfgutierrezo@gmail.com', $asunto, $cuerpo );
            mail('ventas@asiaacuacultura.com', $asunto, $cuerpo );
        } else {
          echo "Error: " . $sql . "<br>" . $conexion->error;
        }
    }

    include('./db/desconectar.php');
?>