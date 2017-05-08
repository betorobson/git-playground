
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

