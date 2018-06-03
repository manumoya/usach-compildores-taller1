const global = require('./global.js');
//const pila = require('./pila.js');
const matriz = require('./matriz.js');

var cheq_si_efd_por_e = function(){
	var matriz_ady = global.getMatriz();
	var largo = matriz_ady.length;
	//var simbolos=[];
	for (var i=0; i < largo; i++){
		//simbolos=[];
		for (var j=0; j < largo; j++){
			if (matriz_ady[i][j] != "-" && matriz_ady[i][j] =="e"){
					console.log("EL automáta no es un AFD, es un AFND-e ["+i+"]["+j+"]="+ matriz_ady[i][j]);
					return;
			}	
		}
	}
}

var cheq_si_efd_por_estado = function(){
	var matriz_ady = global.getMatriz();
	var largo = matriz_ady.length;
	var simbolos=[];
	for (var i=0; i < largo; i++){
		simbolos=[];
		for (var j=0; j < largo; j++){
			if (matriz_ady[i][j] != "-"){
				var indx = simbolos.indexOf(matriz_ady[i][j]);
				if (indx==-1){
					simbolos.push(matriz_ady[i][j]);
				}else{
					console.log("EL automáta no es un AFD -validación x estado- ["+i+"]["+j+"]="+ matriz_ady[i][j]);
					return;
				}
			}	
		}
	}
	console.log("El automáta es un AFD");
}

var cheq_si_efd_por_simbolo = function(){
	var matriz_ady = global.getMatriz();
	var largo = matriz_ady.length;
	var simbolos = global.getSimbolos();
	for (var i=0; i < largo; i++){
		for (var j=0; j < largo; j++){
			if (matriz_ady[i][j] != "-" && matriz_ady[i][j] != "e"){
				//var simbolos = global.getSimbolos();
				var indx = simbolos.indexOf(matriz_ady[i][j]);
				//console.log(indx);

				if (indx==-1){
					console.log("EL automáta no es un AFD -validación x simbolos- ["+i+"]["+j+"]="+ matriz_ady[i][j]);
					return;
				}
			}	
		}
	}
	console.log("El automáta es un AFD");
}

var desagrupar = function(origen, final, grupo_simbolo){
	console.log ("desagrupar ["+ origen +"]["+ final +"]= "+ grupo_simbolo);
	var orig = origen;
	for (var i=0; i < grupo_simbolo.length; i++){
		//console.log("simbolo:  "+ grupo_simbolo[i]);
			
		if (i != grupo_simbolo.length-1){
			matriz.agregar_fila();
			matriz.agregar_columa();
			var id_nuevo_nodo = global.getMatriz().length-1	;
			console.log("asociar orig=" + orig+ " a nodo nuevo="+ id_nuevo_nodo  + " el simbolo "+ grupo_simbolo[i]);
			matriz.guardar_datos(orig,id_nuevo_nodo,grupo_simbolo[i]);
			orig = id_nuevo_nodo;
			console.log("============== ");
		}else if (i == grupo_simbolo.length-1){
			console.log("asociar nodo nuevo= "+ id_nuevo_nodo + " a orig=" + final + " el simbolo "+ grupo_simbolo[i]);
			console.log("============== ");
			matriz.guardar_datos(id_nuevo_nodo,final,grupo_simbolo[i]);
		}
	}
	matriz.guardar_datos(origen,final,"-");
}

var simplificar_simbolos_agrupados = function(){
	var matriz_ady = global.getMatriz();
	var largo = matriz_ady.length;
	for (var i=0; i < largo; i++){
		for (var j=0; j < largo; j++){
			var simbolo = matriz_ady[i][j];
			if (simbolo.length>1){
				desagrupar(i, j, matriz_ady[i][j]);
			}
		}
	}	
}

//var existe_en_e = function(){
//}

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


		console.log ("arr e de: " + i);	
		for (var k=0; k< arr_e.length; k++){
			console.log ("simb: " +  arr_e[k]);
		}
		console.log ("====== " )
		
	}	

}

module.exports = {	
	cheq_si_efd_por_estado: cheq_si_efd_por_estado,
	cheq_si_efd_por_simbolo: cheq_si_efd_por_simbolo,
	cheq_si_efd_por_e: cheq_si_efd_por_e,
	simplificar_simbolos_agrupados: simplificar_simbolos_agrupados,
	definir_matriz_e: definir_matriz_e

};
