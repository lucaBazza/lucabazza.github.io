<?php
    $ip_richiesta = $_SERVER['REMOTE_ADDR'];
    if(strcmp($ip_richiesta,"192.168.1.29")==0){
        echo json_encode(array('ip' => $_SERVER['REMOTE_ADDR']
                                ,'success' => 1
                                ,"msg"=>"macbook"
        ));
    }
    else {
        echo json_encode(array('ip' => $_SERVER['REMOTE_ADDR']
            ,'success' => 0
            ,"msg"=>"device non autorizzato"
        ));
    }
?>