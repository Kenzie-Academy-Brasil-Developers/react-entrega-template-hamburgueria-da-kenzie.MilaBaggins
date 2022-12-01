import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700&display=swap');

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Nunito', sans-serif;
    }
    
    ul{
        list-style: none;
    }

    .divMain{
        display: flex;
    }

    button{
        cursor: pointer;
        border: none;
        background-color: var(--color-primary);
        color: white;
        padding: 8px 15px;
        border-radius: 4px;
    }

    h3{
        color: var(--color-grey-1);
    }

    p{
        color: var(--color-primary);
        font-size: 16px;
        font-weight: 600;
    }


    small{
        color: var(--color-grey-3);
    }

    :root {
       --color-grey-1: #333333;
       --color-grey-2: #808080;
       --color-grey-3: #d3d3d3;
       --color-grey-4: #e9e9e9;
       --color-white: #Ffffff;
       --color-primary: #27AE60;
       --color-primary-50: #93D7AF;
       --color-secondary: #EB5757;

    }
`;
