//--- Variaveis globais

/*EXTRA

var numArray =[];
var userArray =[];

window.onload = function() {
    random();
};

function random() {
    numArray=[];

    hide();

    for (i = 0; i <5; i++) {
        numArray.push(Math.floor(Math.random() * (21 - 0) + 0));
    }

    for (i = 1; i <=5; i++) {
        if(document.getElementById(XXX)){
            document.getElementById(XXX).value ="";
        }
    }
}

function hide(id){

    }
} */






function submeter(){

}

var parar = false;
var k1 = 0;
var k2 = 0;
var k3 = 0;

function peek(id){
    var controlo = document.getElementById(id).innerHTML;

    if (controlo == "X") {
        document.getElementById('div' + id).style.background="url('peek.jpe')";
        document.getElementById(id).innerHTML=Math.floor(Math.random()*8+1);
    }

    var v1 =document.getElementById('q1').innerHTML;
    var v2 =document.getElementById('q2').innerHTML;
    var v3 =document.getElementById('q3').innerHTML;
    var v4 =document.getElementById('q4').innerHTML;
    var v5 =document.getElementById('q5').innerHTML;

    while (v1 != "X" && v2 != "X" && v3 != "X" && v4 != "X" && v5 != "X" && parar == false) {
        if (v1 == v2) {
            k1++;
        }
        if (v1 == v3) {
            k1++;
        }
        if (v1 == v4) {
            k1++;
        }    
        if (v1 == v5) {
            k1++;
        }
        if (v2 == v3) {
            k2++;
        }
        if (v2 == v4) {
            k2++;
        }
        if (v2 == v5) {
            k2++;
        }
        if (v3 == v4) {
            k3++;
        }
        if (v3 == v5) {
            k3++;
        }

        if (k1 >= 2 || k2 >= 2 || k3 == 2) {
            alert("Ganhaste");
            parar = true;
        }
        else {
            alert("perdeste");
            parar = true;
        }
        console.log(k1);
        console.log(k2);
        console.log(k3);
    }
}

var i = 1;

function novo(id){
    while (i < 6){
        document.getElementById('divq' + i).style.background="url('question.jpg')";
        document.getElementById('q' + i).innerHTML="X";
        i++;
    }
    parar = false;
    k1 = 0;
    k2 = 0;
    k3 = 0;
    i =  1;
}