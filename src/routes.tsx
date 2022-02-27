import Admin from "./pages/Admin/Admin";
import Auth from "./pages/Auth/Auth";
import Cart from "./pages/Cart/Cart";
import Product from "./pages/Product/Product";
import Shop from "./pages/Shop/Shop";



export enum AllRoutes {
    ADMIN = "/admin",
    PRODUCT = "/product",
    SHOP = "/",
    LOGIN = "/login",
    REGISTR = "/registration",
    CART = "/cart",
    MAIN = "/*"
}



export const authRoutes = [
    { path: AllRoutes.ADMIN, element: <Admin /> },
    { path: AllRoutes.CART, element: <Cart /> },
]

export const publicRoutes = [
    { path: AllRoutes.SHOP, element: <Shop /> },
    { path: AllRoutes.LOGIN, element: <Auth /> },
    { path: AllRoutes.REGISTR, element: <Auth /> },
    { path: AllRoutes.PRODUCT + '/:id', element: <Product /> },
    { path: AllRoutes.MAIN, element: <Shop /> }
]