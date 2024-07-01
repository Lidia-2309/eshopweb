import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    fonts: {
      roboto: string;
      inter: string;
      primary: string;
    },

    colors: {
      primary_colors: {
        white: string;
        lilac: string;
      };
    };
  }
}