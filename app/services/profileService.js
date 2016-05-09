
app.factory('profileService', function(appConstants){
	var profileService = {};

	profileService.navLinks = [
		{name: "About", url: "/about"},
		{name: "About4", url: "/about"},
		{name: "About3", url: "/about"},
		{name: "About2", url: "/about"},
		{name: "About1", url: "/about"},
	];
	profileService.navTitle = "Some Random text";
	
	profileService.boxes = {
		methods: {
	    renderBox : function(){
	      for(var i = 0 ; i < dom.xBox ; i++){
	        for(var j = 0 ; j < dom.yBox ; j++){
	          var box = document.createElement('DIV');
	          box.className = 'box';
	          dom.cont.appendChild(box);
	          dom.boxArr.push(box);
	        }
	      }
	      mt.randomizeBox();
	    },
	    
	    randomizeBox: function(){
	    	for(var i = 0 ; i < dom.xBox*dom.yBox ; i++){
	      	dom.boxArr[i].style.left = mt.random(dom.xLow, dom.xUp) + 'px';
	      	dom.boxArr[i].style.top = mt.random(dom.yLow, dom.yUp) + 'px';
	      	dom.boxArr[i].style.transform = 'rotate('+ mt.random(0, 90) +'deg)';
	      	dom.boxArr[i].className = 'box';
	      }
	    },
	    
	    random : function(l, u){
	    	return Math.random() * u + l;
	    },

	    serializeBox: function(){
		    for( var i = 0 ; i < dom.xBox ; i++){
		        for( var j = 0 ; j < dom.yBox ; j++){
		          dom.boxArr[(i*dom.yBox) + j].style.left = dom.xLow + ( j * dom.blkSize ) + 'px';
		          dom.boxArr[(i*dom.yBox) + j].style.top = dom.yLow + ( i * dom.blkSize ) + 'px';
		          dom.boxArr[(i*dom.yBox) + j].style.transform = 'rotate(0deg)';
		          dom.boxArr[(i*dom.yBox) + j].className = 'box merged-box';
		        }
		    }
	    }
	  
	  },
	  events: function(){
	  },
	  initializer: function(){

		  dom.xBox = appConstants.xBox;
		  dom.yBox = appConstants.yBox;
		  dom.xLow = appConstants.xLow;
		  dom.xUp = appConstants.xUp;
		  dom.yLow = appConstants.yLow;
		  dom.yUp = appConstants.yUp;
		  dom.blkSize = appConstants.blkSize;
		  dom.boxArr = [];
		  dom.switchingDelay = appConstants.switchingDelay;
		  dom.currentNav = null;
		  dom.currentNavSpan = null;
		  dom.cont = document.getElementsByClassName('home-container')[0];
		  dom.navCont = document.getElementById('navContent');

		  mt.renderBox();
	  },
	  doms: {
		  xBox: appConstants.xBox,
		  yBox: appConstants.yBox,
		  xLow: appConstants.xLow,
		  xUp: appConstants.xUp,
		  yLow: appConstants.yLow,
		  yUp: appConstants.yUp,
		  blkSize: appConstants.blkSize,
		  boxArr: [],
		  switchingDelay: appConstants.switchingDelay,
		  currentNav: null,
		  currentNavSpan: null,
		  cont: document.getElementsByClassName('home-container')[0],
		  navCont: document.getElementById('navContent')
	  }
	};
	
	var mt = profileService.boxes.methods;
	var dom = profileService.boxes.doms;

	return profileService;
});
