import { useSelector } from "react-redux";
import { Price } from "./ProductComponent";
import { Button } from "reactstrap";
import { useDispatch } from "react-redux";
import { a } from "../redux/Cart";
export default function CartItemComponent({produit}) {
    const lesP = useSelector(state=>state.Cart.cart)
    const dispatch = useDispatch();
    const {id,title,img,promo,price,inCart,count,total} = produit
    console.log(inCart)
  return (
    <>
        <div className="container-fluid text-center" key={id}>
          <div className="row mx-1 cartItem">
            <div className="col-lg-2 mx-auto my-lg-auto">
              <img
                src={"/img" + img}
                alt=""
                width="100"
                className="img-fluid rounded"
              />
            </div>
            <div className="col-lg-2 mx-auto my-lg-auto">
              <p className="text-uppercase">{title}</p>
            </div>
            <div className="col-lg-2 mx-auto my-lg-auto">
              <p className="cartPrice">
                {promo === 0
                  ? price + "$"
                  : price - (price * promo) / 100 + "$"}
              </p>
            </div>

            <div className="col-lg-2 mx-auto my-lg-auto my-3">
              <Button
                className="btn btn-primary outline buttonCart"
                onClick={() => dispatch(a.AddQuant(produit))}
              >
                <span className="fas fa-plus"></span>
              </Button>
              <Button className="btn btn-primary outline buttonCart buttonCart-middle">
                <span className="">{count}</span>
              </Button>
              <Button className="btn btn-primary outline buttonCart" onClick={()=>dispatch(a.RemoveQuant(produit))}>
                <span className="fas fa-minus"></span>
              </Button>
            </div>

            <div className="col-lg-2 mx-auto my-lg-auto my-3">
              <Button className="btn outline buttonCart buttonCartDelete" onClick={()=>dispatch(a.RemoveOne(produit))}>
                <span className="fas fa-times m-auto"></span>
              </Button>
            </div>
            <div className="col-lg-2 mx-auto my-lg-auto">
              <p className="cartPrice">
                {promo === 0
                  ? price * count + "$"
                  : (price - (price * promo) / 100) * count + "$"}
              </p>
            </div>
          </div>
        </div>
          </>
  );
}
