/**
 * Contiene todas las funciones para la aplicacion Apache Cordova
 */
function CofrePassword(){
	this.radioLongitudPassword = $("#divForm input[name='longitud']");
	this.divPassword = $("#formPassword");
	this.buttonGenerarPassword = $("#buttonGenerarPassword");
	this.textPassword = $("#textPassword");
}

CofrePassword.prototype.OCHO = -8;
CofrePassword.prototype.ONCE = -11;


CofrePassword.prototype.init = function(){
	this.events();
	this.divPassword.hide();
}

/**
 * Generar password Ramdom
 */
CofrePassword.prototype.generarPassword = function(longitud){
	return Math.random().toString(36).slice(longitud);
}

/**
 * Inicia eventos
 */
CofrePassword.prototype.events = function(){
	var self = this;
	this.buttonGenerarPassword.click(function(){
		self.isValidLongitud();
	});
	
	this.radioLongitudPassword.click(function(){
		self.radioLongitudPassword.valor = $("#divForm input[name='longitud']:checked").val();
		self.divPassword.hide();
	});
}

/**
 * Valida que se haya selecionado la longitud y sea correcta
 */
CofrePassword.prototype.isValidLongitud = function(){
	if(this.radioLongitudPassword.valor){
		if(this.radioLongitudPassword.valor == this.OCHO){
			this.textPassword.val(this.generarPassword(this.OCHO));
			this.divPassword.show();
		}else if(this.radioLongitudPassword.valor == this.ONCE){
			this.textPassword.val(this.generarPassword(this.ONCE));
			this.divPassword.show();
		}else{
			this.msj("Longitud Incorrecta");
		}
	}else{
		this.msj("Longitud Incorrecta");
	}
}

CofrePassword.prototype.msj = function(msj){
	alert(msj);
}