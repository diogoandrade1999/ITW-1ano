var operacao;
function getOperacao() {
	var e = document.getElementById("operacao");
	operacao = e.options[e.selectedIndex].value;
	console.log(operacao);
	}

function calcula() {
	var x = document.getElementById("op1");
	var y = document.getElementById("op2");

	switch(operacao){
		case "+":
			res.value = parseFloat(op1.value) + parseFloat(op2.value); //so é necessario o parseFloat na soma
			break;
		case "-":
			res.value = parseFloat(op1.value) - parseFloat(op2.value);
			break;
		case "*":
			res.value = parseFloat(op1.value) * parseFloat(op2.value);
			break;
		case ":":
			res.value = parseFloat(op1.value) / parseFloat(op2.value);
			break;
		default:
			alert("erro")
	}
}