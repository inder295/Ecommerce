import { Cards } from "../components/Cards"
import { Category } from "../components/Category"
import {Corosel} from "../components/Corosel"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { Hero } from "../components/Hero"
import { ViewAllButton } from "../components/ViewAllButton"

export const Home =() =>{
  return (
    <>
    <Header/>
    <Category/>
    <Corosel />
    <Cards/>
    <ViewAllButton/>
    <Hero/>
    <Footer/>
  </>
  )
}