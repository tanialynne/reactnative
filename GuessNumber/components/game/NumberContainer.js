import { View, Text, StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/colors";

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{children}</Text>
    </View>
  );
}

const deviceWidth = Dimensions.get("window").width;

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.secondary500,
    padding: 12,
    borderRadius: 8,
    marginVertical: 8,
    marginHorizontal: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
    fontFamily: "open-sans-bold",
    color: Colors.secondary500,
    fontSize: deviceWidth < 380 ? 30 : 40,
    minWidth: "50%",
    textAlign: "center",
  },
});
