//const global   = require('./global.js');

//const estados = global.getNro_estados(); 

	
var crear_matriz_ady = function(largo){
	var matriz_ady = new Array(largo); 
	for (var i=0; i < largo; i++){
		matriz_ady[i] =new Array(largo);
	}
	return matriz_ady;
}

var set_incial_matriz = function(matriz){
	var largo = matriz.length;
	console.log(largo);
	for (var i=0; i < largo; i++){
		for (var j=0; j < largo; j++){	
			matriz[i][j]="-";
		}
	}
}

var llenar_matriz_ady = function(arr_transiciones, matriz_ady){
	//var arr_transiciones = global.getTransiciones();
	for (var i=0; i< arr_transiciones.length; i++){
		var orig = parseInt(arr_transiciones[i].orig);
		var final = parseInt(arr_transiciones[i].final);
		matriz_ady[orig][final]=arr_transiciones[i].simb;
		//console.log("arr["+ orig+"]["+ final+"]= "+ matriz_ady[orig][final]);
	}	
}

var ver_matriz_ady = function(matriz_ady){
	var largo = matriz_ady.length;
	//console.log(largo);
	for (var i=0; i < largo; i++){
		for (var j=0; j < largo; j++){	
			console.log("arr["+ i+"]["+ j+"]= "+ matriz_ady[i][j]);
		}
	}	
}

module.exports = {	
	crear: crear_matriz_ady,
	llenar: llenar_matriz_ady,
	ver: ver_matriz_ady,
	preparar:set_incial_matriz 

};