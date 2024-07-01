import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
    }

    body, html, #root {
      height: 100%;
      width: 100%;
      position: fixed;
      font-family: Inter;
      touch-action: none;
    }

    body {
      background: ${({ theme }) => theme.colors.primary_colors.white};
      transition: all 0.50s linear;
    }
    
    .pointer {
      cursor: pointer
    }

`;