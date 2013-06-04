//FirstView Component Constructor
function FirstView() {
	//create object instance, a parasitic subclass of Observable
	var f = Ti.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory,'background.png');
	
	var self = Ti.UI.createView({
		backgroundImage:f 
	});
	
	var logo = Ti.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory,'logo.png');
	
	var logoView = Titanium.UI.createImageView({
		image:logo,
		height: 200,
		width: 200,
		top:20
	});
	
	
	
	var label_1 = Ti.UI.createLabel({
		text:String.format('Porton Afuera'),
		height:'auto',
		width:'auto',
		color:'#0082a8',
		font:{fontSize:20},
		top: 280
	});
	
	
	var button_1 = Titanium.UI.createButton({
		title:'Activar',
		height:60,
		width:200,
		top:310
	});
	
	var label_2 = Ti.UI.createLabel({
		text:String.format('Porton Adentro'),
		height:'auto',
		width:'auto',
		color:'#0082a8',
		font:{fontSize:20},
		top: 410
	});
	
	var button_2 = Titanium.UI.createButton({
		title:'Activar',
		width:200,
		height:60,
		top:440
	});
	
	var f = Ti.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory,'logo_talpor.png');
	
	var imageView = Titanium.UI.createImageView({
		image:f,
		height: 200,
		width: 200,
		top:550
	});
	
	self.add(logoView);
	self.add(label_1);
	self.add(button_1);
	self.add(label_2);
	self.add(button_2);
	self.add(imageView)
	
	var xhr = Ti.Network.createHTTPClient({
	    onload: function(e) {
        	alert('FUNCIONA!');        	
    	},
    	onerror: function(e) {
	        Ti.API.debug(e.error);
    	    alert('Network Error');
    	},
    	timeout:5000
	});
	
	button_1.addEventListener("click", function() {
		var url = "http://192.168.1.132:8000/1/";
		xhr.open("GET", url);
		xhr.send();
	});
	
	button_2.addEventListener("click", function() {
		var url = "http://192.168.1.132:8000/2/";
		xhr.open("GET", url);
		xhr.send();
	});		
	
	return self;
}

module.exports = FirstView;
