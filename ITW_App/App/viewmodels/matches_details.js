define(['plugins/http', 'durandal/app', 'knockout'], function () {
	var matches = function () {
		console.log('ViewModel initiated...')
        var item_id = location.hash;
        var id = item_id.split('/')[1];
		//var id = item_id2.split('/')[1];
		//---Variáveis locais
		var self = this;
		var baseUri = 'http://192.168.160.28/football/api/matches/'+id;
		self.className = 'Matches Details';
		self.error = ko.observable();
		self.matches = ko.observableArray([]);
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
		self.getMatches = function () {
			console.log('CALL: getMatches...')
			ajaxHelper(baseUri, 'GET').done(function (data) {
				self.matches(data);
			});
		};
			//---- initial call
		self.getMatches();
	};
	return matches;
});