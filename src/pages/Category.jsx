import { useParams,useNavigate } from "react-router";
import { Button } from "react-bootstrap";

function Category() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleRedirection = () =>{
    navigate("/");
  };
  
  return (
    <>
      <h1>L'ID du catégorie est de : {id}</h1>
      <Button onClick={handleRedirection}>Retour à la page d'Accueil</Button>
    </>
  );
}
export default Category;
