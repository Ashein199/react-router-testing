import { Link } from "react-router-dom";
const Products = () => {
  return (
    <section>
      <h1>Product Page</h1>
      <ul>
        <li>
          <Link to="/products/p1">A book</Link>
        </li>
        <li>
          <Link to="/products/p2">Cosmetics</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
