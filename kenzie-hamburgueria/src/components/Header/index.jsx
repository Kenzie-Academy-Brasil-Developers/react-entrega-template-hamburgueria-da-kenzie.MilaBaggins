import React from "react";
import Logo from "../../assets/logo.svg";
import { StyleContainer } from "./style";
import { StyleHeader } from "./style";

const Header = ({ setFilterName }) => {
  return (
    <StyleHeader>
      <StyleContainer>
        <div className="container">
          <img src={Logo} alt="" />
          <div>
            <input
              type="text"
              placeholder="Digite sua pesquisa..."
              id="search"
            />

            <button
              onClick={() => {
                const searchValue = document.getElementById("search").value;
                setFilterName(searchValue);
              }}
            >
              Pesquisar
            </button>
          </div>
        </div>
      </StyleContainer>
    </StyleHeader>
  );
};

export default Header;
