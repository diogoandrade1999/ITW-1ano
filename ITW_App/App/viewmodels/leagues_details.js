define(['plugins/router', 'durandal/app'], function (router, app) {
	var leagues_details = function () {
		console.log('ViewModel initiated...');
		var item_id = location.hash;
		var id = item_id.split('/')[1];
        console.log('id: ' + id);
		//---Variáveis locais
		var self = this;
		var baseUri = 'http://192.168.160.28/football/api/leagues/'+id;
		console.log(baseUri);
		self.className = 'Leagues Detail';
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
		self.getLeagues = function () {
			console.log('CALL: getLeagues...');
			ajaxHelper(baseUri, 'GET').done(function (data) {
				self.leagues(data);
			});
		};
			//---- initial call
		self.getLeagues();
	};
 	return leagues_details;
});