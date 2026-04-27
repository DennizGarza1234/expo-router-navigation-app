import { useRouter } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function AboutPage() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Page</Text>

      {/* Push navigation */}
      <Button
        title="Go Home (Push)"
        onPress={() => router.push("/")}
      />

      {/* Replace navigation */}
      <Button
        title="Go Home (Replace)"
        onPress={() => router.replace("/")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#111",
  },
  title: {
    fontSize: 24,
    color: "white",
    marginBottom: 20,
  },
});