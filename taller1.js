const readFile = require('./readFile.js');
const global   = require('./global.js');
const matriz   = require('./matriz.js');

readFile.read( function (err, result){
 	// error
 	if (err) {
     	console.log("error:" + err);
     	return;	
    }
    console.log("est: " + global.getNro_estados() );
});

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


var arr_matriz = matriz.crear(estados);
matriz.preparar(arr_matriz);
matriz.llenar(arr_transiciones, arr_matriz);
matriz.ver(arr_matriz);
/*  validar si es un AFD */
//var arr_transi_x_simb;

/*
console.log("arr transi: "+ cant_simbolos.length);
for (i=0; i < cant_simbolos.length; ++i){
	console.log(arr_transi_x_simb[i][0]);
}
*/

//console.log("esta: "+ estados);




