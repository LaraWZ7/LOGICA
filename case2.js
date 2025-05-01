        let lado1 = parseInt(prompt("Digite o lado1 bro:"))
        let lado2 = parseInt(prompt("Digite o lado2 bro:"))
        let lado3 = parseInt(prompt("Digite o lado3 bro:"))

switch(true){
    case (lado1 === lado2 && lado2 === lado3):
    console.log("Trângulo Equilátero!!")
break;
    case (lado1 === lado2 || lado2 === lado3 || lado1 === lado3):
    console.log("Triângulo Isóceles!!")
break;
    
default:
    console.log("Triângulo Escaleno!!")
}

