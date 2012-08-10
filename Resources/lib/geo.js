Ti.Geolocation.preferredProvider = "gps";
Ti.Geolocation.purpose = "GPS demo";

exports.get = function(_cb){
	//Agregando geolocalizacion
	if (Titanium.Geolocation.locationServicesEnabled){
		if (Titanium.Platform.name != 'android') {
			var authorization = Titanium.Geolocation.locationServicesAuthorization;
			if (authorization == Titanium.Geolocation.AUTHORIZATION_DENIED) {
				Ti.UI.createAlertDialog({
					title:'TiBountyHunter',
					message:'You have disallowed Titanium from running geolocation services.'
				}).show();
			}
			else if (authorization == Titanium.Geolocation.AUTHORIZATION_RESTRICTED) {
				Ti.UI.createAlertDialog({
					title:'TiBountyHunter',
					message:'Your system has disallowed Titanium from running geolocation services.'
				}).show();
			}
		}else{
			Ti.Geolocation.ACCURACY_BEST;
		}
		Titanium.Geolocation.getCurrentPosition(function(e){
			_cb({latidude: e.coords.latitude, longitude: e.coords.longitude, altitude: e.coords.altitude});
		});
	}
}
