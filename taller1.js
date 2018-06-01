const readFile = require('./readFile.js');
const global   = require('./global.js');
const matriz   = require('./matriz.js');
const autom    = require('./automata.js');

/* llear archivo .txt*/
readFile.read( function (err, result){
 	// error
 	if (err) {
     	console.log("error:" + err);
     	return;	
    }
    console.log("est: " + global.getNro_estados() );
});

/* ver valores leidos de archivo*/
var estados = global.getNro_estados(); 
var simbolos = global.getSimbolos();

console.log("estados : " + estados );
console.log("Simbolos : " +  simbolos);
console.log("estado inicial : " + global.getEstado_inicial() );
console.log("estados finales: " + global.getEstado_finales() );
arr_transiciones = global.getTransiciones();

for (var i=0; i < arr_transiciones.length; i++){
		console.log("transicion["+ i+"] " + arr_transiciones[i].orig +" / "+ 
					arr_transiciones[i].simb +" / "+ arr_transiciones[i].final);
}
console.log("\n");

/* llenado de matriz */
var arr_matriz = matriz.crear(estados);
matriz.preparar(arr_matriz);
matriz.llenar(arr_transiciones, arr_matriz);
matriz.ver(arr_matriz);
global.setMatriz(arr_matriz);

/*  validar si es un AFD */
autom.cheq_si_efd_por_estado();
autom.cheq_si_efd_por_simbolo();


