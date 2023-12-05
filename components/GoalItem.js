import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

const GoalItem = ({ itemData, onDeleteItem, id }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onPress={onDeleteItem.bind(this, id)}
        style={({pressed})=> pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{itemData}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 5,
    backgroundColor: "#5e0acc",
    
  },
  goalText: {
    color: "white",
    padding: 8,
  },
  pressedItem:{
    opacity:0.5
  }
});
