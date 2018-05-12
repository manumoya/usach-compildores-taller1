
/* almacenar valores en un array*/
var almacenar_en_array = function(valores){
	var arr = [];
	for (i=0; i < valores.length; ++i){
		arr.push(valores[i]);
	}
	return arr;
}	

/* preparar las transiciones */
var getTransicion = function(valores){
	var orig=0, simb=0, finall=0;
	for (i=0; i < valores.length; ++i){
		if (i==0){
			orig=valores[i];
		}if (i==1){
			simb=valores[i];
		}if (i==2){
			finall=valores[i];
		}
	
	}

	var transiciones = {
		"orig": orig, 
		"simb": simb, 
		"final": finall
	};
	
	return(transiciones);	
}	

module.exports = {	
	almacenar_en_array: almacenar_en_array,
	getTransicion: getTransicion
};