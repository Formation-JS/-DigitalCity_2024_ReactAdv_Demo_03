import { useParams } from "react-router-dom";

const ProductDetail = () => {

    const { productId } = useParams();

    return (
        <>
            <p>Produit : {productId}</p>
        </>
    );
};

export default ProductDetail;