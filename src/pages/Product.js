import { Link, useParams } from "react-router-dom";
import products from "../data";
const Product = () => {
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);
  const { image, name, details } = product;

  return (
    <div>
      <img src={image} alt={name} width="250" />
      <h3>{name}</h3>
      <p>{details}</p>
      <Link to="/products">Voltar para lista de produtos</Link>
    </div>
  );
};

export default Product;
