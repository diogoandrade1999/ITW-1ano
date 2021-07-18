define(['plugins/http', 'durandal/app', 'knockout'], function () {
	var players = function () {
		console.log('ViewModel initiated...')
		//---Variáveis locais
		var self = this;
		var baseUri = 'http://192.168.160.28/football/api/players';
        var baseUrit = 'http://192.168.160.28/football/api/players/search?srcStr=';
		self.className = 'Players';
        self.search = ko.observable("");
		self.error = ko.observable();
		self.players = ko.observableArray([]);
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
			console.log('CALL: getPlayersSearch...');
			ajaxHelper(baseUrit +  self.search(), 'GET').done(function (data) {
				self.players(data);
			});
		};
        self.clearPlayers = function () {
            console.log('CALL: getPlayersDelete...');
            self.getPlayers();
            self.search("");
        };
		self.getPlayers = function () {
			console.log('CALL: getPLayers...')
			ajaxHelper(baseUri, 'GET').done(function (data) {
				self.players(data);
			});
		};
			//---- initial call
		self.getPlayers();
		self.getSearch();
	};
	return players;
});