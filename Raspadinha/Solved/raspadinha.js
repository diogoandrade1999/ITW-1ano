//--- Variaveis globais
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
        if(document.getElementById("n"+i)){
            document.getElementById("n"+i).value ="";
        }
    }
}

function hide(id){
    for (i = 1; i <=5; i++) {
        id="q"+i;
        document.getElementById(id).style.fontSize = "50px";
        document.getElementById(id).innerText = "X";
        document.getElementById("div"+id).style.backgroundImage =  "url('question.jpg')";
    }
}


function submit(){
    userArray=[];
    for (i = 1; i <=5; i++) {
        if(document.getElementById("n"+i)){
            //alert(document.getElementById("n"+i).value);
            userArray.push(document.getElementById("n"+i).value);
        }
    }
    //Verificar  os inputs
    iguais=0;
    userArray = userArray.sort();
    numArray = numArray.sort();


    if(userArray.length != numArray.length)
        iguais=1

    for(var i = userArray.length; i--;) {
        if(userArray[i] != numArray[i])
            iguais=1
    }

    if (iguais == 0)
        alert("Acertaste!")
    else {
        alert("Erraste!")
    }

}


function peek(id){
    //alert(id);
    n=id[1];
    document.getElementById(id).style.fontSize = "35px";
    document.getElementById(id).innerText = numArray[n-1];
    document.getElementById("div"+id).style.backgroundImage = "url('peek.jpe')";
}
