const global = require('./global.js');
const pila = require('./pila.js');


var cheq_si_efd_por_e = function(){
	var matriz = global.getMatriz();
	var largo = matriz.length;
	//var simbolos=[];
	for (var i=0; i < largo; i++){
		//simbolos=[];
		for (var j=0; j < largo; j++){
			if (matriz[i][j] != "-" && matriz[i][j] =="e"){
					console.log("EL automáta no es un AFD, es un AFND-e ["+i+"]["+j+"]="+ matriz[i][j]);
					return;
			}	
		}
	}
}

var cheq_si_efd_por_estado = function(){
	var matriz = global.getMatriz();
	var largo = matriz.length;
	var simbolos=[];
	for (var i=0; i < largo; i++){
		simbolos=[];
		for (var j=0; j < largo; j++){
			if (matriz[i][j] != "-"){
				var indx = simbolos.indexOf(matriz[i][j]);
				if (indx==-1){
					simbolos.push(matriz[i][j]);
				}else{
					console.log("EL automáta no es un AFD -validación x estado- ["+i+"]["+j+"]="+ matriz[i][j]);
					return;
				}
			}	
		}
	}
	console.log("El automáta es un AFD");
}

var cheq_si_efd_por_simbolo = function(){
	var matriz = global.getMatriz();
	var largo = matriz.length;
	var simbolos = global.getSimbolos();
	for (var i=0; i < largo; i++){
		for (var j=0; j < largo; j++){
			if (matriz[i][j] != "-" && matriz[i][j] != "e"){
				//var simbolos = global.getSimbolos();
				var indx = simbolos.indexOf(matriz[i][j]);
				//console.log(indx);

				if (indx==-1){
					console.log("EL automáta no es un AFD -validación x simbolos- ["+i+"]["+j+"]="+ matriz[i][j]);
					return;
				}
			}	
		}
	}
	console.log("El automáta es un AFD");
}

module.exports = {	
	cheq_si_efd_por_estado: cheq_si_efd_por_estado,
	cheq_si_efd_por_simbolo: cheq_si_efd_por_simbolo,
	cheq_si_efd_por_e: cheq_si_efd_por_e,

};
