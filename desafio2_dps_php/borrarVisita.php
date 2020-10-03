<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    require("conexion.php");
    $con = retornarConexion();
    mysqli_query($con, "DELETE FROM visitas WHERE id=$_GET[id]");
    class Result { }
    $response = new Result();
    $response -> resultado = 'OK';
    $response -> mensaje = 'visita borrada';
    header('Content-Type: application/json');
    echo json_encode($response);
?>