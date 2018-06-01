const global = require('./global.js');

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
					console.log("EL automáta no es un DFD -validación x estado- ["+i+"]["+j+"]="+ matriz[i][j]);
					return;
				}
			}	
		}
	}
	console.log("El automáta es un DFD");
}


var cheq_si_efd_por_simbolo = function(){
	var matriz = global.getMatriz();
	var largo = matriz.length;
	var simbolos = global.getSimbolos();
	for (var i=0; i < largo; i++){
		for (var j=0; j < largo; j++){
			if (matriz[i][j] != "-"){

				var simbolos = global.getSimbolos();
				for (var k=0; k < simbolos.length; k++){
					console.log("EL autom "+ simbolos[k]);
				}

				if (matriz[i][j]!=simbolos[k]))

				/*
				var indx = simbolos.indexOf(matriz[i][j]);
				if (indx==-1){
					simbolos.push(matriz[i][j]);
				}else{
					console.log("EL automáta no es un DFD -validación x estado- ["+i+"]["+j+"]="+ matriz[i][j]);
					return;
				}
				*/
			}	
		}
	}
	console.log("El automáta es un DFD");
}

module.exports = {	
	cheq_si_efd_por_estado: cheq_si_efd_por_estado,
	cheq_si_efd_por_simbolo: cheq_si_efd_por_simbolo
};
