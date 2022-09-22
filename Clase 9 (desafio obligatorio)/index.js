//tengo 21 botones
let Calculos = [];
let Actual_operation;

let clear_btn;
let divide_btn;
let multiply_btn;
let plus_btn;
let minus_btn;
let sin_btn;
let cos_btn;
let tan_btn;
let factorial_btn;
let dot_btn;
let cero_btn;
let one_btn;
let two_btn;
let three_btn;
let four_btn;
let five_btn;
let six_btn;
let seven_btn;
let eight_btn;
let nine_btn;
let equal_btn;
let display = document.getElementById("result");
let id = 0;

const PI = 3.1415

class Operations_backup{
    constructor(number1, number2, result, operation, id){
        this.number1 = number1;
        this.number2 = number2;
        this.result = result;
        this.operation = operation;
        this.id = id
    }
}

class Operation2do{
    constructor(){
        this.number1 = 0;
        this.number2 = 0;
        this.result = 0;
        this.operation = "";
        this.change_display = true;     //bool que se pone en true si hay un numero esperando para ser usado
        this.step = 0;
        this.dot_count = 0;
    }
}
function initialize_elements() {
    clear_btn = document.getElementById("clear_btn");
    divide_btn = document.getElementById("divide_btn");
    multiply_btn = document.getElementById("multiply_btn");
    plus_btn = document.getElementById("plus_btn");
    minus_btn = document.getElementById("minus_btn");
    sin_btn = document.getElementById("sin_btn");
    cos_btn = document.getElementById("cos_btn");
    tan_btn = document.getElementById("tan_btn");
    factorial_btn = document.getElementById("factorial_btn");
    dot_btn = document.getElementById("dot_btn");
    cero_btn = document.getElementById("cero_btn");
    one_btn = document.getElementById("one_btn");
    two_btn = document.getElementById("two_btn");
    three_btn = document.getElementById("three_btn");
    four_btn = document.getElementById("four_btn");
    five_btn = document.getElementById("five_btn");
    six_btn = document.getElementById("six_btn");
    seven_btn = document.getElementById("seven_btn");
    eight_btn = document.getElementById("eight_btn");
    nine_btn = document.getElementById("nine_btn");
    equal_btn = document.getElementById("equal_btn");
}

function write_display(element2write){
    console.log(Actual_operation.change_display)

        if (Actual_operation.change_display){
            clear_display();
            Actual_operation.step++;
            Actual_operation.change_display = false;
        }
        if (display.innerText.length < 13){
            if(Actual_operation.dot_count > 0){
                if(Actual_operation.dot_count > 13){
                    Actual_operation.dot_count = 13;
                }
                element2write = parseInt(element2write) / power(10, Actual_operation.dot_count);
                element2write = (parseFloat(display.innerText) + parseFloat(element2write)).toFixed(Actual_operation.dot_count);
                display.innerText = element2write.toString();
                Actual_operation.dot_count++;
                if(Actual_operation.dot_count > 13){
                    Actual_operation.dot_count = 13;
                }
            }
            else{
                display.innerText = display.innerText + element2write.toString();
            }

    }
    console.log(Actual_operation.step)
    console.log("longitud " + display.innerText.length)
}

function clear_display (){
    display.innerText = "";
    Actual_operation.dot_count = 0;
}

function clear_display_btn (){
    display.innerText = "";
    Actual_operation.number = 0;
    Actual_operation.number1 = 0;
    Actual_operation.number2 = 0;
    Actual_operation.result = 0;
    Actual_operation.operation = "0";
    Actual_operation.change_display = false;
    Actual_operation.step = 0;
    write_display(Actual_operation.result);
    Actual_operation.change_display = true;
    Actual_operation.dot_count = 0;
}

function operation (operation_type){
    console.log(Actual_operation.operation)
    if (Actual_operation.operation == 0){
        Actual_operation.operation = operation_type
    }
    switch (Actual_operation.operation) {
        case "plus":
            if (!Actual_operation.step){
                Actual_operation.change_display = true;
                Actual_operation.operation = operation_type;
                Actual_operation.number1 = Actual_operation.result;
                console.log("numero 1 " + Actual_operation.number1)
                console.log("numero 2 " + Actual_operation.number2)
            }
            else if(Actual_operation.step == 1){
                Actual_operation.number2 = parseFloat(Actual_operation.number1);
                Actual_operation.number1 = parseFloat(display.innerText);
                Actual_operation.result = sum(Actual_operation.number1, Actual_operation.number2);
                console.log("numero 1 " + Actual_operation.number1)
                console.log("numero 2 " + Actual_operation.number2)
                console.log("resultado " + Actual_operation.result)
                clear_display();
                write_display(Actual_operation.result);
                Calculos.push(new Operations_backup(Actual_operation.number1, Actual_operation.number2,Actual_operation.result, Actual_operation.operation, id++))
                pintarProductos();
                Actual_operation.change_display = true;
                Actual_operation.operation = operation_type;
                Actual_operation.number1 = Actual_operation.result;
            }
            else if (Actual_operation.step >= 2){
                Actual_operation.number2 = parseFloat(Actual_operation.number1);
                Actual_operation.number1 = parseFloat(display.innerText);
                Actual_operation.result = sum(Actual_operation.number1, Actual_operation.number2);
                clear_display();
                write_display(Actual_operation.result);
                Calculos.push(new Operations_backup(Actual_operation.number1, Actual_operation.number2,Actual_operation.result, Actual_operation.operation, id++))
                pintarProductos();
                Actual_operation.change_display = true;
                Actual_operation.operation = operation_type;
                Actual_operation.number1 = Actual_operation.result;
            }
            break;
        case "min":
            if (!Actual_operation.step){
                Actual_operation.change_display = true;
                Actual_operation.operation = operation_type;
                Actual_operation.number1 = Actual_operation.result;

            }
            else if(Actual_operation.step == 1){
                Actual_operation.number2 = parseFloat(Actual_operation.number1);
                Actual_operation.number1 = parseFloat(display.innerText);
                Actual_operation.result = subs(Actual_operation.number2, Actual_operation.number1);
                clear_display();
                write_display(Actual_operation.result);
                Calculos.push(new Operations_backup(Actual_operation.number1, Actual_operation.number2,Actual_operation.result, Actual_operation.operation, id++))
                pintarProductos();
                Actual_operation.change_display = true;
                Actual_operation.operation = operation_type;
                Actual_operation.number1 = Actual_operation.result;

            }
            else if (Actual_operation.step >= 2){
                Actual_operation.number2 = parseFloat(Actual_operation.number1);
                Actual_operation.number1 = parseFloat(display.innerText);
                Actual_operation.result = subs(Actual_operation.number2, Actual_operation.number1);
                clear_display();
                write_display(Actual_operation.result);
                Calculos.push(new Operations_backup(Actual_operation.number1, Actual_operation.number2,Actual_operation.result, Actual_operation.operation, id++))
                pintarProductos();
                Actual_operation.change_display = true;
                Actual_operation.operation = operation_type;
                Actual_operation.number1 = Actual_operation.result;
            }
            break;
        case "div":

            if (!Actual_operation.step){
                Actual_operation.change_display = true;
                Actual_operation.operation = operation_type;
                Actual_operation.number1 =Actual_operation.result;
                Actual_operation.step++;
            }
            else if(Actual_operation.step == 1){
                Actual_operation.number2 = 1;
                Actual_operation.number1 = parseFloat(display.innerText);
                Actual_operation.result = div(Actual_operation.number1, Actual_operation.number2);
                console.log("1 " + Actual_operation.number1)
                console.log("2 " + Actual_operation.number2)
                clear_display();
                write_display(Actual_operation.result);
                Calculos.push(new Operations_backup(Actual_operation.number1, Actual_operation.number2,Actual_operation.result, Actual_operation.operation, id++))
                pintarProductos();
                Actual_operation.change_display = true;
                Actual_operation.operation = operation_type;
                Actual_operation.number1 = Actual_operation.result;
                Actual_operation.step++;
            }
            else if (Actual_operation.step >= 2){
                Actual_operation.number2 = parseFloat(Actual_operation.number1);
                Actual_operation.number1 = parseFloat(display.innerText);
                Actual_operation.result = div(Actual_operation.number2, Actual_operation.number1);
                console.log("1 " + Actual_operation.number1)
                console.log("2 " + Actual_operation.number2)
                clear_display();
                write_display(Actual_operation.result);
                Calculos.push(new Operations_backup(Actual_operation.number1, Actual_operation.number2,Actual_operation.result, Actual_operation.operation, id++))
                pintarProductos();
                Actual_operation.change_display = true;
                Actual_operation.operation = operation_type;
                Actual_operation.number1 = Actual_operation.result;
            }
            break;
        case "mult":
            if (!Actual_operation.step){
                Actual_operation.change_display = true;
                Actual_operation.operation = operation_type;
                Actual_operation.number1 =Actual_operation.result;
                Actual_operation.step++;
            }
            else if(Actual_operation.step == 1){
                Actual_operation.number2 = 1;
                Actual_operation.number1 = parseFloat(display.innerText);
                Actual_operation.result = mult(Actual_operation.number1, Actual_operation.number2);
                clear_display();
                write_display(Actual_operation.result);
                Calculos.push(new Operations_backup(Actual_operation.number1, Actual_operation.number2,Actual_operation.result, Actual_operation.operation, id++))
                pintarProductos();
                Actual_operation.change_display = true;
                Actual_operation.operation = operation_type;
                Actual_operation.number1 = Actual_operation.result;
                Actual_operation.step++;
            }
            else if (Actual_operation.step >= 2){
                Actual_operation.number2 = parseFloat(Actual_operation.number1);
                Actual_operation.number1 = parseFloat(display.innerText);
                Actual_operation.result = mult(Actual_operation.number1, Actual_operation.number2);
                clear_display();
                write_display(Actual_operation.result);
                Calculos.push(new Operations_backup(Actual_operation.number1, Actual_operation.number2,Actual_operation.result, Actual_operation.operation, id++))
                pintarProductos();
                Actual_operation.change_display = true;
                Actual_operation.operation = operation_type;
                Actual_operation.number1 = Actual_operation.result;
            }
            break;
            case "sin":
                Actual_operation.number1 = parseFloat(display.innerText);
                Actual_operation.result = sin(Actual_operation.number1);
                clear_display();
                write_display(Actual_operation.result);
                Actual_operation.change_display = false;
                Actual_operation.operation = operation_type;
                Actual_operation.number2 = 0
                Calculos.push(new Operations_backup(Actual_operation.number1, Actual_operation.number2,Actual_operation.result, Actual_operation.operation, id++))
                Actual_operation.number1 = Actual_operation.result;
                pintarProductos();
                Actual_operation.step = 0;
                Actual_operation.change_display = true;
                Actual_operation.operation = 0;
                break;
            case "cos":
                Actual_operation.number1 = parseFloat(display.innerText);
                Actual_operation.result = cos(Actual_operation.number1);
                clear_display();
                write_display(Actual_operation.result);
                Actual_operation.change_display = false;
                Actual_operation.operation = operation_type;
                Actual_operation.number2 = 0
                Calculos.push(new Operations_backup(Actual_operation.number1, Actual_operation.number2,Actual_operation.result, Actual_operation.operation, id++))
                Actual_operation.number1 = Actual_operation.result;
                pintarProductos();
                Actual_operation.step = 0;
                Actual_operation.change_display = true;
                Actual_operation.operation = 0;
                break;    
            case "tan":
                Actual_operation.number1 = parseFloat(display.innerText);
                Actual_operation.result = tan(Actual_operation.number1);
                clear_display();
                write_display(Actual_operation.result);
                Actual_operation.change_display = false;
                Actual_operation.operation = operation_type;
                Actual_operation.number2 = 0
                Calculos.push(new Operations_backup(Actual_operation.number1, Actual_operation.number2,Actual_operation.result, Actual_operation.operation, id++))
                Actual_operation.number1 = Actual_operation.result;
                pintarProductos();
                Actual_operation.step = 0;
                Actual_operation.change_display = true;
                Actual_operation.operation = 0;
                break;             
                case "fact":
                    Actual_operation.number1 = parseFloat(display.innerText);
                    Actual_operation.result = factorial(Actual_operation.number1);
                    clear_display();
                    write_display(Actual_operation.result);
                    Actual_operation.change_display = false;
                    Actual_operation.operation = operation_type;
                    Actual_operation.number2 = 0
                    Calculos.push(new Operations_backup(Actual_operation.number1, Actual_operation.number2,Actual_operation.result, Actual_operation.operation, id++))
                    Actual_operation.number1 = Actual_operation.result;
                    pintarProductos();
                    Actual_operation.step = 0;
                    Actual_operation.change_display = true;
                    Actual_operation.operation = 0;
                    break;                    
        default:
            break;
            
    }
    Actual_operation.dot_count=0;
    console.log(Calculos)
    
}

function equal (operation_type){
    operation(operation_type);
    Actual_operation.change_display = true;
    Actual_operation.operation = "";
    Actual_operation.step = 0;
    Actual_operation.dot_count = 0;

}

function parse_btns (){
    nine_btn.onclick = () => {
        write_display("9");
    }
    eight_btn.onclick = () => {
        write_display("8");
    }
    seven_btn.onclick = () => {
        write_display("7");
    }
    six_btn.onclick = () => {
        write_display("6");
    }
    five_btn.onclick = () => {
        write_display("5");
    }
    four_btn.onclick = () => {
        write_display("4");
    }
    three_btn.onclick = () => {
        write_display("3");
    }
    two_btn.onclick = () => {
        write_display("2");
    }
    one_btn.onclick = () => {
        write_display("1");
    }
    cero_btn.onclick = () => {
        write_display("0");
    }
    clear_btn.onclick = () => {
        clear_display_btn();
    }
    multiply_btn.onclick = () => {
        operation("mult");
    }
    divide_btn.onclick = () => {
        operation("div");
    }
    plus_btn.onclick = () => {
        operation("plus");
    }
    minus_btn.onclick = () => {
        operation("min");
    }
    sin_btn.onclick = () => {
        operation("sin");
    }
    cos_btn.onclick = () => {
        operation("cos");
    }
    tan_btn.onclick = () => {
        operation("tan");
    }
    factorial_btn.onclick = () => {
        operation("fact");
    }
    dot_btn.onclick = () => {
        Actual_operation.dot_count++;
    }
    equal_btn.onclick = () => {
        equal(Actual_operation.operation);
    }
}

function pintarProductos() {
    contenedorProductos.innerHTML = "";
    Calculos.forEach((calc) => {
      let column = document.createElement("div");
        column.className = "col-md-4 mt-3";
        column.id = `columna-${calc.id}`;
        column.innerHTML = `
              <div class="card">
                  <div class="card-body">
                  <p class="card-text">Numero 1:
                      <b>${calc.number1}</b>
                  </p>
                  <p class="card-text">Numero 2:
                      <b>${calc.number2}</b>
                  </p>
                  <p class="card-text">Resultado:
                      <b>${calc.result}</b>
                  </p>
                  <p class="card-text">Operacion:
                      <b>${calc.operation}</b>
                  </p>
                  </div>
                  <div class="card-footer">
                      <button class="btn btn-danger" id="botonEliminar-${calc.id}" >Eliminar</button>
                  </div>
              </div>`;
  
      contenedorProductos.append(column);
  
      let botonEliminar = document.getElementById(`botonEliminar-${calc.id}`);
      botonEliminar.onclick = () => eliminarProducto(calc.id);
    });
  }

  function eliminarProducto(idProducto) {
    let columnaBorrar = document.getElementById(`columna-${idProducto}`);
    let indiceBorrar = Calculos.findIndex(
      (producto) => Number(producto.id) === Number(idProducto)
    );
  
    Calculos.splice(indiceBorrar, 1);
    columnaBorrar.remove();
  }
//===================================================>INICIO DE LAS OPERACIONES<=====================================================================

function sum (a, b){    //funcion que realiza la suma de dos numeros (a+b)
    let result = 0
    result = parseFloat(a) + parseFloat(b)
    console.log("este es el numero1 " + a)
    console.log("este es el numero2 " + b)
    console.log("este es el resultado " + result)
    return result
}

function subs (a, b){   //funcion que realiza la resta de dos numeros (a-b)
    let result = 0
    result = parseFloat(a) - parseFloat(b)
    return result
}

function mult (a,b){    //funcion que realiza la multiplicacion de dos numeros (a*b)
    let result = 0
    result = parseFloat(a) * parseFloat(b)
    return result
}

function div (a,b){    //funcion que realiza la multiplicacion de dos numeros (a*b)
    let result = 0
    if (b){
        result = parseFloat(a) / parseFloat(b)
    }
    else {
        result = "E"
    }
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
    angle = parseFloat(angle)
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
    angle = parseFloat(angle)
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
    angle = parseFloat(angle)
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

//===================================================>FIN DE LAS OPERACIONES<=====================================================================

Actual_operation = new Operation2do();
initialize_elements();
clear_display_btn()
parse_btns()

