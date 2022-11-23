import { useNavigate } from "react-router-dom";
import { goToProductList, goToProfilePage } from "../routes/coordinator";

function HomePage() {
  const navigate = useNavigate();

  return (
    <section>
      <h1>Página inicial</h1>
      <button onClick={() => goToProfilePage(navigate)}>Profile Page</button>
      <button onClick={() => goToProductList(navigate)}>Product List</button>
    </section>
  );
}

export default HomePage;
