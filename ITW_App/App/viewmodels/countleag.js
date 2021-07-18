define(['plugins/http', 'durandal/app', 'knockout'], function () {
	var countriesleagues = function () {
		console.log('ViewModel initiated...');
		//---Variáveis locais
		var self = this;
		var baseUril = 'http://192.168.160.28/football/api/leagues';
		self.className = 'Countries and Leagues';
        self.classNamea = 'Countries';
		self.error = ko.observable();
		self.leagues = ko.observableArray([]);
		//--- Internal functions
		function ajaxHelper(uri, method, data) {
			self.error(''); // Clear error message
			return $.ajax({
				type: method,
				url: uri,
				dataType: 'json',
				contentType: 'application/json',
				data: data ? JSON.stringify(data) : null,
				error: function (jqXHR, textStatus, errorThrown) {
					console.log("AJAX Call[" + uri + "] Fail...");
					self.error(errorThrown);
				}
			})
		}
		//--- Externel functions (accessible outside)
		self.getCountries_Leagues = function () {
			console.log('CALL: getCountries_Leagues...');
			ajaxHelper(baseUril, 'GET').done(function (data) {
				self.leagues(data);
			});
		};
        modalWillWork = function () {
            console.log("Maps");
            var targetCountry = event.target.name;
            console.log(targetCountry);
            document.getElementById("map").src = "https://www.google.com/maps/embed/v1/place?key=AIzaSyDn64Phg73bWoCqVfO_ZK5JW1SZKVHeNis&q=" + targetCountry;
        };
			//---- initial call
		self.getCountries_Leagues();
	};
	return countriesleagues;
});