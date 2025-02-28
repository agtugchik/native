import { useAppDispatch } from "@/hooks/redux";
import { deleteGoal, Goal } from "@/store/reducers/goalsReducer";
import { Text, StyleSheet, Pressable, View } from "react-native";

interface Props {
  item: Goal;
}

export const GoalItem = ({ item }: Props) => {
  const dispatch = useAppDispatch();

  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={() => dispatch(deleteGoal(item.time))}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{item.text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem: { opacity: 0.5 },
  goalText: {
    padding: 8,
    color: "white",
  },
});
