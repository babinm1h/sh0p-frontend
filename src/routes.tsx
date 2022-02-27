import Shop from "./pages/Shop/Shop";
import Admin from "./pages/Admin/Admin";
import Auth from "./pages/Auth/Auth";
import Cart from "./pages/Cart/Cart";
import Product from "./pages/Product/Product";

export enum AllRoutes {
    ADMIN = "/admin",
    SHOP = "/",
    CART = "/cart",
    LOGIN = "/login",
    REGISTR = "/registration",
    PRODUCT = "/product",
}


export const authRoutes = [
    { path: AllRoutes.ADMIN, elem: <Admin /> },
    { path: AllRoutes.CART, elem: <Cart /> },
]


export const publicRoutes = [
    { path: AllRoutes.LOGIN, elem: <Auth /> },
    { path: AllRoutes.REGISTR, elem: <Auth /> },
    // { path: AllRoutes.SHOP, elem: <Shop /> },
    { path: AllRoutes.PRODUCT + `/:id`, elem: <Product /> },
]