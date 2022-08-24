let input = document.getElementById('input'); 
let btn1 = document.getElementById('button1');
let btn2 = document.getElementById('button2');
let btn3 = document.getElementById('button3');
let result = document.getElementById("result").style.display = "none";

//Encriptar el mensaje
function encrypt() {

    let c1= input.value.replaceAll('e', 'enter');
    let c2= c1.replaceAll('i', 'imes');
    let c3= c2.replaceAll('a' , 'ai');
    let c4= c3.replaceAll('o' , 'ober');
    let c5= c4.replaceAll('u' , 'ufat');
    return(c5);
}

//Desencriptar el mensaje
function decrypt() {

    //let input = 'fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober!';
    
    let c1= input.value.replaceAll('enter', 'e');
    let c2= c1.replaceAll('imes', 'i');
    let c3= c2.replaceAll('ai' , 'a');
    let c4= c3.replaceAll('ober' , 'o');
    let c5= c4.replaceAll('ufat' , 'u');
    return(c5)
}

//Imprimir el resultado en una caja de texto.
function print(text) {

    document.getElementById('result').innerHTML = text;
    document.getElementById('result').style.display = "";
    document.getElementById("muneco").style.display = "none";
    document.getElementById("message1").style.display = "none";
    document.getElementById("message2").style.display = "none";
}

//Botón copiar texto.
function copyResult(){

    let content = document.createElement("input"); //Creo caja de texto temporal
    content.setAttribute("value", document.getElementById('result').innerHTML); //Asigno el valor (result3) a la caja de texto temporal.
    document.body.appendChild(content); //Añado el contenido a la pagina (body)
    content.select(); //Selecciono el texto encriptado o desencriptado
    document.execCommand("copy"); //Copio el texto
    document.body.removeChild(content); // Se elimina la caja de texto temporal.
}

//Ejecucion Boton Encriptar
btn1.addEventListener('click', ()=>{

    if(input.value.length == 0){
        alert("Ingresa texto, sin mayusculas ni acentos");
    }
    else{
        print(encrypt());
    }
});           

//Ejecucion Boton Desencriptar
btn2.addEventListener('click', ()=>{

    if(input.value.length == 0){
        alert("Ingresa texto, sin mayusculas ni acentos.");
    }
    else {
        print(decrypt());
    }
});

//Ejecucion Boton Copiar
btn3.addEventListener('click', ()=>{

    if(input.value.length === 0){
        alert("¡No has ingresado tu mensaje aún!");
    }
    else {
        copyResult();   
        alert("¡Mensaje copiado!");        
    }
});

//Restablece a estado inicial
input.addEventListener('input', function(){
    
    if (input.value.length == 0){

        document.getElementById("result").style.display = "none";
        document.getElementById("muneco").style.display = "";
        document.getElementById("message1").style.display = "";
        document.getElementById("message2").style.display = "";
    }
});

