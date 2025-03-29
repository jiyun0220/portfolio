import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    background: string;
    text: string;
    primary: string;
    secondary: string;
    accent: string;
    border: string;
    card: string;
    shadow: string;
    gradient: string;
    error: string;
    success: string;
    warning: string;
    info: string;
  }
}
