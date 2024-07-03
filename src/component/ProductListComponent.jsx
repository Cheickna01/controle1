import ProductComponent from "./ProductComponent";

export default function ProductListComponent({LesProduits}) {
  function lesProduits(){
    if (LesProduits != null) {
      const products = LesProduits.map(p => (
        <ProductComponent produits={p} key={p.id}/>
      ));
  
      return <div className="row">{products}</div>;
    }
    else{
      return <p>null</p>
    }
  }
 
  return <>{lesProduits()}</>
}
