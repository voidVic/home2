app.controller("navController", function($timeout, profileService){
	var ctrl = this;
	ctrl.links = profileService.navLinks;
	ctrl.currentNavIndex = null;
	ctrl.navTitle = profileService.navTitle;
	
	
	ctrl.redirectTo = function(index){
		if(ctrl.currentNavIndex == null){
			profileService.boxes.methods.serializeBox();
			ctrl.currentNavIndex = index;
		} else if(index != ctrl.currentNavIndex){
			profileService.boxes.methods.randomizeBox();
			ctrl.currentNavIndex = index;
			$timeout(function(){
				profileService.boxes.methods.serializeBox();
			}, 500);
		} else{
			profileService.boxes.methods.randomizeBox();
			ctrl.currentNavIndex = null;
		}
	}
  
});