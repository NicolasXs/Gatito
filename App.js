import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Servicos from "./src/screens/Servicos";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Servicos />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
