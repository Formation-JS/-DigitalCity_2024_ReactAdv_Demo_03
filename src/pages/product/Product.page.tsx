import { Outlet } from "react-router-dom";

const ProductPage = () => {

    return (
        <>
            <h2>Product</h2>
            <Outlet />
        </>
    );
};

export default ProductPage;