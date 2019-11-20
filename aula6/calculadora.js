var start = true;
var controlo = 1;
var op1 = "";
var op2 = "";
var operacao = "";
var res = document.getElementById("res");

function addNumber(){
	var x = event.target.value;
	if(controlo == 1){
		op1 = op1 + x
	}
	else{
		op2 = op2 + x
	}
	if(start == true){
		res.innerText = "";
		start = false;
		
	}
	res.innerText += x;
}

function addOperation(){
	var x = event.target.value;
	if(operacao == "" && op1 != ""){
		operacao = x;
		res.innerText += x;
		controlo = 2;
	}
	else{
		erro();
	}
}

function clearResult(){
	res.innerText = "0";
	start = true;
	controlo = 1;
	op1 = "";
	op2 = "";
	operacao = "";
}

function calculate(){
	var erro = 0;
	if(controlo == 2){
		switch(operacao){
			case "+":
				op1 = parseInt(op1) + parseInt(op2);
				break;
			case "-":
				op1 = parseInt(op1) - parseInt(op2);
				break;
			case "*":
				op1 = parseInt(op1) * parseInt(op2);
				break;
			case "/":
				if(parseInt(op2) != 0){
					op1 = parseInt(op1) / parseInt(op2);
				}
				else{
					erro = 1;
					erro();
				}
				break;
			default:
				
		}
		if(!erro){
			controlo = 1;
			operacao = "";
			op2 = "";
			res.innerText = op1;
		}
	}	
}

function erro(){
	start = true;
	controlo = 1;
	op1 = "";
	op2 = "";
	operacao = "";
	res.innerText = "Erro!";
}