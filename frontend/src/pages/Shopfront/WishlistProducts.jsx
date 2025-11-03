import BackNavigation from "../../components/Shopfront/BackNavigation"
import { Category } from "../../components/Shopfront/Category"
import { Header } from "../../components/Shopfront/Header"
import UserWishlistProducts from "../../components/Shopfront/UserWishlistProducts"

const WishlistProducts = () => {
  return (
    <>
       <Header/>
       <Category/>
       
        <BackNavigation/>
          <h1 className="text-4xl font-bold w-[80%] ml-48 text-center">WishList</h1>
        <UserWishlistProducts/>
       
    </>
  )
}

export default WishlistProducts
