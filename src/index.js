
var botao = require('botao/botao');
var testDiff5 = {
	b5:5
};
var tela = require('tela/tela');
var screen2 = require('screen2/screen2');

// [todo] split this modules in two parts

var Module = (function(){

	var test = true;

	var module = {
	   getTest: function(){
	   	return test;
	   }
	};

	return module;
})();

var ModuleExt = (function(mod){

	var mod = mod || {};

	var ext = function(){
		return mod.getTest().length + ' ext';
	};

	mod.ext = ext;

	return mod;

})(Module);

