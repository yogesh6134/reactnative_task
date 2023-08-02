import { StyleSheet } from "react-native";
import { FONTS, HEIGHT, WIDTH } from "../../Utils/spacing";
import { COLORS } from "../../Utils/colors";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default StyleSheet.create({
    container: {
        width: WIDTH.w0,
        height: HEIGHT.h0,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loader: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    loadingText: {
        fontSize: FONTS.f18,
        color: COLORS.black,
        marginRight: WIDTH.w20
    },

    video: {
        width: '100%',
        height: '100%',
        position: 'absolute',

    },
    muteIcon: {
        position: 'absolute',
        height: HEIGHT.h50,
        width: HEIGHT.h50
    },
    ImageText: {
        position: 'absolute',
        bottom: HEIGHT.h50,
        fontSize: FONTS.f18,
        color: COLORS.black
    }
});