import Title from "./TitleComponents"
import ProductListComponent from "./ProductListComponent"
import { useSelector } from "react-redux";

export default function Home() {
  const LesProduits = useSelector((state) => state.Products.storeProducts);
  console.log(LesProduits);
  return (
    <div className="container">
        <Title name={"Our"} title={"Products"}/>
        <ProductListComponent LesProduits={LesProduits}/>
    </div>
  )
}