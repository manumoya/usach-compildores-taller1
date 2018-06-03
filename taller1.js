const readFile = require('./readFile.js');
const global   = require('./global.js');
const matriz   = require('./matriz.js');
const autom    = require('./automata.js');
const claus    = require('./clausura.js');
const equiv    = require('./equivalencia.js');
var Queue      = require('./cola.js');
const titulos  = require('./titulos.js');
const fun_grales = require('./funciones_grales.js');


/* lee archivo .txt*/
readFile.read( function (err, result){
 	// error
 	if (err) {
     	console.log("error:" + err);
     	return;	
    }
    console.log("est: " + global.getNro_estados() );
});

/* ver valores leidos de archivo*/
titulos.datos_entrada();
fun_grales.imprimir_datos_entrada();
/*

console.log("Estados : " + estados );
console.log("Simbolos : " +  simbolos);
console.log("Estado inicial : " + global.getEstado_inicial() );
console.log("Estados finales: " + global.getEstado_finales() );
arr_transiciones = global.getTransiciones();

for (var i=0; i < arr_transiciones.length; i++){
		console.log("transicion["+ i+"] " + arr_transiciones[i].orig +" / "+ 
					arr_transiciones[i].simb +" / "+ arr_transiciones[i].final);
}
console.log("\n");
*/

/* llenado de matriz */
titulos.automata_entrada();
matriz.crear();
matriz.preparar();
matriz.llenar();
matriz.ver();
//global.setMatriz(arr_matriz);

/*  validar si es un AFD */
titulos.validar_automata();
autom.cheq_si_efd();

/* convertir en dfd */
titulos.automata_equivalente();
autom.simplificar_simbolos_agrupados();
matriz.ver();

/* identificar clausura */
titulos.matriz_clausura();
claus.definir_matriz_e();
claus.imprimir_matriz();

/* equivalencias */
titulos.matriz_dfd_analisis();
var matriz_clausura = global.getMatriz_clausura();
var simbolos = global.getSimbolos();
//equiv.get_arreglo_transiciones(matriz_clausura[0],0);

//claus.imprimir_matriz();

let queueNewStateAF = new Queue();
let listNewAnalysis = equiv.getTransitionsNewAFD(simbolos,queueNewStateAF,matriz_clausura[0]);

equiv.imprimir_matriz_analisis();



/*
var arrPila =[];
arrPila.push(0);
autom.recorre_efnd(0, arrPila);
*/

