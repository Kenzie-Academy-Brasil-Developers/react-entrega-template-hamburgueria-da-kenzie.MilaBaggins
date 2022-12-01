import React from "react";
import { StyleCartTotal } from "./style";
import CartShopHeader from "../../../assets/cabecalho.svg";
import CartCard from "../CartCard";
import CartEmpty from "../../../assets/cartEmpty.svg";

export const CartTotal = ({ currentSale, setCurrentSale }) => {
  const result = currentSale.map((item) => item.price);
  const result2 = result.reduce(
    (acumulador, curretValue) => acumulador + curretValue,
    0
  );
  return (
    <div>
      <StyleCartTotal>
        <img src={CartShopHeader} alt="" />
        {currentSale.length > 0 ? (
          <div>
            <div className="divProductsCart">
              <CartCard
                currentSale={currentSale}
                setCurrentSale={setCurrentSale}
              />
            </div>
            <div className="divTotalCart">
              <div className="divTotalInfo">
                <small>Total</small>
                <p>R$ {result2}</p>
              </div>
              <button
                onClick={() => {
                  const array = [...currentSale];
                  array.splice([0], array.length);
                  setCurrentSale(array);
                }}
              >
                Remover todos
              </button>
            </div>
          </div>
        ) : (
          <img src={CartEmpty} alt="" />
        )}
      </StyleCartTotal>
    </div>
  );
};

export default CartTotal;
