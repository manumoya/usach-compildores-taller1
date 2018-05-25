const global   = require('./global.js');

var cheq_si_efd = function(){
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
					console.log("EL automáta no es un DFD ["+i+"]["+j+"]="+ matriz[i][j]);
					return;
				}
			}	
		}
	}
	console.log("El automáta es un DFD");
}

module.exports = {	
	cheq_si_efd: cheq_si_efd
};
