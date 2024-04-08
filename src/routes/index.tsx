import type { RouteObject } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/Home/Home.page";
import ProductPage from "../pages/product/Product.page";
import ProductIndex from "../pages/product/pages/ProductIndex.page";
import ProductDetail from "../pages/product/pages/ProductDetail.page";
import AboutPage from "../pages/About/About.page";
import NotFoundPage from "../pages/Errors/NotFound.page";

export const routes : RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: '/product',
                element: <ProductPage />,
                children: [
                    {
                        index: true,
                        element: <ProductIndex />
                    },
                    {
                        path: ':productId',
                        element: <ProductDetail />
                    }
                ]
            },
            {
                path: '/about',
                element: <AboutPage />
            },
            {
                path: '*',
                element: <NotFoundPage />
            }
        ]
    }
];