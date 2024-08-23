import { Dimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("window");

const useSafeViewArea = () => {
  const insets = useSafeAreaInsets();

  const calHeight = height - insets.bottom - insets.top;

  return {
    height: calHeight,
    width,
  };
};

export default useSafeViewArea;
