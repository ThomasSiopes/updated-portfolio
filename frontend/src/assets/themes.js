import { createGlobalStyle } from "styled-components";

export const lightTheme = {
    body: "background-color: #fff",
    fontColor: "#000",
    displayL: "none",
    displayD: "inline",
    greenBodyColor: "#fff",
    greenBodyBorder: "solid 1px #198754",
    projectLink: "solid 1.5px #198754",
    navColor: "#111",
    navColor2: "#545454",
    navBar: "#f0f0f0",
    btnInverse1: "#ccc",
    btnInverse2: "#eee"
}

export const darkTheme = {
    body: "background-image: linear-gradient(#097744, #111)",
    fontColor: "#fff",
    displayL: "inline",
    displayD: "none",
    greenBodyColor: "#198754",
    greenBodyBorder: "solid 1px #198754",
    projectLink: "solid 1.5px #fff",
    navColor: "#fff",
    navColor2: "#ccc",
    navBar: "#087040",
    btnInverse1: "#157347",
    btnInverse2: "#198754"
}

export const GlobalStyles = createGlobalStyle`
    body {
        ${(props) => props.theme.body};
    }

    .bg-green {
        background-color: ${(props) => props.theme.greenBodyColor};
    }

    .bg-navbar {
        background-color: ${(props) => props.theme.navBar};
    }

    .border-green { 
        border: ${(props) => props.theme.greenBodyBorder};
        border-radius: 20px;
    }

    .btn-green-inverse {
        color: ${(props) => props.theme.fontColor};
        background-color: ${(props) => props.theme.btnInverse1};
        border-color: ${(props) => props.theme.btnInverse1};
    }

    .btn-green-inverse:hover, .btn-green-inverse:active, .btn-green-inverse-activated {
        color: ${(props) => props.theme.fontColor}!important;
        background-color: ${(props) => props.theme.btnInverse2}!important;
        border-color: ${(props) => props.theme.btnInverse2}!important;
    }

    .genText, .genText:hover, .nav-link, .nav-link:active {
        color: ${(props) => props.theme.fontColor};
    }
`;