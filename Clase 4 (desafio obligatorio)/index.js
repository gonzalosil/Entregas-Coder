//DESAFIO OBLIGATOIO//
const PI = 3.141592


function sum (a, b){    //funcion que realiza la suma de dos numeros (a+b)
    let result = 0
    result = a + b
    return result
}

function subs (a, b){   //funcion que realiza la resta de dos numeros (a-b)
    let result = 0
    result = a - b
    return result
}

function mult (a,b){    //funcion que realiza la multiplicacion de dos numeros (a*b)
    let result = 0
    result = a * b
    return result
}


function factorial (number){    //funcion que calcula el factorial de un numero (number!)
    let result = 1
    if (!number){
        result = 1
    }
    else{
        for (let i = 1; i <= number ; i++){
            result = result * i
        }
    }
    return result
}

function power (number, exp){   //funcion que calcula la potencia de un numero (number^exp)
    let result = number;
    if(exp == 0 && number != 0){
        result = 1
    }
    else {
        for (let i = 0; i < exp-1; i++){
            result = result * number
        }
    }
    return result
}

function sin (angle){ //funcion que calcula el seno de un angulo mediante una serie de Taylor
    let result = 0
    while (angle > PI){         //
        angle = angle - 2*PI    //Casteo el angulo entre -PI y PI
    }                           //que es el rango donde la serie converge al seno
    while (angle < - PI){       //
        angle = angle + 2*PI
    }
    for (let i = 0; i <= 10 ; i++){ //loop que calcula la serie de Taylor
        result = result + (power(-1, i))*((power(angle, 2*i+1))/factorial(2*i+1))
    }
    return result.toFixed(4)
}

function cos (angle){ //funcion que calcula el coseno de un angulo mediante una serie de Taylor
    let result = 1
    while (angle > PI){         //
        angle = angle - 2*PI    //Casteo el angulo entre -PI y PI
    }                           //que es el rango donde la serie converge al seno
    while (angle < - PI){       //
        angle = angle + 2*PI
    }
    for (let i = 1; i <= 10 ; i++){ //loop que calcula la serie de Taylor
        result = result + (power(-1, i))*((power(angle, 2*i))/factorial(2*i))
    }
    return result.toFixed(4)
}

function tan (angle){
    let a = sin(angle)
    let b = cos(angle)
    let result = 0

    if(b != 0){
        result = a/b
    }
    else {
        result = Infinity
    }
    return result.toFixed(4)
}

function mostrar_resultado (resultado){
    alert("El resultado es " + resultado)
}

function menu (){
    let operacion = prompt("Elija la operacion que desea realizar (ESC para salir \n 1.Suma \n 2. Resta \n 3. Multiplicaión \n 4.Factorial \n 5. Potencia \n 6.Seno \n 7.Coseno \n 8.Tangente")
    return operacion
}


function main (){
    let operacion = ""
    let resultado = 0
    operacion = menu()

    while(operacion !== "ESC"){
        if (operacion !== ""){
            operacion = parseInt(operacion)
            if(!isNaN(operacion)){
                let a = 0
                let b = 0
                switch(operacion){
                    case 1:
                        a = parseFloat(prompt("Ingrese el primer numero a sumar"))
                        b = parseFloat(prompt("Ingrese el segundo numero a sumar"))
                        resultado = sum(a, b)
                        break
                    case 2:
                        a = parseFloat(prompt("Ingrese el primer numero a restar"))
                        b = parseFloat(prompt("Ingrese el segundo numero a restar"))
                        resultado = subs(a, b)
                        break
                    case 3:
                        a = parseFloat(prompt("Ingrese el primer numero a multiplicar"))
                        b = parseFloat(prompt("Ingrese el segundo numero a multiplicar"))
                        resultado = mult(a, b)
                        break
                    case 4:
                        a = parseInt(prompt("Ingrese el numero a realizarle el factorial (debe ser un numero entero mayor o igual a 0)"))
                        resultado = factorial(a)
                        break
                    case 5:
                        a = parseFloat(prompt("Ingrese el primer numero a calcularle una potencia"))
                        b = parseInt(prompt("Ingrese la potencia del numero (debe ser entero)"))
                        resultado = power(a, b)
                        break
                    case 6:
                        a = parseFloat(prompt("Ingrese el angulo a calcularle el seno (en radianes)"))
                        resultado = sin(a)
                        break
                    case 7:
                        a = parseFloat(prompt("Ingrese el angulo a calcularle el coseno (en radianes)"))
                        resultado = cos(a)
                        break
                    case 8:
                        a = parseFloat(prompt("Ingrese el angulo a calcularle la tangente (en radianes)"))
                        resultado = tan(a)
                        break
                    default:
                        alert("Opcion incorrecta")
                        break
                }
            }
            else {
                alert("ingreso una letra")
            }
        }
        mostrar_resultado(resultado)
        operacion = menu()
    }
}

main()