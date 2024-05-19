import { StyleSheet } from "react-native";

export default StyleSheet.create({
    card: {
        marginVertical: 10,
        marginHorizontal: 20,
        padding: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
      },
      cardContent: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 15,
      },
      info: {
        flex: 1,
      },
      title: {
        fontSize: 18,
        fontWeight: 'bold',
      },
})