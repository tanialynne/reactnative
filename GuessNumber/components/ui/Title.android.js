import { Text, StyleSheet, Platform } from "react-native";
import Colors from "../../constants/colors";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    marginVertical: 16,
    fontWeight: "bold",
    color: "white",
    //borderWidth: Platform.OS === "android" ? 2 : 0,
    borderWidth: Platform.select({ android: 2, ios: 0 }),
    borderColor: "white",
    padding: 12,
    textAlign: "center",
    maxWidth: "80%",
  },
});
