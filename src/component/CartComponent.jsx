import { useSelector } from "react-redux";
import CartItemComponent from "./CartItemComponent";
import CartColums from "./CartColums";
import TotalCartComponent from "./TotalCartComponent";

export default function CartComponent() {
  const produits = useSelector((state) => state.Cart.cart);
  const total =  produits.reduce(
      (acc, item) =>
        item.promo === 0
          ? item.price * item.count + acc
          : item.price * item.count -
            (item.price * item.count * item.promo) / 100 +
            acc,
      0
    ) + "$";
  return (
    <>
      <div className="container">
        <div className="spaceCart">
          <CartColums />
          {produits.length !== 0 ? (
            produits.map((p) => <CartItemComponent produit={p} />)
          ) : (
            <h1
              className="text-center font-capitalize"
              style={{ fontWeight: "bold" }}
            >
              VOTRE PANIER EST VIDE POUR LE MOMENT
            </h1>
          )}
        </div>
      </div>
      <TotalCartComponent total={total} />

    </>
  );
}
