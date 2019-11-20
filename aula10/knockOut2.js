$(document).ready(function(){
	function MyViewModel() {
		this.participants = ko.observableArray();
		this.readParticipants = function(){
			console.log('init');
			this.participants([
			{'name': 'Noé Elisabete Ferreiro', 'email' : '', 'address' : '', 'birthDate' : '', 'sex' : 'Male', 'course' : {'id' : '', 'name' : ''}},
			{'name': 'Marta Matias Lucas', 'email' : 'marta.lucas@teste.com', 'address' : '', 'birthDate' : '', 'sex' : '', 'course' : {'id' : '', 'name' : ''} },
			{ 'name': 'Ezequiel Augusto Melo', 'email': '', 'address': 'Rua de Cima, n.º 8\nAveiro\nPORTUGAL', 'birthDate': '1998/11/17', 'sex': 'Male', 'course': { 'id': '', 'name': '' } },
			{'name': 'Albino Nico Armando', 'email' : '', 'address' : '', 'birthDate' : '', 'sex' : '', 'course' : {'id' : '', 'name' : ''} },
			{'name': 'Alexandra Eufêmia Torres', 'email' : '', 'address' : '', 'birthDate' : '', 'sex' : '', 'course' : {'id' : '', 'name' : ''} }
			]);	
			this.participants.sort(
				function(left, right){
					return left.name == right.name ? 0 : (left.name < right.name ? -1 : 1)
				});
		};
		//self.updateParticipant = function (participant)
		this.deleteParticipants = function(){
			console.log('deleteParticipants');
			this.participants.removeAll();
		};
		//self.deleteParticipant = function (participant)
		}
	ko.applyBindings(new MyViewModel());
});