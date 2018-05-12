const readFile = require('./readFile.js');
const global   = require('./global.js');

readFile.read( function (err, result){
 	// error
 	if (err) {
     	console.log("error:" + err);
     	return;	
    }
    console.log("est: " + global.getNro_estados() );
});

console.log("estados : " + global.getNro_estados() );
console.log("Simbolos : " + global.getSimbolos() );
console.log("estado inicial : " + global.getEstado_inicial() );
console.log("estados finales: " + global.getEstado_finales() );
arr_transiciones = global.getTransiciones();

for (i=0; i < arr_transiciones.length; ++i){
		console.log("transicion["+ i+"] " + arr_transiciones[i].orig +" / "+ 
					arr_transiciones[i].simb +" / "+ arr_transiciones[i].final);
}



