import { useParams } from "react-router-dom";

export default function Product() {
    const { productId} = useParams();
    return <p>
        Product with id {productId}
    </p>
}