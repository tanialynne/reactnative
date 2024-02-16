import { View, StyleSheet } from "react-native";

import Colors from "../../constants/colors";

function Card({ children }) {
  return <View style={styles.inputContainer}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    marginTop: 20,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: Colors.primary600,
    shadowColor: "black",
    shadowOffset: { width: 3, height: 5 },
    shadowOpacity: 0.25,
    elevation: 5,
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "90%",
  },
});
