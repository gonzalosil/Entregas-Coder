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
    let buy_price = parseInt(prompt ("Ingrese el precio de compra"))
    let sell_price = parseInt(prompt ("Ingrese el precio de venta"))
    let amount = parseInt(prompt ("Ingrese cuántos elementos de este producto desea agregar"))

    let product2add = new Product (
        name, 
        type,
        buy_price,
        sell_price,
        amount
    )
    return product2add
}

function draw_elements (products){
    let contenedorProductos = document.getElementById("contenedor-productos");
    contenedorProductos = document.getElementById("contenedor-productos")
    for (const producto of products) {
    let column = document.createElement("div");
    column.className = "col-md-4 mt-3 ";
    column.id = `columna-${producto.id}`;
    column.innerHTML = `
        <div class="card">
            <div class="card-body">
            <p class="card-text">Nombre: <b>${producto.name}</b></p>
            <p class="card-text">Precio compra: <b>${producto.type}</b></p>
            <p class="card-text">Precio venta: <b>${producto.buy_price}</b></p>
            <p class="card-text">Cantidad: <b>${producto.sell_price}</b></p>
            <p class="card-text">Cantidad: <b>${producto.amount}</b></p>
            </div>
        </div>`;

    contenedorProductos.append(column);
    }
}

function main (){
    let products = []
    let amount2add = parseInt(prompt("Ingrese la cantidad de productos diferentes que desea agregar"))
    for (let i = 0; i < amount2add; i++){
        products.push(add_product())
    } 
    draw_elements(products)
}

main()


