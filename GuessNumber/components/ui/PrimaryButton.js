import { Text, Pressable, View, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{ color: Colors.primary300 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;
// Path: components/PrimaryButton.js

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 25,
    marginVertical: 5,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 30,
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    elevation: 3,
  },
  buttonText: {
    fontFamily: "open-sans-bold",
    color: "white",
    textAlign: "center",
    fontSize: 14,
  },
  pressed: {
    backgroundColor: Colors.primary300,
  },
});
