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
	
	/*var cont=1;
	fs.readFile('af.txt', 'utf-8', function(err, data){
		if(err) {
	    	console.log('error en lectura de archivo: ', err);
		} else {

			 for (i=0; i < data.length; ++i)
        		console.log(data[i]); 

        	
						
			
		}
		cont=cont+1;
	}); */
//}

module.exports = {	
	read: read
};
