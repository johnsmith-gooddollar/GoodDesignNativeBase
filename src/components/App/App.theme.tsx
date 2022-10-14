import { withThemingTools } from '../../theme/utils/themingTools'

export interface IAppProps {
  bg?: string;
  minHeight?: string;
  justifyContent?: string;
  px?: number;
  styles?: any;
}

export const theme = {
  defaultProps: {},
  baseStyle: withThemingTools(({ colorModeValue }) => ({
    bg: colorModeValue("coolGray.50", "coolGray.900"),
    minHeight: "100vh",
    justifyContent: "center",
    px: 4
  })),
}

export const styles = () => ({
  image: {
    resizeMode: "contain",
    size: 220
  },
  text: {
    fontFamily: "monospace",
    fontSize: "sm",
  },
  textBox: {
    px: 2,
    py: 1,
  },
  lightText: {
    bg: "blueGray.200"
  },
  darkText: {
    bg: "blueGray.800"
  },
  link: {
    color: "primary.500",
    underline: true,
    fontSize: "xl"
  }
})
