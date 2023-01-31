import { DefaultTheme } from "styled-components";

//DefaultTheme는 기본적으로 props.theme의 인터페이스로 사용됩니다.
export const darkTheme:DefaultTheme = {
    bgColor: "#2f3640",
    textColor: "white",
    accentColor: "#9c88ff",
    cardBgColor: "transparent",
}

export const lightTheme:DefaultTheme = {
    bgColor: "whitesmoke",
    textColor: "black",
    accentColor: "#9c88ff",
    cardBgColor: "white",
}