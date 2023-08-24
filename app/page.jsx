"use client"
import Users from "@/components/Users";
export const metadata = {
  title: "mi pagina especial home"  
}

export default function HomePage(){
   /* server component */
    return(
        <>
         <h1>Bienvenido a la Home</h1>
   {/* client component */}
    <Users/>
    </>
    )
}