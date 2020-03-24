<?php

class Conexion{

	static public function conectar(){

		$link = new PDO("mysql:host=64.227.27.20;dbname=kardex",
			            "joel",
			            "S!=HN5WuwDQE&kv%");

		$link->exec("set names utf8");

		return $link;

	}

}