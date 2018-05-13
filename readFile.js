const fs = require('fs');
const global   = require('./global.js');
const fun_grales = require('./funciones_grales.js');

/*  lee archivo  */
var read = function(callback){

	var cont=1;
	fs.readFileSync('./af.txt').toString().split('\n').forEach(
		function (line) { 
			if (cont == 1){
				global.setNro_estados(line);
			}else if(cont==2){
				var symbolos = fun_grales.almacenar_en_array(line.split(" "));
				global.setSimbolos(symbolos);

			}else if(cont==3){
				global.setEstado_inicial(line);
				
			}else if(cont==4){
				var estados_finales = fun_grales.almacenar_en_array(line.split(" "));
				global.setEstado_finales(estados_finales);
			}else{
				var transicion = fun_grales.getTransicion(line.split(" "));
				global.push_transiciones(transicion);
			}	
		cont++;
	}); 
}
	
module.exports = {	
	read: read
};
