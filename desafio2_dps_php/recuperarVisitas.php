<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    require("conexion.php");
    $con=retornarConexion();
    // $registros=mysqli_query($con,"SELECT visitas.id, visitas.idCliente, clientes.nombre, visitas.tratamiento, visitas.medicamento, visitas.costo FROM visitas INNER JOIN clientes ON visitas.idCliente = clientes.id WHERE visitas.idCliente = $_GET[id]");
    $registros=mysqli_query($con,"SELECT id, tratamiento, medicamento, costo FROM visitas WHERE idCliente = $_GET[id]");
    $vec=[];
    while ($reg=mysqli_fetch_array($registros))
    {
        $vec[]=$reg;
    }
    $cad=json_encode($vec);
    echo $cad;
    //header('Content-Type: application/json');
?>