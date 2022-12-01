import React from "react";
import { StylesCartCard } from "./style";
import Imagem from "../../../assets/burguer.png";

const CartCard = ({ currentSale, setCurrentSale }) => {
  return (
    <div>
      {currentSale.map((item, index) => (
        <StylesCartCard key={index}>
          <div>
            <img src={item.img} alt="" />
          </div>
          <div className="divNameCategory">
            <p>{item.name}</p>
            <small>{item.category}</small>
          </div>
          <div className="remove">
            <small
              onClick={() => {
                const array = [...currentSale];
                array.splice(index, 1);
                setCurrentSale(array);
              }}
            >
              Remover
            </small>
          </div>
        </StylesCartCard>
      ))}
    </div>
  );
};

export default CartCard;
