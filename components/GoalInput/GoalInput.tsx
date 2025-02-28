import { useState } from "react";
import {
  View,
  Button,
  TextInput,
  StyleSheet,
  Modal,
  Image,
} from "react-native";
import { useAppDispatch } from "@/hooks/redux";
import { addGoal } from "@/store/reducers/goalsReducer";

export const GoalInput = () => {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const dispatch = useAppDispatch();

  const goalInputHandler = (enteredText: string) => {
    setEnteredGoalText(enteredText);
  };
  const addGoalHandler = () => {
    if (enteredGoalText) {
      dispatch(addGoal({ text: enteredGoalText, time: Date.now().toString() }));
      setEnteredGoalText("");
      setModalIsVisible(false);
    }
  };
  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  };
  const endAddGoalHandler = () => {
    setModalIsVisible(false);
  };

  return (
    <>
      <Button
        title="Add New Goal"
        color={"#a065ec"}
        onPress={startAddGoalHandler}
      />
      <Modal visible={modalIsVisible} animationType="slide">
        <View style={styles.inputContainer}>
          <Image
            style={styles.image}
            source={require("../../assets/images/goal.png")}
          />
          <TextInput
            autoCorrect={false}
            style={styles.textInput}
            placeholderTextColor="#999"
            placeholder="Your course goal"
            value={enteredGoalText}
            onChangeText={goalInputHandler}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                disabled={!enteredGoalText}
                title="Add Goal"
                onPress={addGoalHandler}
                color={"#b180f0"}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Cancel"
                onPress={endAddGoalHandler}
                color={"#f31282"}
              />
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 24,
    padding: 16,
    backgroundColor: "#311b6b",
  },
  image: { width: 100, height: 100, margin: 20 },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
    width: "100%",
    padding: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
