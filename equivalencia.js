const global = require('./global.js');

var get_arreglo_transiciones = function(arr_clau, simbolo){
	var matriz_ady = global.getMatriz();
	//var matriz_clausura = global.getMatriz_clausura();
	var largo = matriz_ady.length;
	var arr_simb =[];
	for (var i=0; i< arr_clau.length; i++){
		//console.log ("buscar nodo "+ arr_clau[i] + " con simbolo: "+ simbolo );
		for (var j=0; j<largo; j++){
			if (simbolo == matriz_ady[i][j]){
				var indx = arr_simb.indexOf(j);
				if (indx==-1){
					arr_simb.push(j)
				}
				console.log ("buscar nodo ["+ arr_clau[i] + "]["+j + "]= " + matriz_ady[i][j]);
			}
		}
	}
	console.log(" simbo largo " +arr_simb.length);
}


module.exports = {	
	get_arreglo_transiciones: get_arreglo_transiciones
};