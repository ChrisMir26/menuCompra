const btnAdd = document.querySelectorAll('.btn-primary')
const carrito = document.getElementById("carrito")
let chango = []


document.addEventListener(`click`, function(e){

    if(e.target.matches('.btn-primary')){
        agregar(e)
        renderCarrito()
        }

    if(e.target.matches('.btn-success')){
        
        function btnAumentar(e){

            chango = chango.map((item)=>{
                if(item.id === e.target.dataset.fruta){
                    console.log(`hola`)
                }
            })
        }
        btnAumentar(e)
    }    
       
})


// FUNCTION AGREGAR

function agregar(e){

    const producto = {
        name: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1,
        precio: parseInt(e.target.dataset.precio) 
        
       }
       const index = chango.findIndex((item)=>item.id ===  e.target.dataset.fruta)

       if(index === -1){
        chango.push(producto)
       }else{
        chango[index].cantidad++;
       }
      console.log(chango)

}

// RENDER CARRITO

function renderCarrito(){

    let template = ''

    const render = chango.map((item)=>{
            template +=`<li class="list-group-item text-uppercase bg-secondary text-white">
                <span class="badge bg-primary rounded-pill align-middle">${item.cantidad}</span>
                <span class="lead align-middle">${item.id}</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                <div>
                <p class="lead mb-0">Total: $<span>${item.cantidad * item.precio}</span></p>
                </div>
                <div>
                <button class="btn btn-sm btn-success" data-fruta="${item.id}" >Agregar</button>
                <button class="btn btn-sm btn-danger">Quitar</button>
                </div>
                </li>`

                return carrito.innerHTML = template
})
} 

// BTN AUMENTAR
















