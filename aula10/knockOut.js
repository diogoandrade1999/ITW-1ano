$(document).ready(function(){
	function MyViewModel() {
		var self = this;
		self.tmp = null;
		self.participants = ko.observableArray();
		//self.hasParticipants = ko.computed(function (), self);
		//self.createParticipant = function ();
		//self.readParticipant = function (participant);
		self.readParticipants = function(){
			console.log('init');
			self.participants([
			{'name': 'Noé Elisabete Ferreiro', 'email' : '', 'address' : '', 'birthDate' : '', 'sex' : 'Male', 'course' : {'id' : '', 'name' : ''}},
			{'name': 'Marta Matias Lucas', 'email' : 'marta.lucas@teste.com', 'address' : '', 'birthDate' : '', 'sex' : '', 'course' : {'id' : '', 'name' : ''} },
			{ 'name': 'Ezequiel Augusto Melo', 'email': '', 'address': 'Rua de Cima, n.º 8\nAveiro\nPORTUGAL', 'birthDate': '1998/11/17', 'sex': 'Male', 'course': { 'id': '', 'name': '' } },
			{'name': 'Albino Nico Armando', 'email' : '', 'address' : '', 'birthDate' : '', 'sex' : '', 'course' : {'id' : '', 'name' : ''} },
			{'name': 'Alexandra Eufêmia Torres', 'email' : '', 'address' : '', 'birthDate' : '', 'sex' : '', 'course' : {'id' : '', 'name' : ''} }
			]);	
			self.participants.sort(
				function(left, right){
					return left.name == right.name ? 0 : (left.name < right.name ? -1 : 1)
				});
		};
		//self.updateParticipant = function (participant)
		self.deleteParticipants = function(){
			console.log('deleteParticipants');
			self.participants.removeAll();
		};
		//self.deleteParticipant = function (participant)
		}
	ko.applyBindings(new MyViewModel());
});