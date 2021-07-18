define(['plugins/http', 'durandal/app', 'knockout'], function () {
	var teams_details = function () {
		console.log('ViewModel initiated...');
		var item_id = location.hash;
		var id1 = item_id.split('/')[1];
		var id2 = item_id.split('/')[2];
		//---Variáveis locais
		var self = this;
		var baseUril = 'http://192.168.160.28/football/api/teams/'+id2;
		var baseUri = 'http://192.168.160.28/football/api/teams/seasons/'+id2;
        self.itemid = id1;
        self.className = 'Team Season';
		self.error = ko.observable();
		self.teams = ko.observableArray([]);
		self.team = ko.observableArray([]);
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
		self.getTeams = function () {
			console.log('CALL: getTeams...');
			self.className = 'Team Season';
			ajaxHelper(baseUri, 'GET').done(function (data) {
				self.teams(data);
			});
			ajaxHelper(baseUril, 'GET').done(function (data) {
				self.team(data);
			});
		};
			//---- initial call
		self.getTeams();
	};
	return teams_details;
});