import Link from "next/link";

export default function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
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
            <Link href="/products">Todos los Productos</Link>
          </li>
        
     
         </ul>
        </nav>
            </div>
        </nav>
    )
}