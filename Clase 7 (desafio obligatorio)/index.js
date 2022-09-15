class Product{
    constructor(name, type, buy_price, sell_price, amount) {
        this.name = name
        this.type = type
        this.buy_price = buy_price
        this.sell_price = sell_price
        this.amount = amount
    }
}

function add_product() {                            //crea un objeto Producto y lo devuelve
    let name = prompt ("Ingrese el nombre del producto")
    let type = prompt ("Ingrese el tipo de producto")
    let buy_price = prompt ("Ingrese el precio de compra")
    let sell_price = prompt ("Ingrese el precio de venta")
    let amount = prompt ("Ingrese cuántos elementos de este producto desea agregar")

    let product2add = new Product (
        name, 
        type,
        buy_price,
        sell_price,
        amount
    )
    return product2add
}


function sort_array (products_array, sort_word){    //ordena el arreglo con elementos Products
    if(sort_word == 1){                             //ordena por nombre
        products_array.sort(function(a, b) {
            var textA = a.name.toUpperCase();
            var textB = b.name.toUpperCase();
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        });
    }
    else if(sort_word == 2){                    //ordena por tipo
        products_array.sort(function(a, b) {
            var textA = a.type.toUpperCase();
            var textB = b.type.toUpperCase();
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        });
    }
    else if(sort_word == 3){                    //ordena por precio de compra de mayor a menor
        products_array.sort((a, b) => b.buy_price - a.buy_price);
    }
    else if(sort_word == 4){                    //ordena por precio de compra de menor a mayor
        products_array.sort((a, b) => a.buy_price - b.buy_price);
    }
    else if(sort_word == 5){                    //ordena por precio de venta de mayor a menor
        products_array.sort((a, b) => b.sell_price - a.sell_price);
    }
    else if(sort_word == 6){                    //ordena por precio de venta de menor a mayor
        products_array.sort((a, b) => a.sell_price - b.sell_price);
    }
    else if(sort_word == 7){                    //ordena por cantidad de mayor a menor
        products_array.sort((a, b) => b.amount - a.amount);
    }
    else if(sort_word == 8){                    //ordena por cantidad de menor a mayor
        products_array.sort((a, b) => a.amount - b.amount);
    }
    return products_array
}

function alert_print_all_array (products_array){    //imprime por alerta todos los elementos del arreglo de Products
    products_array.forEach(element => {
            alert(
                "Elemento numero " + products_array.indexOf(element) + "\n" +
                "Nombre: " + element.name + "\n" +
                "Tipo: " + element.type + "\n" +
                "Precio de compra: " + element.buy_price + "\n" +
                "Precio de venta: " + element.sell_price + "\n" +
                "Cantidad: " + element.amount
                )
    });
}

function alert_print_some_array (products_array, elements2print){   //Imprime por alerta los elementos que hayan sido enviados por elements2print del arreglo de Products
    for (let i = 0; i < elements2print.length ; i++){
        if(elements2print[i] < products_array.length){
            alert(
                "Elemento numero " + elements2print[i] + "\n" +
                "Nombre: " + products_array[elements2print[i]].name + "\n" +
                "Tipo: " + products_array[elements2print[i]].type + "\n" +
                "Precio de compra: " + products_array[elements2print[i]].buy_price + "\n" +
                "Precio de venta: " + products_array[elements2print[i]].sell_price + "\n" +
                "Cantidad: " + products_array[elements2print[i]].amount
                )
            }
            else{
                alert("El elemento numero " + elements2print[i] + " no existe")
            }
    }
}

function delete_element (products_array, element_numbers){
    element_numbers.sort((a, b) => b - a);
    for (let i = 0; i < element_numbers.length ; i++){
        if(element_numbers[i] < products_array.length){
            products_array.splice(element_numbers[i], 1)
        }
        else{
            alert("El elemento numero " + element_numbers[i] + " no existe")
        }
    }
}

function menu (){
    let opcion = prompt("Ingrese la opcion que desea realizar: \n \n 1.\t Agregar Producto \n 2.\t Eliminar producto \n 3.\t Imprimir todos los productos \n 4.\t Imprimir algunos productos \n 5.\t Ordenar \n 6.\t Salir")
    return opcion
}

function main (){
    let opcion = menu()
    let products = []
    let numbers_array
    while(opcion !== "6"){
        if (opcion !== ""){
            opcion = parseInt(opcion)
            if(!isNaN(opcion)){
                switch(opcion){
                    case 1:
                        let amount2add = parseInt(prompt("Ingrese la cantidad de productos diferentes que desea agregar"))
                        for (let i = 0; i < amount2add; i++){
                            products.push(add_product())
                        }
                        break
                    case 2:
                        numbers_array = prompt("Ingrese el/los numero/s de elementos que desea eliminar (si son mas de uno separelos con coma)").split(",")
                        numbers_array = numbers_array.map(function (x) { 
                            return parseInt(x, 10); 
                          });
                          delete_element(products, numbers_array)
                        break
                    case 3:
                        alert_print_all_array(products)
                        break
                    case 4:
                        numbers_array = prompt("Ingrese el/los numero/s de elementos que desea eliminar (si son mas de uno separelos con coma)").split(",")
                        numbers_array = numbers_array.map(function (x) { 
                            return parseInt(x, 10); 
                          });
                        alert_print_some_array(products, numbers_array)
                        break
                    case 5:
                          let sort_type = parseInt(prompt("Ingrese que tipo de ordenamiento desea: \n \n 1.\t Por el nombre \n 2.\t Por el tipo \n 3.\t Por precio de compra de mayor a menor \n 4.\t Por precio de compra de menor a mayor \n 5.\t Por precio de venta de mayor a menor \n 6.\t Por precio de venta de menor a mayor \n 7.\t Por cantidad de mayor a menor \n 8.\t Por cantidad de menor a mayor"))
                          sort_array(products, sort_type)
                        break
                    default:
                        alert("Opcion incorrecta")
                        break
                }
            }
            else {
                alert("Ingreso una letra")
            }
        }
        opcion = menu()
    }
}


main()
