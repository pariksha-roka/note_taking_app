import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

function ViewNotes() {
  return (
    <View>
      <View>
        <Text>You don't have any Notes!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },

  titleContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  title: {
    fontSize: 20,
  },
});

export default ViewNotes;