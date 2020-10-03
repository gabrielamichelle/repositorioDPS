<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    $json = file_get_contents('php://input');
    $params = json_decode($json);
    require("conexion.php");
    $con=retornarConexion();
    //mysqli_query($con,"update articulos set descripcion='$params->descripcion', precio=$params->precio, proveedor='$params->proveedor', fabricante='$params->fabricante' where codigo=$params->codigo");
    mysqli_query($con,"UPDATE clientes SET nombre='$params->nombre', dui=$params->dui, mascota='$params->mascota', visitas=$params->visitas WHERE id = $params->id");
    class Result {}
    $response = new Result();
    $response->resultado = 'OK';
    $response->mensaje = 'datos modificados';
    header('Content-Type: application/json');
    echo json_encode($response);
?>