//--- Variaveis globais
var numArray =[];
var starArray = [];

//dar reset aos radios e às checkboxes
window.onload = function() {
       $('input[type="checkbox"]:checked').prop('checked',false);
       for (i = 2; i <=12; i++) {
           document.getElementById('stars_' + i).checked = false;
       }
       for (i = 5; i <=11; i++) {
           document.getElementById('numbers_' + i).checked = false;
       }
       document.getElementById("botao").disabled = true;


};

function checkStar(event){

    if(!starArray.includes(event.target.name)){
        starArray.push(event.target.name);
    }
    //Remover elementos do array
    else{
        n = starArray.indexOf(event.target.name);
        starArray.splice( n, 1 );
    }

    idMultiplas = "stars_" + starArray.length ;
    //alert(idMultiplas);

    if( document.getElementById(idMultiplas) ){
        document.getElementById(idMultiplas).checked = true;
    }
    //alert(starArray);
    checkSubmit();

}

function checkNumber(event) {

    //Adicionar elementos ao array
    if(!numArray.includes(event.target.name)){
        numArray.push(event.target.name);
    }
    //Remover elementos do array
    else{
        n = numArray.indexOf(event.target.name);
        numArray.splice( n, 1 );
    }

    idMultiplas = "numbers_" + numArray.length ;
    //alert(idMultiplas);

    if( document.getElementById(idMultiplas) ){
        document.getElementById(idMultiplas).checked = true;
    }
    //alert(numArray);
    checkSubmit();
}

function checkSubmit(){
    if(numArray.length >=5 &&  starArray.length >=2)
        document.getElementById("botao").disabled = false;
}
