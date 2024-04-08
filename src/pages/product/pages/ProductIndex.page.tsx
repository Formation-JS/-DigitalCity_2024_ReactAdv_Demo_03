import { Link } from "react-router-dom";


const ProductIndex = () => {

    return (
        <ul>
            <li>
                <Link to='1'>Produit A</Link>
            </li>
            <li>
                <Link to='2'>Produit B</Link>
            </li>
            <li>
                <Link to='3'>Produit C</Link>
            </li>
            <li>
                <Link to='42'>Ultimate</Link>
            </li>
        </ul>
    )
}

export default ProductIndex;