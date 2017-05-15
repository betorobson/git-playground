
(function(){

	var name = 'John Due';

	var init = function(){
		console.log('tela.js ' + getName());
	};

	var getName = function(){
		return name;
	};

	var tela = {
		init: init,
		name: name
	};

	window.tela = tela;

})();
