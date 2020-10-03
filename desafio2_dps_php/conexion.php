<?php
    function retornarConexion() {
        $con=mysqli_connect("localhost","root","","desafio2_dps");
        return $con;
    }
?>