import Link from "next/link";

export default  function Categories(){
    return(
        <>
        <h1>Categorias</h1>

        <ul>
            <Link href="/products/categories/materiales">
            <li>Materiales</li>
            </Link>
            <li>
                herramienta manuales
            </li>
            <li>
                herramienta electricas
            </li>
        </ul>
        </>
    )
}