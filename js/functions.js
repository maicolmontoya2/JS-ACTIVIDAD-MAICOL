// LAS FUNCIONES DEBEN TENR UN PARENNTESIS JUNDO AL NOMBRE //
function saludo(){
    var S;
    var R;
    var D;
    var M;
    A = parseInt(prompt("ingrese primer numero"));
    B = parseInt(prompt("ingrese segundo numero"));
    M = A * B;
    S = A + B;
    R = A - B;
    D = A / B;
    alert(" la suma es" + S)
    alert(" la multiplicacion es" + M)
    alert(" la division es" + D)
    alert(" la resta es" + R)
}
function cuadrado(){
    var A;
    var Mul;

    A = parseInt(prompt("ingrese numero"))
    Mul = A * A;
    alert("el cuadrado es" + Mul)
}
function triangulo(){
    var B;
    var H;
    var igual;
    
    B = parseInt(prompt("ingrese la base"))
    H = parseInt(prompt("ingrese la altura"))

    igual = (B * H)/2
    alert("el area del triangulo es" + igual)
}
function pulgadas(){
    var P;
    var C;
    var K;
    
    P = parseInt(prompt("ingrese pulgadas"))
    C = P * 2.54
    K = P * (1 / 39.370) * (1 / 1000)
    alert("las pulgadas en centimetros es" + C)
    alert("las pulgadas en kilometros es" + K)


}
    function edad(){
        var edad;
        var total;
        edad = parseInt(prompt("ingrese su edad"));
        edad = 2022-edad ;
        alert(" el usuario nacieo en el año  " + edad);
   
}
   function promedio(){
    var n1;
    var n2;
    var n3;
    var n4;
    var n5;
    var n6;
    var n7;
    var suma;
    

    n1 = parseInt(prompt("ingrese nota 1"))
    n2 = parseInt(prompt("ingrese nota 2"))
    n3 = parseInt(prompt("ingrese nota 3"))
    n4 = parseInt(prompt("ingrese nota 4"))
    n5 = parseInt(prompt("ingrese nota 5"))
    n6 = parseInt(prompt("ingrese nota 6"))
    n7 = parseInt(prompt("ingrese nota 7"))
    suma = (n1+n2+n3+n4+n5+n6+n7)/7
    
    
    if (suma > "3") {
        alert ("el estudiante aprobo" + suma);
    }
    else{
        if(suma < "3"){
            alert("el estudiante reprobo" + suma );
        }
    }

   }
   function banco(){
    var inver;
    var ano;
    var gana;
    inver = parseInt(prompt("ingrese el valor a invertir"));
    ano = parseInt(prompt("ingrese los años"));
    gana = inver * 0.008
    ano1 = ano * 12
    total1 = ano1 * gana
    total2 = total1 + inver

    alert("el valor de sus ganancias es de: " + total1 );
    alert ("el total de su inversion y sus ganacias son de: " + total2 );
}
 function serviciomilitar(){
    alert("algoritmo para saber si soy apto para prestar el servicio militar abligatorio");
    var edad = parseInt(prompt("por favor ingrese su edad"));
    var genero = prompt("por favor ingresar masculino o femenino");

    if(genero =="femenino") {
        alert("no eres apta para el smo");
    }else{
        if (edad>17 && edad<25) {
            alert("eres apto para prestar el servicio militar");
        }else{
            alert("no eres apto por edad")
        }
        
    }
 }
 function fruteria(){
    var Kilos;
    var div;
    var div2;
    var div3;
   
 
    alert("algoritmo para saber cuanto descuento recibe")

    var Kilos = parseInt(prompt("ingrese numero de kilos"))
    div = (10/100)*4500;
    
    div2 =(15/100)*4500;
    
    div3 =(20/100)*4500;
    
    if (Kilos <3){
        alert("no se le da descuento");
    }else{
        if(Kilos >2 && Kilos <6){
            alert("Recibe un descuento de 10% a su compra se le descuanta: " + div);
        }if(Kilos >5 && Kilos <11){
            alert("Recibe un descuento de 15% a su compra se le descuanta: " + div2);
        }if(Kilos>10){
            alert("recibe un descuento de 20% a su compra se le descuanta: " + div3)
        }

    }

 }

 function obrero(){
    var horas;
    var Hora;
    var horaextra;
    var horaextra1;
    var horaextra2;

    alert("Algoritmo para saber cuanto se le paga a la semana a un obrero")
    var horas = parseInt(prompt("ingrese horas trabajadas"))
    Hora = horas*10000;
    horaextra = (horas*20000)-400000;
   

    if(horas <41){
        alert("su paga por las horas trabajadas es : " + Hora );
    }else{
        if(horaextra>40){
            alert("su paga con horas extra es: " + horaextra);
        }
    }

 }

 function suma(){
    var A;
    var B;
    var S;
    A = parseInt(prompt("ingrese valo1 "));
    B = parseInt(prompt("ingrese valor2 "));
    S = A + B ;
    alert(" la suma es" + S)
    
}

