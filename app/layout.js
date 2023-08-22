import Link from "next/link"
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
        <nav>
         <h2>Navbar</h2> 
         <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/contacto">Contactanos</Link>
          </li>
          <li>
            <Link href="/products/categories">Categorias</Link>
          </li>
          <li>
            <Link href="/products/cart">Carrito de Compras</Link>
          </li>
         </ul>
        </nav>
        {children}
        </body>
    </html>
  )
}
