import { useParams } from "react-router";

function Category() {
  const { id } = useParams();
  return <h1>L'ID du catégorie est de : {id}</h1>;
}
export default Category;
