import {
  Text,
  HStack,
  Switch,
  useColorMode,
} from "native-base";
import { withTheme } from "../../theme/hoc/withTheme";

import { IToggleDarkModeProps } from './ToggleDarkMode.theme'

function ToggleDarkMode({ space }: IToggleDarkModeProps) {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack space={space}>
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === "light"}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === "light" ? "switch to dark mode" : "switch to light mode"
        }
      />
      <Text>Light</Text>
    </HStack>
  );
}

export default withTheme()(ToggleDarkMode)
