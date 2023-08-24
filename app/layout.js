import Navbar from "../components/Navbar";
import Header from "@/components/Header";
import Footer from "@/components/Footer"; 
import { Ubuntu , Titillium_Web ,  Preahvihear, Roboto ,  } from "next/font/google";

export const metadata = {
  title: "Yeseria Gauna - HomePage",
  description: "pagina principal de rubro de yeseria contrucción oficios y afines",
  keywords: "muestrario, servicio, yeseria, yeso, e-commerce "
};

 const ubuntu = Ubuntu({
  weight:["400", "300"],
  style: ["normal", "italic"],
  subsets: ["latin"]
})

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body className={ubuntu.className}>
        <Header />
       <Navbar/>
        {children}
        <Footer />
        </body>
    </html>
  )
}
