import { useParams } from "react-router";
import { Container } from "react-bootstrap";

function Category() {
  const { id } = useParams();
  return (
    <Container>
      <h1>L'ID du catégorie est de : {id}</h1>
    </Container>
  );
}
export default Category;
