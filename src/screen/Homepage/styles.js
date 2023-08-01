import { StyleSheet } from "react-native";
import { COLORS } from "../../Utils/colors";
import { HEIGHT } from "../../Utils/spacing";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primary,
        alignItems: 'center'
    },
    Heading: {
        color: COLORS.black,
        fontSize: 20,
        marginBottom: HEIGHT.h15
    }
})