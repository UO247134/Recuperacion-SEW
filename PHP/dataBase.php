<?php

class DataBase
{

    public function crearBaseDatos()
    {
        //datos de la base de datos
        $servername = "localhost";
        $username = "DBUSER2018";
        $password = "DBPSWD2018";

        // Conexión al SGBD local con XAMPP con el usuario creado
        $db = new mysqli($servername, $username, $password);

        //comprobamos conexión
        if ($db->connect_error) {
            exit ("<p>ERROR de conexión:" . $db->connect_error . "</p>");
        } else {
            echo "<p>Conexión establecida.</p>";
        }


        $cadenaSQL = "CREATE DATABASE IF NOT EXISTS BaseDatos COLLATE utf8_spanish_ci";
        if ($db->query($cadenaSQL) === TRUE) {
            echo "<p>Base de datos BaseDatos creada con éxito</p>";
        } else {
            echo "<p>ERROR en la creación de la Base de Datos BaseDatos</p>";
            exit();
        }
//cerrar la conexión
        $db->close();
    }

    public function crearTabla()
    {
        $this->borrarDatos();

        //datos de la base de datos
        $servername = "localhost";
        $username = "DBUSER2018";
        $password = "DBPSWD2018";
        $database = "BaseDatos";

        $db = new mysqli($servername, $username, $password);

        $db->select_db($database);

        $crearTabla = "CREATE TABLE IF NOT EXISTS PRODUCTO (
                        id INT NOT NULL AUTO_INCREMENT,
                        titulo VARCHAR(50) NOT NULL,
                        descripcion VARCHAR(50) NOT NULL,
                        precio INT NOT NULL,
                        stock INT NOT NULL,
                        PRIMARY KEY (id))
                        ;
                      ";
        $crearTabla2 = "CREATE TABLE IF NOT EXISTS USUARIO (
                            id INT NOT NULL AUTO_INCREMENT,
                            nombre VARCHAR(50) NOT NULL,
                            apellido VARCHAR(50) NOT NULL,
                            edad INT NOT NULL,
                            correo VARCHAR(50) NOT NULL,
                            dinero INT NOT NULL,
                            password VARCHAR(50) NOT NULL,
                            UNIQUE(correo),
                            PRIMARY KEY (id));";
        $crearTabla3 = "CREATE TABLE IF NOT EXISTS COMPRA (
                                    id INT NOT NULL AUTO_INCREMENT,
                                    fecha DATE NOT NULL,
                                    unidades INT NOT NULL,
                                    idComprador INT NOT NULL,
                                    idProducto INT NOT NULL,
                                    PRIMARY KEY (id),
                                    FOREIGN KEY(idComprador) REFERENCES usuario(id),
                                    FOREIGN KEY(idProducto) REFERENCES producto(id))
                                    ;";


        if ($db->query($crearTabla) === TRUE) {
            echo "<p>Tabla 1 creada con éxito </p>";
        } else {
            echo "<p>ERROR en la creación de la tabla  1</p>";
            exit();
        }
        if ($db->query($crearTabla2) === TRUE) {
            echo "<p>Tabla 2 creada con éxito </p>";
        } else {
            echo "<p>ERROR en la creación de la tabla 2 </p>";
            exit();
        }
        if ($db->query($crearTabla3) === TRUE) {
            echo "<p>Tabla 3 creada con éxito </p>";
        } else {
            echo "<p>ERROR en la creación de la tabla 2 </p>";
            exit();
        }

        //cerrar la conexión
        $db->close();
    }

    public function listarComprasPorCorreoUsuario()
    {
        //datos de la base de datos
        $servername = "localhost";
        $username = "DBUSER2018";
        $password = "DBPSWD2018";
        $database = "BaseDatos";

        // Conexión al SGBD local con XAMPP con el usuario creado
        $db = new mysqli($servername, $username, $password, $database);

        // compruebo la conexion
        if ($db->connect_error) {
            exit ("<p>ERROR de conexión:" . $db->connect_error . "</p>");
        }

        $consultaPre = $db->prepare("SELECT u.correo, p.titulo, p.precio, c.Unidades
                            FROM Compra c, producto p, Usuario u
                            Where u.correo = ?
                            And u.id = c.idComprador
                            And c.idProducto = p.id");
        $consultaPre->bind_param('s', $_POST["correo"]);
        $consultaPre->execute();
        $resultado = $consultaPre->get_result();

        if ($resultado) {
            while ($row = $resultado->fetch_row()) {

                echo "<h3>Usuario:" . $row[0] . "</h3>";
                echo "<p> Titulo: " . $row[1] . "<p>";
                echo "<p> Precio: " . $row[2] . "<p>";
                echo "<p> Unidades: " . $row[3] . "<p>";
            }
        } else {
            echo "<p>Sin resultados</p>";
        }

        // cierro la consulta y la base de datos
        $consultaPre->close();
        $db->close();

    }

    public function listarComprasRealizadas()
    {
        //datos de la base de datos
        $servername = "localhost";
        $username = "DBUSER2018";
        $password = "DBPSWD2018";
        $database = "BaseDatos";

        // Conexión al SGBD local con XAMPP con el usuario creado
        $db = new mysqli($servername, $username, $password, $database);

        // compruebo la conexion
        if ($db->connect_error) {
            exit ("<p>ERROR de conexión:" . $db->connect_error . "</p>");
        }


        $resLista = $db->query('SELECT u.correo, p.titulo, p.precio, c.unidades, c.fecha
                            FROM Compra c, producto p, Usuario u
                            Where u.id = c.idComprador
                            And c.idProducto = p.id');

        while ($row = $resLista->fetch_row()) {
            echo "<section><h3>Compra</h3><ul>";
            echo "<li><p>" . $row[0] . "</p></li>";
            echo "<li><p> Titulo: " . $row[1] . "</p></li>";
            echo "<li><p> Precio: " . $row[2] . "</p></li>";
            echo "<li><p> Unidades: " . $row[3] . "</p></li>";
            echo "<li><p> Fecha: " . $row[4] . "</p></li></ul></section>";
        }

//cerrar la conexión
        $db->close();

    }


    public function importarDatos()
    {
        $servername = "localhost";
        $username = "DBUSER2018";
        $password = "DBPSWD2018";
        $database = "BaseDatos";

        // Conexión al SGBD local con XAMPP con el usuario creado
        $db = new mysqli($servername, $username, $password, $database);
        if ($db->connect_error) {
            exit ("<p>ERROR de conexión:" . $db->connect_error . "</p>");
        } else {
            echo "<p>Conexión establecida.</p>";
        }

        $csv = array_map(function ($v) {
            return str_getcsv($v, ";");
        }, file('Usuarios.csv'));
        for ($i = 1; $i < count($csv); $i = $i + 1) {
            $consultaPre = $db->prepare("INSERT INTO usuario (nombre, apellido, edad, correo, dinero, password)
        VALUES (?,?,?,?,?,?)");
            $consultaPre->bind_param('ssisis',
                $csv[$i][0], $csv[$i][1], $csv[$i][2], $csv[$i][3], $csv[$i][4], $csv[$i][5]);
            $consultaPre->execute();
        }

        echo "<p>Filas agregadas </p>";
        $consultaPre->close();


        $csv = array_map(function ($v) {
            return str_getcsv($v, ";");
        }, file('Productos.csv'));
        for ($i = 1; $i < count($csv); $i = $i + 1) {
            $consultaPre = $db->prepare("INSERT INTO producto (titulo, descripcion, precio, stock)
        VALUES (?,?,?,?)");
            $consultaPre->bind_param('ssii',
                $csv[$i][0], $csv[$i][1], $csv[$i][2], $csv[$i][3]);
            $consultaPre->execute();

        }
        $consultaPre->close();

        $csv = array_map(function ($v) {
            return str_getcsv($v, ";");
        }, file('Compras.csv'));
        for ($i = 1; $i < count($csv); $i = $i + 1) {
            $consultaPre = $db->prepare("INSERT INTO compra(idComprador, idProducto, Fecha, Unidades)
        VALUES (?,?,?,?)");
            $consultaPre->bind_param('iisi',
                $csv[$i][0], $csv[$i][1], $csv[$i][2], $csv[$i][3]);
            $consultaPre->execute();

        }
        $consultaPre->close();
        $db->close();

    }


    public function borrarDatos()
    {
        //datos de la base de datos
        $servername = "localhost";
        $username = "DBUSER2018";
        $password = "DBPSWD2018";
        $database = "BaseDatos";

        // Conexión al SGBD local con XAMPP con el usuario creado
        $db = new mysqli($servername, $username, $password, $database);

        // compruebo la conexion
        if ($db->connect_error) {
            exit ("<p>ERROR de conexión:" . $db->connect_error . "</p>");
        }

        $consultaPre = $db->prepare("DROP TABLE compra");
        $consultaPre->execute();

        $consultaPre2 = $db->prepare("DROP TABLE producto");
        $consultaPre2->execute();

        $consultaPre3 = $db->prepare("DROP TABLE usuario");
        $consultaPre3->execute();


        $consultaPre->close();
        $db->close();

    }

}
