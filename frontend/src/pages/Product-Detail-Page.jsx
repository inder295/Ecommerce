import { Footer } from "flowbite-react"
import { Category } from "../components/Category"
import { Header } from "../components/Header"

export const ProductDetailPage =() =>{
    return (
        <div>
            <Header/>
            <Category/>

            <h1 className="m-40">Product Detail Page</h1>
          

            <Footer/>
        </div>
    )
}