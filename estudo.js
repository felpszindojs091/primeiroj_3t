console.log("Console: Alô Mundo...");
alert("Alerta:KD minha nota do 2 trimestre?...");

let tabuada = 2

function meCHAME(){
document.write("tabuada do felps" +tabuada + "<br>")
    document.write(tabuada + " x 1 = " + (tabuada*1) +"<br>")
    document.write(tabuada + " x 2 = " + (tabuada*2) + "<br>")
    document.write(tabuada + " x 3 = " + (tabuada*3) + "<br>")
    document.write(tabuada + " x 4 = " + (tabuada*4) + "<br>")
    document.write(tabuada + " x 5 = " + (tabuada*5) + "<br>")
    document.write(tabuada + " x 6 = " + (tabuada*6) + "<br>")
    document.write(tabuada + " x 7 = " + (tabuada*7) + "<br>")
    document.write(tabuada + " x 8 = " + (tabuada*8) + "<br>")
    document.write(tabuada + " x 9 = " + (tabuada*9) + "<br>")
    document.write(tabuada + " x 10 = " + (tabuada*10) + "<br>")
}


function minhaTabuada(){
for(var i=0 ; i <= 10; i++){
    for(var j = 1; j <=10; j++){
    document.write(i + " x " + j + " = " + (j*i) + "<br>");
     }
document.write("<br><br>")
    }

}

function quadrado(){
for(var i = 2; i < 21; i++)
document.write("o quadrado de " + i + " é " + (i*i) + "<br>")
}

function total(){
    let val = document.getElementById("valor").value;
    let ju = document.getElementById("juros").value;
    let resultado = (val * (1+ (ju/100)));
    document.write("O resultado é " + resultado);
}