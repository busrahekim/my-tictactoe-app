import { AppThemeContext } from "@/context/appThemeContext";
import { StatusBar } from "expo-status-bar";
import { useContext } from "react";
import { Platform, StyleSheet, View, Text } from "react-native";

export default function ModalScreen() {
  const theme = useContext(AppThemeContext);
  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Text style={styles.title}>Modal</Text>

      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
