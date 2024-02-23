import { View, Text } from "react-native";

function MealDetailScreen({ route }) {
  const mealId = route.params.mealId;
  return (
    <View>
      <Text>MealDetailScreen {mealId}!</Text>
    </View>
  );
}

export default MealDetailScreen;
