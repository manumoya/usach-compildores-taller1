const global = require('./global.js');

/*
var getCompareArrays = function(arr1,arr2){
    return arr1.length === arr2.length && !arr1.some((v) => arr2.indexOf(v) < 0) && !arr2.some((v) => arr1.indexOf(v) < 0)
}

let validateNewStateWithSimbolExists = function (listNewAnalysis,listNewStateWithSymbol) {

    listNewAnalysis.forEach(element => {
        
        areEquals = getCompareArrays(element[2],listNewStateWithSymbol);
        
        if (areEquals) {
            return element[3];
        }
    });
    return -1;
}

let getListClausuraNewState = function (listNewAnalysis,state) {

    listNewAnalysis.forEach(element => {
        if ( element[3] == state ) {
            return element[2];
        }
    });
    
}

let getTransitionsNewAFD =  function(Alph,queueNewStateAF){

    let listNewAnalysis = []
    let maxState = 0;

    while (queueNewStateAF.length>0) {
        
        let currentState = queueNewStateAF[0	];
        
        Alph.forEach(element => {
            
            // Element es la letra del alfabeto que se evaluará 
            symbol = element;
            
            // Lista de todos los estados de la clausura-transición entre el estado actual (currentState) y el simbolo
            
            //let listNewStateWithSymbol = funcion(listNewAnalysis,symbol); // Aqui poner la función que entrega clausura del estado con el simbolo
            	

            let listNewStateWithSymbol = get_arreglo_transiciones(listNewAnalysis,symbol); 
            


            // Ordena el listado obtenido para facilitar la comparasión
            listNewStateWithSymbol.sort();

            existsInListAnalysis = validateNewStateWithSimbolExists(listNewAnalysis,listNewStateWithSymbol);

            // Si no encontró otra lista igual
            if ( existsInListAnalysis == -1 ) {
                maxState++;
                listNewAnalysis.push([currentState,symbol,listNewStateWithSymbol,maxState]);
            // Si lo encontró, agrega el elemento agregado
            }else{
                listNewAnalysis.push([currentState,symbol,listNewStateWithSymbol,existsInListAnalysis]);
            }

        });

        // Cuando se termina de analizar el nuevo estado con todos los simbolos del alfabeto, se saca de la cola
        queueNewStateAF.remove();

    }
    
    return listNewAnalysis;

};
*/



/*
listNewAnalysis.forEach(element => {
    console.log(element.toString)
});
*/


/* =============  */

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
	//getTransitionsNewAFD: getTransitionsNewAFD
};