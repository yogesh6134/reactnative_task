import { StyleSheet } from "react-native";
import { HEIGHT, WIDTH } from "../../Utils/spacing";
import { COLORS } from "../../Utils/colors";

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.primary,
    },
    video: {
      width: WIDTH.w0,
      height: HEIGHT.h0,
    },
  });