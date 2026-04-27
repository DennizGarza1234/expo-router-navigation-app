import { useLocalSearchParams, useRouter } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function UserProfilePage() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Profile Page</Text>
      <Text style={styles.text}>User ID: {id}</Text>

      {/* Programmatic navigation */}
      <Button
        title="Go Back"
        onPress={() => router.back()}
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
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    color: "white",
    marginBottom: 20,
  },
});