import { Link } from "react-router-dom";
import products from "../data";
const Products = () => {
  return (
    <section className="section">
      <h2>Lista de Produtos</h2>
      <div className="products">
        {products.map((product) => {
          return (
            <article key={product.id}>
              <h4>{product.name}</h4>
              <Link to={`/products/${product.id}`}>detalhes do produto</Link>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Products;
