import { createGlobalStyle } from 'styled-components'
export const GlobalStyles = createGlobalStyle`


  html *{
    box-sizing: border-box;
  }

  body {
      @import url('https://fonts.googleapis.com/css?family=Nunito:200,300,400,600,700');
      font-family: 'Nunito', sans-serif;
      font-size: 16px;
      margin:0;
      color: #707070;
    }

  a {
    text-decoration: none;
  }

`
