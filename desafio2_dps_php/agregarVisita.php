<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    $json = file_get_contents('php://input');
    $params = json_decode($json);
    require("conexion.php");
    $con=retornarConexion();
    mysqli_query($con,"INSERT INTO visitas(idCliente, tratamiento, medicamento, costo) 
                       VALUES ($params->idCliente, '$params->tratamiento','$params->medicamento', $params->costo)");
    class Result {}
    $response = new Result();
    $response->resultado = 'OK';
    $response->mensaje = 'datos grabados';
    header('Content-Type: application/json');
    echo json_encode($response);
?>