import styled from "styled-components";

export const StyleCartTotal = styled.section`
  display: flex;
  flex-direction: column;
  width: 310px;
  height: 450px;

  .divProductsCart {
    height: 304px;
    background-color: var(--color-grey-4);
    border-bottom: solid 2px var(--color-grey-3);
    overflow: scroll;
    padding: 15px;
  }

  .divTotalCart {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0px 20px;
    height: 90px;
    gap: 10px;
    background-color: var(--color-grey-4);
  }

  .divTotalInfo {
    display: flex;
    justify-content: space-between;
  }

  small {
    color: var(--color-grey-1);
    font-weight: 700;
  }

  p {
    color: var(--color-grey-2);
    font-weight: 600;
  }
`;
