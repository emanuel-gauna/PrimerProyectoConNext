export const metadata = {
   title: "Carrito de compras",
}
"use client"

export default function Tienda(){
   return( 
    <>
   <h1>tienda</h1>
   <span>
    <li>Producto 1</li> <span><button onClick={ () =>{
         alert("agregaste un producto al carrito")
      }}>
         agregar al Carrito
      </button></span> 
    <li>Producto 2</li> <button onClick={ () =>{
         alert("agregaste un producto al carrito")
      }}>
         agregar al Carrito
      </button>
    <li>Producto 3</li><button onClick={ () =>{
         alert("agregaste un producto al carrito")
      }}>
         agregar al Carrito
      </button>
      </span>
    <section>
      <button onClick={ () =>{
         alert("agregaste un producto al carrito")
      }}>
         ir al Carrito
      </button>
    </section>
    </>
   )
}