import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layout/Dashboard/Dashboard";
import Main from "../layout/Main/Main";
import CustomerAdd from "../pages/Dashboard/Customer/CustomerAdd";
import CustomerDetails from "../pages/Dashboard/Customer/CustomerDetails";
import CustomerList from "../pages/Dashboard/Customer/CustomerList";
import OrderDetails from "../pages/Dashboard/Order/OrderDetails";
import OrderList from "../pages/Dashboard/Order/OrderList";
import ProductAdd from "../pages/Dashboard/Product/ProductAdd";
import ProductDetails from "../pages/Dashboard/Product/ProductDetails";
import ProductList from "../pages/Dashboard/Product/ProductList";
import Cart from "../pages/Main/Cart/Cart";
import Home from "../pages/Main/Home/Home";
import LogIn from "../pages/Main/LogIn/LogIn";
import Products from "../pages/Main/Products/Products";
import Regsiter from "../pages/Main/Regsiter/Regsiter";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "home",
                element: <Home />,
            },
            {
                path: "products/:id",
                element: <ProductDetails />,
            },
            {
                path: "products",
                element: <Products />,
            },
            {
                path: "cart",
                element: <Cart />,
            },
            {
                path: "login",
                element: <LogIn />,
            },
            {
                path: "signup",
                element: <Regsiter />,
            },
        ],
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
            {
                path: "",
                element: <CustomerList />,
            },
            {
                path: "customer/add",
                element: <CustomerAdd />,
            },
            {
                path: "customer/:id",
                element: <CustomerDetails />,
            },
            {
                path: "customer",
                element: <CustomerDetails />,
            },
            {
                path: "order/:id",
                element: <OrderDetails />,
            },
            {
                path: "order",
                element: <OrderList />,
            },
            {
                path: "product/add",
                element: <ProductAdd />,
            },
            {
                path: "product/:id",
                element: <ProductDetails />,
            },
            {
                path: "product",
                element: <ProductList />,
            },
        ],
    },
]);

export default routes;