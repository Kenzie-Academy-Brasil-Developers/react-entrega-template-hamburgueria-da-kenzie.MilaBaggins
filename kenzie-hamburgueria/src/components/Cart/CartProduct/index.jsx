import React, { useEffect, useState } from "react";
import { StyleCartDiv, StyleCartSection, StyleContainer } from "./style";
import CartTotal from "../CartTotal/index";
import Imagem from "../../../assets/burguer.png";
import { api } from "../../services/Api";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Cart = ({ filterName }) => {
  const [products, setProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const alert = () => toast.error("O item já existe");

  useEffect(() => {
    async function productsList() {
      try {
        const response = await api.get("products");
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    productsList();
  });

  return (
    <StyleContainer>
      <StyleCartDiv>
        {products
          .filter(
            (item, index) =>
              item.name.toLowerCase().includes(filterName.toLowerCase()) ||
              filterName === ""
          )
          .map((item, index) => (
            <StyleCartSection key={index}>
              <ul className="ul">
                <li className="liImg">
                  <img src={item.img} alt="" />
                </li>
                <div className="divInfo">
                  <li>
                    <h3>{item.name}</h3>
                  </li>
                  <small>{item.category}</small>
                  <li>
                    <p>R$ {item.price}</p>
                  </li>
                  <li>
                    <ToastContainer />
                    <button
                      onClick={() => {
                        const itemOnList = currentSale.filter(
                          (itemFilter) => itemFilter.name === item.name
                        );

                        if (itemOnList.length === 0) {
                          setCurrentSale([...currentSale, item]);
                        } else {
                          alert();
                        }
                      }}
                    >
                      Adicionar
                    </button>
                  </li>
                </div>
              </ul>
            </StyleCartSection>
          ))}
      </StyleCartDiv>
      <CartTotal currentSale={currentSale} setCurrentSale={setCurrentSale} />
    </StyleContainer>
  );
};

export default Cart;
