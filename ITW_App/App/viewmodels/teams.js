define(['plugins/http', 'durandal/app', 'knockout'], function () {
	var teams = function () {
		console.log('ViewModel initiated...');
		//---Variáveis locais
		var self = this;
		var baseUri = 'http://192.168.160.28/football/api/teams';
        var baseUrit = 'http://192.168.160.28/football/api/teams/search?srcStr=';
		self.className = 'Teams';
        self.search = ko.observable("");
		self.error = ko.observable();
		self.teams = ko.observableArray([]);
        self.searchGood = ko.computed(function () {
            return (self.search().length < 3)
        }, self);
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
		self.getSearch = function () {
			console.log('CALL: getTeamsSearch...');
			ajaxHelper(baseUrit +  self.search(), 'GET').done(function (data) {
				self.teams(data);
			});
		};
        self.clearTeams = function () {
            console.log('CALL: getTeamsDelete...');
            self.getTeams();
            self.search("");
        };
		self.getTeams = function () {
			console.log('CALL: getTeams...');
			ajaxHelper(baseUri, 'GET').done(function (data) {
				self.teams(data);
			});
		};
			//---- initial call
		self.getTeams();
		self.getSearch();
	};
	return teams;
});