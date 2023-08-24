/* import { Header } from "next/dist/lib/load-custom-routes" */
import Link from "next/link";
export const metadata = {
    title: "Productos de la tienda",
}


export default function CartLayout({children}){
    return (
        <>
           {children}
        <nav>
         <ul>
           <li>
            <Link href="/products/categories">Categorias</Link>
          </li>
          <li>
            <Link href="/products/cart">Carrito de Compras</Link>
          </li>
                <li>Cantidad</li>
        </ul>
        </nav>
     
        </>
    )
}