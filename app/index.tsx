import { View, StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { store } from "@/store";
import { GoalInput } from "@/components/GoalInput";
import { GoalItems } from "@/components/GoalItems";

export default function Index() {
  return (
    <Provider store={store}>
      <View style={styles.appContainer}>
        <GoalInput />
        <GoalItems />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: "#1e085a",
  },
});
