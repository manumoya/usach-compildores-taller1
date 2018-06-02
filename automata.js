const global = require('./global.js');
const pila = require('./pila.js');


var cheq_si_efd_por_e = function(){
	var matriz = global.getMatriz();
	var largo = matriz.length;
	//var simbolos=[];
	for (var i=0; i < largo; i++){
		//simbolos=[];
		for (var j=0; j < largo; j++){
			if (matriz[i][j] != "-" && matriz[i][j] =="e"){
					console.log("EL automáta no es un AFD, es un AFND-e ["+i+"]["+j+"]="+ matriz[i][j]);
					return;
			}	
		}
	}
}

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
					console.log("EL automáta no es un AFD -validación x estado- ["+i+"]["+j+"]="+ matriz[i][j]);
					return;
				}
			}	
		}
	}
	console.log("El automáta es un AFD");
}

var cheq_si_efd_por_simbolo = function(){
	var matriz = global.getMatriz();
	var largo = matriz.length;
	var simbolos = global.getSimbolos();
	for (var i=0; i < largo; i++){
		for (var j=0; j < largo; j++){
			if (matriz[i][j] != "-" && matriz[i][j] != "e"){
				//var simbolos = global.getSimbolos();
				var indx = simbolos.indexOf(matriz[i][j]);
				//console.log(indx);

				if (indx==-1){
					console.log("EL automáta no es un AFD -validación x simbolos- ["+i+"]["+j+"]="+ matriz[i][j]);
					return;
				}
			}	
		}
	}
	console.log("El automáta es un AFD");
}



var recorre_efnd  = function(posNodoIni, arr_pila){
   //void recorre_rutas(int posNodoIni, Pila *pila){
  //int nuevas_rutas[5];

  var largo_rutas = global.getNro_estados();
  var largo_matriz =global.getNro_estados();
  var matriz_ady = global.getMatriz();
  //int *nuevas_rutas;
  nuevas_rutas = []; //(int*)malloc(sizeof(int*)*largo_matriz);

  //resetear_rutas(nuevas_rutas);
  
  console.log("nodo ini pos %d ", posNodoIni);
  
  /* guarda todas las adyacencias del nodo*/
  var cont_ruta=0;
  for (var i=0; i<largo_matriz; i++){
    var nom_nodo=i;
    var valor = matriz_ady[posNodoIni][i];
    
    
    //console.log("nom_nodo: " + nom_nodo + " / valor: "+ valor);
    
   
    var tiene_ciclo = pila.existe_ciclo(arr_pila,nom_nodo);
    //console.log("ciclo? " + tiene_ciclo);

    if (valor != "-" && !tiene_ciclo){
      console.log("Nombre nodo " + nom_nodo + " / valor nodo: "+  valor); 
      nuevas_rutas.push(nom_nodo);
      cont_ruta++;
    }

    
  } 

  if (cont_ruta==0){ // no tien adyacencia
  	console.log("no adyacencia");
  	arr_pila.pop();
  }else{
  	console.log("recursividad");

  	/*for (var i=0; i<nuevas_rutas.length; i++){
  		console.log(nuevas_rutas[i]);
  	}*/
  	
  	for (var i=0; i<nuevas_rutas.length; i++){
  		//var nom_nodo=i;
  		//var valor = matriz_ady[posNodoIni][nom_nuevo_nodo];
  		var nom_nuevo_nodo = nuevas_rutas[i];
  		
  		console.log("Nombre nodo " + nom_nuevo_nodo ); 

  		console.log( nom_nuevo_nodo +" != "+ arr_pila[0]); 
  		console.log( "largo pila: "  + arr_pila.length ); 

  		if (nom_nuevo_nodo != arr_pila[0]){
    		arr_pila.push(nom_nuevo_nodo);
    		recorre_efnd(nom_nuevo_nodo, arr_pila);
    	}

  	}
  	arr_pila.pop();
  	
  }	

}

module.exports = {	
	cheq_si_efd_por_estado: cheq_si_efd_por_estado,
	cheq_si_efd_por_simbolo: cheq_si_efd_por_simbolo,
	cheq_si_efd_por_e: cheq_si_efd_por_e,
	recorre_efnd: recorre_efnd
};
