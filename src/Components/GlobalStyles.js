import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
@import url(https://fonts.googleapis.com/css2?family=Inter:wght@500&family=Itim&display=swap&family=Merriweather:ital@1&display=swap&family=Righteous&display=swap&family=Poppins:wght@300);

    *{
        padding: 0%;
        margin: 0%;
        box-sizing: border-box;
    }
  body {
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.bgc};
    background: linear-gradient(${({ theme }) => theme.bgG});
    transition: all 0.60s linear;
  }
  li{
      list-style: none;
  }
  .bg-1{
      background-color: ${({theme})=> theme.bg1}
  }
  .bg-5{
    background-color: ${({theme})=> theme.bg5}
}
.bg-10{
    background-color: ${({theme})=> theme.bg10}
}
.gbc-1 {
    background: ${({theme})=> theme.gbcClr};
}
    .clr-2{
        color: ${({theme})=> theme.clr2}
    }
    .clr-3{
        color: ${({theme})=> theme.clr3}
    }
    .clr-4{
        color: ${({theme})=> theme.clr4}
    }
    .clr-12{
        color: ${({theme})=> theme.clr12}
    }
    .clr-29 {
        color: ${({theme})=> theme.clr29};
      }
    .clr-31{
        color: ${({theme})=> theme.clr31}
    }
    .clr-32{
        color: ${({theme})=> theme.clr32}
    }
    .dclr-1{
        color: ${({theme})=> theme.dclr1};
      }
    .btnClr{
        color: ${({theme})=> theme.btnClr} 
    }
    .f-1 {
        font-family: Itim, cursive;
      }
      .f-2 {
        font-family: Inter, sans-serif;
      }
      .f-3 {
        font-family: Merriweather, serif;
      }
      .f-4 {
        font-family: Righteous, cursive;
      }
      .f-5 {
        font-family: Poppins, sans-serif;
      }
      .celFont {
        font-size: 4.5em;
        font-family: Inter, sans-serif;
        font-weight: 500;
        color: ${({theme})=> theme.celFontClr};
      }
      .fs-7 {
        font-size: 0.9em;
      }
      .full-w {
        width: 100%;
      }
      .weathImage {
        width: 10em;
        margin-top: -2vh;
        margin-left: -1vh;
      }
      .cityIn {
        height: 2.5em;
        border-color: ${({theme})=> theme.cityInBrClr}
      }
      .w-Icon {
        width: 12vh;
      }
      .logo {
        width: 2em;
        margin-top: -1.2vh;
        margin-right: -1vh;
      }
      #cityInput{
          color: ${({theme})=> theme.cityInput}
      }
      #cityInput::placeholder{
        color: ${({theme})=> theme.cityInPl}
    }
    .loader {
        width: 1.7em;
      }
      .headAnim {
        color: #fff;
      }      
  `;
