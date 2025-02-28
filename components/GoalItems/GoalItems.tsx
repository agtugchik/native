import { View, FlatList, StyleSheet } from "react-native";
import { GoalItem } from "../GoalItem";
import { goalsSelector } from "@/store/selectors";
import { useAppSelector } from "@/hooks/redux";

export const GoalItems = () => {
  const { goals } = useAppSelector(goalsSelector);

  return (
    <View style={styles.goalsContainer}>
      <FlatList
        data={goals}
        renderItem={({ item }) => <GoalItem item={item} />}
        keyExtractor={(item) => item.time}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  goalsContainer: {
    flex: 1,
  },
});
