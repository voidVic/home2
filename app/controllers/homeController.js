app.controller('homeController', function (appConstants, profileService) {
	var ctrl = this;
	
	ctrl.init = function(){
		profileService.boxes.initializer();
	}
	
	ctrl.init();
	
});