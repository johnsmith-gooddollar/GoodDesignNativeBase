import { extendTheme } from 'native-base'

import { theme as App } from '../components/App/App.theme';
import { theme as ToggleDarkMode } from '../components/ToggleDarkMode/ToggleDarkMode.theme';

export const theme = extendTheme({
  config: {
    initialColorMode: "dark",
  },
  components: {
    App,
    ToggleDarkMode,
  }
});

// extend the theme
export type MyThemeType = typeof theme;

declare module "native-base" {
  interface ICustomTheme extends MyThemeType {}
}
