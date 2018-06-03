const global = require('./global.js');
const matriz = require('./matriz.js');

var buscar_e_en_fila = function(fila, arr){
	var matriz_ady = global.getMatriz();
	var largo = matriz_ady.length;
	//console.log("buscar e en fila " + fila);
	for (var j=0; j < largo; j++){
		var simbolo = matriz_ady[fila][j];
		if (simbolo=="e"){
			var indx = arr.indexOf(j);
			if (indx == -1){
				arr.push(j);
			}
		}
	}
	return arr;
}

var definir_matriz_e = function(){
	var matriz_ady = global.getMatriz();
	var largo = matriz_ady.length;
	var matriz_clausura = new Array(largo); 
	//arr_e=[];
	for (var i=0; i < largo; i++){
		var arr_e=[];
		//console.log ("arr e de: " + i)
		arr_e = buscar_e_en_fila(i, arr_e);
		//console.log (arr_e.length +">0");
		if (arr_e.length>0){
			//console.log ("encontró e, largo= " +arr_e.length);
		
			for (var k=0; k < arr_e.length; k++){
				//console.log ("if ("+ arr_e[k] +" != "+ i +")")
				if (arr_e[k] != i){
					var indx = arr_e.indexOf(i);
					if (indx == -1){
						arr_e = buscar_e_en_fila(arr_e[k], arr_e);
					}
				}
				//console.log ("largo: " +  arr_e.length);
				//console.log ("simbolo: " +  arr_e[k]);
			}
		}

		var indx = arr_e.indexOf(i);
		//console.log("indx = "+ indx);
		if (indx == -1){
			arr_e.push(i);
		}

		matriz_clausura[i]=arr_e; 
	}	

	for (var i=0; i<matriz_clausura.length; i++){
		console.log ("Clausura de "+ i +" :");	
		for (var j=0; j< matriz_clausura[i].length; j++){
			console.log ("e: " +  matriz_clausura[i][j]);
		}
	}	
	
	global.setMatriz_clausura(matriz_clausura);
}

definir_matriz_e: definir_matriz_e

module.exports = {	
	definir_matriz_e: definir_matriz_e
};









