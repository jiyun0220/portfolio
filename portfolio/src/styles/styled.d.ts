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
    selection: string;
    muted: string;
    success: string;
    error: string;
    warning: string;
    gradient: string;
    shadow: string;
  }
}
