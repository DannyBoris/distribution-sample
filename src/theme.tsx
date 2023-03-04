import { theme } from "antd";
import { ThemeConfig } from "antd/es/config-provider/context";

export const appTheme: ThemeConfig = {
  algorithm: theme.darkAlgorithm,
  token: {
    colorFillSecondary: "rgba(255, 255, 255, 0.02)",
  },

  components: {
    Typography: {
      sizeMarginHeadingVerticalStart: 0,
      sizeMarginHeadingVerticalEnd: 0,
    },
    Button: {
      borderRadius: 10,
    },
    Image: {
      borderRadius: 10,
    },
    Tag: {
      fontSize: 20,
    },
    Input: {},
  },
};
