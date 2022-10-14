import logo from "../../logo.svg";

import {
  Box,
  Image,
  Text,
  Link,
  Heading,
  VStack,
} from "native-base";

import ToggleDarkMode from "../ToggleDarkMode/ToggleDarkMode";
import { IAppProps, styles } from './App.theme';
import { withTheme } from "../../theme/hoc/withTheme";

function App({ bg, minHeight, justifyContent, px, styles }: IAppProps) {
  return (
    <Box
      bg={bg}
      minHeight={minHeight}
      justifyContent={justifyContent}
      px={px}
    >
      <VStack space={5} alignItems="center">
        <Image
          source={{ uri: logo }}
          alt="NativeBase logo"
          {...styles.image}
        />
        <Heading size="lg">Welcome to NativeBase</Heading>
        <Text>
          Edit{" "}
          <Box
            _text={styles.text}
            _dark={styles.darkText}
            _light={styles.lightText}
            {...styles.textBox}
          >
            src/pages/index.js
          </Box>{" "}
          and save to reload.
        </Text>
        <Link href="https://docs.nativebase.io" isExternal>
          <Text {...styles.link}>
            Learn NativeBase
          </Text>
        </Link>
        <ToggleDarkMode />
      </VStack>
    </Box>
  );
}

export default withTheme(styles)(App);
