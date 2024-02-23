import {
  Text,
  View,
  Pressable,
  StyleSheet,
  Image,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

function MealItem({
  id,
  title,
  imageURL,
  duration,
  complexity,
  affordability,
}) {
  const navigation = useNavigation();
  function selectMealItemHandler() {
    navigation.navigate("MealDetail", {
      mealId: id,
    });
  }

  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={selectMealItemHandler}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageURL }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.detailItem}>{duration}m</Text>
            <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
            <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    overflow: "hidden",
    margin: 16,
    elevation: 4,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.35,
    shadowRadius: 7,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  detailItem: {
    marginHorizontal: 8,
    fontSize: 12,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    padding: 8,
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
