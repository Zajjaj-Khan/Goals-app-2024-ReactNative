import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";
import React, { useState } from "react";

const GoalInput = ({ onAddGoal, visible, onCancel }) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };
  const addGoalHandler = () => {
    onAddGoal(enteredGoal);
    setEnteredGoal("");
  };
  return (
    <Modal animationType="slide" visible={visible}>
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/goal.png")}
          style={styles.img}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your 2024 Goal"
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.ButtonContainer}>
         
          <View style={styles.button}>
            <Button title="Cancel" onPress={onCancel} color="#f31282" />
          </View>
          <View style={styles.button}>
            <Button
              title="Add Goal!"
              onPress={addGoalHandler}
              color="#5e0acc"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor:"#e4d0ff",
    borderRadius:6,
    color:"#120438",
    width: "100%",
    marginRight: 6,
    padding: 6,
  },
  ButtonContainer: {
    flexDirection: "row",
    marginTop: 8,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },

  img: {
    width: 100,
    height: 100,
    margin: 8,
  },
});
