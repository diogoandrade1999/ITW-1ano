define(['plugins/http', 'durandal/app', 'knockout'], function () {
	var players_details = function () {
		console.log('ViewModel initiated...');
		//---Variáveis locais
		var item_id = location.hash;
		var id = item_id.split('/')[1];
        var id2 = item_id.split('/')[2];
		var self = this;
		var baseUri = 'http://192.168.160.28/football/api/players/'+id2;
		self.error = ko.observable();
		self.player = ko.observableArray([]);
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
		self.getPlayer = function () {
			console.log('CALL: getPLayer...');
			ajaxHelper(baseUri, 'GET').done(function (data) {
				self.player(data);
			});
		};
			//---- initial call
		self.getPlayer();
	};
	return players_details;
});