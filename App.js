import { Button, StyleSheet, View, FlatList } from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";
export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [yearlyGoals, setYearlyGoals] = useState([]);
  const addGoalHandler = (enteredGoal) => {
    setYearlyGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredGoal, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  };
  const deleteGoalHandler = (id) => {
    setYearlyGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  };
  const startAddGoalHandler = () => {
    setModalVisible(true);
  };
  const endAddGoalHandler = () => {
    setModalVisible(false);
  };
  return (
    <>
    <StatusBar style="light"/>
    <View style={styles.appContainer}>
      <Button
        title="Add New Gaol"
        color="#a065ec"
        onPress={startAddGoalHandler}
      />
      {modalVisible && (
        <GoalInput onAddGoal={addGoalHandler} visible={modalVisible} onCancel={endAddGoalHandler} />
      )}

      <View style={styles.goalsContainer}>
        <FlatList
          alwaysBounceVertical={false}
          data={yearlyGoals}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          renderItem={(itemData) => (
            <GoalItem
              itemData={itemData.item.text}
              onDeleteItem={deleteGoalHandler}
              id={itemData.item.id}
            />
          )}
        ></FlatList>
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});
