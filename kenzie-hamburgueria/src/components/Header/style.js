import styled from "styled-components";

export const StyleHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
  box-shadow: 0px 4px 10px -3px var(--color-grey-3);
  background-color: var(--color-grey-4);

  @media (max-width: 1100px) {
    height: 60px;
    width: 100%;
  }

  img {
    margin-bottom: 10px;
  }
`;

export const StyleContainer = styled.div`
  width: 1000px;
  display: flex;
  justify-content: space-between;

  .container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: var(--color-grey-4);
  }

  div {
    display: flex;
    align-items: center;
    background-color: green;
    height: 40px;
    padding: 15px 5px 15px 15px;
    border-radius: 4px;
    background-color: white;
  }

  input {
    border: none;
    color: var(--color-grey-3);
    outline: none;
  }

  @media (max-width: 1100px) {
    .container {
      display: flex;
      flex-direction: column;
      height: 100px;
      margin-top: 60px;
    }
  }
`;
