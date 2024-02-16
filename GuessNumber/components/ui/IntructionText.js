import { Text, StyleSheet } from "react-native";

import Colors from "../../constants/colors";

function InstructionText({ children, style }) {
  return <Text style={[styles.instruction, style]}>{children}</Text>;
}

export default InstructionText;

const styles = StyleSheet.create({
  instruction: {
    fontFamily: "open-sans",
    color: Colors.secondary500,
    fontSize: 18,
  },
});
