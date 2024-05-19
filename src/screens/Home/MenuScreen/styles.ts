import { Dimensions, StyleSheet } from "react-native";

const {height} = Dimensions.get('screen')

export default StyleSheet.create({
    image:{ width: "100%", height: height * 0.6}
})