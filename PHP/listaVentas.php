<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="utf-8">
    <meta name="author" content="Miguel Guimarey">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>jQuery UI Tabs - Content via Ajax</title>
    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
    <link rel="stylesheet" type="text/css" href="../Css/estilo.css"/>

</head>

<body>
    <h1>Ventas Realizadas</h1>
    <main>

        <h2>Todas las compras realizadas</h2>

        <?php
        include("dataBase.php");
        $dataBase = new DataBase();
        $dataBase->crearTabla();

        if (count($_POST) > 0) {
            //$dataBase->borrarDatos();
            $dataBase->importarDatos();
            if (isset($_POST['comprasTotales'])) $dataBase->listarComprasRealizadas();
            if (isset($_POST['listarComprasUsuario'])) $dataBase->listarComprasPorCorreoUsuario();
        }

        echo   "<form action='#' method='post' name='botones'>
                <input type = 'submit' class='button' name = 'comprasTotales' value = 'Mostrar Compras'/>

                <p>Introduce el comprador<p>  <input type='text' name='correo'>
                <input type = 'submit' class='button' name = 'listarComprasUsuario' value = 'Compras de Usuario'/>
            </form>"

        ?>
    </main>

</body>

</html>