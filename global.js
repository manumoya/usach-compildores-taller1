var info = {
	nro_estados: 0,
	simbolos:[],
	estado_inicial: 0,
	estados_finales:[],
	transiciones:[]
};

var getNro_estados = function() {
	return info.nro_estados;
}

var setNro_estados = function(param) {
	info.nro_estados = param;
}

var getSimbolos = function() {
	return info.simbolos;
}

var setSimbolos = function(param) {
	info.simbolos= param;
}

var getEstado_inicial = function() {
	return info.estado_inicial;
}

var setEstado_inicial = function(param) {
	info.estado_inicial = param;
}

var getEstado_finales = function() {
	return info.estados_finales;
}

var setEstado_finales  = function(param) {
	info.estados_finales = param;
}

var push_transiciones = function(param) {
	info.transiciones.push(param); 
}

var getTransiciones = function(param) {
	return info.transiciones; 
}

module.exports = {	
	getNro_estados: getNro_estados,
	setNro_estados: setNro_estados,
	getSimbolos: getSimbolos,
	setSimbolos: setSimbolos,
	getEstado_inicial: getEstado_inicial,
	setEstado_inicial: setEstado_inicial,
	getEstado_finales: getEstado_finales,
	setEstado_finales: setEstado_finales,
	push_transiciones: push_transiciones,
	getTransiciones: getTransiciones
};