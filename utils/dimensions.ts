import { Dimensions } from "react-native";

const windowDimensions = Dimensions.get("window");
const screenDimensions = Dimensions.get("screen");

const dimensions = {
  windows: {
    width: windowDimensions.width,
    height: windowDimensions.height,
    scale: windowDimensions.scale,
    fontScale: windowDimensions.fontScale,
  },
  screens: {
    width: screenDimensions.width,
    height: screenDimensions.height,
    scale: screenDimensions.scale,
    fontScale: screenDimensions.fontScale,
  },
};

export default dimensions;
