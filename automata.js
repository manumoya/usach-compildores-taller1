const global = require('./global.js');
const pila = require('./pila.js');

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
    var valor = matriz_ady[posNodoIni][i];
    var nom_nodo=i;
    //var nom_nodo=matriz_ady[i][0];

    //console.log("valor: " + valor);
    //console.log("nom_nodo: " + nom_nodo + " / valor: "+ valor);
    
    //char nom_nodo = matriz_grafo_din[0][i];
    var tiene_ciclo = pila.existe_ciclo(arr_pila,nom_nodo);
    //console.log("ciclo? " + tiene_ciclo);

    if (valor != "-" && !tiene_ciclo){
      console.log("Nombre nodo " + nom_nodo + " / valor nodo: "+  valor); 
      nuevas_rutas.push(i);
      cont_ruta++;
    }

  } 	

}

module.exports = {	
	cheq_si_efd_por_estado: cheq_si_efd_por_estado,
	cheq_si_efd_por_simbolo: cheq_si_efd_por_simbolo,
	recorre_efnd: recorre_efnd
};
